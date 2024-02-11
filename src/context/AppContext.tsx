import { createContext,ReactNode } from "react";

interface IAppContext {

}

const defaultValues : IAppContext = {}


export const AppContext = createContext<IAppContext>(defaultValues)

export const AppContextProvider = ({ children }:{children:ReactNode}) => {
    return <AppContext.Provider value={defaultValues}>
        {children}
    </AppContext.Provider>
}