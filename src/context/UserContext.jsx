import { createContext, useContext, useState } from "react"

const UserContext = createContext()

export const useUser = () => useContext(UserContext)

export function UserProvider({ children }) {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('session')))

  const setUserAndStorage = (newUser) => {
    setUser(newUser)
    if (newUser) {
      localStorage.setItem('session', JSON.stringify(newUser))
    } else {
      localStorage.removeItem('session')
    }
  }

  return (
    <UserContext.Provider value={[user, setUserAndStorage]}>
      {children}
    </UserContext.Provider>
  )
}
