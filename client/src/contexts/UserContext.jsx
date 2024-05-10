import { createContext } from "react";

const UserContext = createContext();

const backendURL = "https://reborn-api.onrender.com/api/v1/users/";

export const UserProvider = ({children}) => {
    return <UserContext.Provider>{children}</UserContext.Provider>
}