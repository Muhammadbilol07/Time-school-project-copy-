import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null)

export function AuthProvider({children}){
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : null
    })

    const login = (token) => {
        setUser(token)
        localStorage.setItem("user", JSON.stringify(token))
    }

    const logOut = () => {
        setUser(null)
        localStorage.removeItem("user")
    }

    return (
        <AuthContext.Provider value={{user, login, logOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)