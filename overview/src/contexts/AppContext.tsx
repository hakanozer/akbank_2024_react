import { createContext, FC, PropsWithChildren, SetStateAction, useState } from "react";

interface IContext {
    likes: number[],
    setLikes: React.Dispatch<React.SetStateAction<number[]>>
}

const defaultContext:IContext = {
    likes: [],
    setLikes: () => {}
}

export const AppContext = createContext<IContext>(defaultContext)

export const ContextProvider: FC<PropsWithChildren> = (props) => {
    const [likes, setLikes] = useState<number[]>([])
    const sendObj = {likes, setLikes}
    return (
        <AppContext.Provider value={sendObj}>
            {props.children}
        </AppContext.Provider>
    )
}