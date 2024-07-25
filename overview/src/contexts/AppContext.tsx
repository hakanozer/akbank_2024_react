import { createContext, FC, PropsWithChildren, SetStateAction, useState } from "react";

interface IContext {
    likes: number[],
    setLikes: React.Dispatch<React.SetStateAction<number[]>>,
    token: string,
    setToken: React.Dispatch<SetStateAction<string>>
}

const defaultContext:IContext = {
    likes: [],
    setLikes: () => {},
    token: '',
    setToken: () => {},
}

export const AppContext = createContext<IContext>(defaultContext)

export const ContextProvider: FC<PropsWithChildren> = (props) => {
    const [likes, setLikes] = useState<number[]>([])
    const [token, setToken] = useState('')
    const sendObj = {likes, setLikes, token, setToken}
    return (
        <AppContext.Provider value={sendObj}>
            {props.children}
        </AppContext.Provider>
    )
}