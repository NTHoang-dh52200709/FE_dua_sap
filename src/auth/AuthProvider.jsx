import { useEffect, useState } from 'react'
import { API_URL } from '../api'
import { AuthContext } from './AuthContext'

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [authError, setAuthError] = useState(null)
  const [isRestoringSession, setIsRestoringSession] = useState(true)

  useEffect(() => {
    let isActive = true

    const restoreSession = async () => {
      try {
        const response = await fetch(`${API_URL}/api/me`, { credentials: 'include' })
        if (response.status === 401) return

        const data = await response.json()
        if (!response.ok) {
          throw new Error(data.message || 'Không thể kiểm tra phiên đăng nhập.')
        }

        if (isActive) setCurrentUser(data.user)
      } catch (error) {
        if (!isActive) return
        setAuthError(
          error.message === 'Failed to fetch'
            ? 'Chưa thể kết nối máy chủ. Hãy kiểm tra backend và cấu hình database.'
            : error.message,
        )
      } finally {
        if (isActive) setIsRestoringSession(false)
      }
    }

    restoreSession()
    return () => {
      isActive = false
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{ currentUser, setCurrentUser, authError, setAuthError, isRestoringSession }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
