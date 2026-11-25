import { useState } from 'react'
import { API_URL } from '../api'
import { useAuth } from '../auth/useAuth'

function Account() {
  const [mode, setMode] = useState('login')
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [notice, setNotice] = useState(null)
  const { currentUser, setCurrentUser, authError, setAuthError, isRestoringSession } = useAuth()

  const switchMode = (nextMode) => {
    setMode(nextMode)
    setNotice(null)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formElement = event.currentTarget
    setIsSubmitting(true)
    setNotice(null)

    const form = new FormData(formElement)
    setAuthError(null)
    const payload = {
      email: String(form.get('email') || '').trim(),
      password: String(form.get('password') || ''),
      remember: form.get('remember') === 'on',
    }

    if (mode === 'register') {
      payload.fullName = String(form.get('fullName') || '').trim()
    }

    try {
      const response = await fetch(`${API_URL}/api/${mode}`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Không thể hoàn tất yêu cầu.')
      }

      if (mode === 'register') {
        setNotice({ type: 'success', text: 'Tạo tài khoản thành công! Hãy đăng nhập để tiếp tục.' })
        formElement.reset()
        setMode('login')
      } else {
        setCurrentUser(data.user)
        setNotice({ type: 'success', text: `Xin chào ${data.user.fullName}!` })
      }
    } catch (error) {
      setNotice({
        type: 'error',
        text: error.message === 'Failed to fetch'
          ? 'Chưa thể kết nối máy chủ. Vui lòng chạy backend tại cổng 3000.'
          : error.message,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const logout = async () => {
    setIsSubmitting(true)
    setNotice(null)
    try {
      const response = await fetch(`${API_URL}/api/logout`, {
        method: 'POST',
        credentials: 'include',
      })
      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.message || 'Không thể đăng xuất.')
      }
      setCurrentUser(null)
      setNotice({ type: 'success', text: 'Bạn đã đăng xuất.' })
    } catch (error) {
      setNotice({
        type: 'error',
        text: error.message === 'Failed to fetch'
          ? 'Chưa thể kết nối máy chủ. Vui lòng thử lại.'
          : error.message,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="account-page">
      <div className="account-shell">
        <section className="account-story" aria-label="Giới thiệu dừa sáp Trà Vinh">
          <div className="account-story-content">
            <p className="account-kicker">Dừa sáp Trà Vinh</p>
            <h1>Kết nối để cùng<br />gìn giữ<br />giá trị bản địa</h1>
            <p>
              Tạo tài khoản để lưu lại hành trình khám phá cây dừa đặc sản
              và những câu chuyện từ vùng đất Cầu Kè.
            </p>
            <div className="account-story-meta">
              <span><i className="bi bi-geo-alt-fill" aria-hidden="true" /> Cầu Kè · Trà Vinh</span>
              <span><i className="bi bi-award" aria-hidden="true" /> Chỉ dẫn địa lý</span>
            </div>
          </div>
        </section>

        <section className="account-form-panel" aria-labelledby="account-title">
          {isRestoringSession ? (
            <p className="account-loading" role="status">Đang kiểm tra phiên đăng nhập...</p>
          ) : currentUser ? (
            <div className="account-profile">
              <div className="account-avatar">
                {currentUser.fullName?.charAt(0)?.toUpperCase() || 'U'}
              </div>
              <p className="account-kicker">Tài khoản của bạn</p>
              <h2 id="account-title">{currentUser.fullName}</h2>
              <p className="account-profile-email">{currentUser.email}</p>
              {(notice || authError) && (
                <div className={`account-notice ${notice?.type || 'error'}`} role="status">
                  {notice?.text || authError}
                </div>
              )}
              <button
                className="account-submit account-logout"
                type="button"
                onClick={logout}
                disabled={isSubmitting}
              >
                <i className="bi bi-box-arrow-right" aria-hidden="true" />
                {isSubmitting ? 'Đang xử lý...' : 'Đăng xuất'}
              </button>
            </div>
          ) : (
            <>
              <div className="account-tabs" role="tablist" aria-label="Chọn đăng nhập hoặc đăng ký">
                <button
                  type="button"
                  role="tab"
                  aria-selected={mode === 'login'}
                  className={mode === 'login' ? 'active' : ''}
                  onClick={() => switchMode('login')}
                >
                  Đăng nhập
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={mode === 'register'}
                  className={mode === 'register' ? 'active' : ''}
                  onClick={() => switchMode('register')}
                >
                  Đăng ký
                </button>
              </div>

              <div className="account-heading">
                <p className="account-kicker">{mode === 'login' ? 'Chào mừng trở lại' : 'Gia nhập cộng đồng'}</p>
                <h2 id="account-title">{mode === 'login' ? 'Đăng nhập tài khoản' : 'Tạo tài khoản mới'}</h2>
              </div>

              {(notice || authError) && (
                <div className={`account-notice ${notice?.type || 'error'}`} role="status">
                  {notice?.text || authError}
                </div>
              )}

              <form className="account-form" onSubmit={handleSubmit}>
                {mode === 'register' && (
                  <label>
                    <span>Họ và tên</span>
                    <div className="account-input">
                      <i className="bi bi-person" aria-hidden="true" />
                      <input
                        name="fullName"
                        type="text"
                        minLength="2"
                        maxLength="100"
                        placeholder="Nguyễn Văn An"
                        autoComplete="name"
                        required
                      />
                    </div>
                  </label>
                )}

                <label>
                  <span>Email</span>
                  <div className="account-input">
                    <i className="bi bi-envelope" aria-hidden="true" />
                    <input
                      name="email"
                      type="email"
                      maxLength="255"
                      placeholder="ban@example.com"
                      autoComplete="email"
                      required
                    />
                  </div>
                </label>

                <label>
                  <span>Mật khẩu</span>
                  <div className="account-input">
                    <i className="bi bi-lock" aria-hidden="true" />
                    <input
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      minLength={mode === 'register' ? 8 : 1}
                      maxLength="72"
                      placeholder={mode === 'register' ? 'Ít nhất 8 ký tự' : 'Nhập mật khẩu'}
                      autoComplete={mode === 'register' ? 'new-password' : 'current-password'}
                      required
                    />
                    <button
                      className="password-toggle"
                      type="button"
                      onClick={() => setShowPassword((visible) => !visible)}
                      aria-label={showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                    >
                      <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`} aria-hidden="true" />
                    </button>
                  </div>
                </label>

                {mode === 'login' && (
                  <div className="account-options">
                    <label className="remember-option">
                      <input type="checkbox" name="remember" />
                      <span>Ghi nhớ đăng nhập</span>
                    </label>
                  </div>
                )}

                <button className="account-submit" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Đang xử lý...' : (mode === 'login' ? 'Đăng nhập' : 'Tạo tài khoản')}
                  <i className="bi bi-arrow-right" aria-hidden="true" />
                </button>
              </form>
            </>
          )}
        </section>
      </div>
    </main>
  )
}

export default Account
