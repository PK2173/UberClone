import { createContext, useState } from "react";


export const CapatainDataContext = createContext();

const CapatainContext = ({children})=>{
    const [capatain, setCapatain] = useState(null);
        const [isLoading, setisLoading] = useState(false);
        const [error, seterror] = useState(null);
        const updateCaptain = (capatain)=>{
            setCapatain(capatain);
        }
        return(
            <CapatainDataContext.Provider value={{
                capatain, setCapatain,
                isLoading, setisLoading,
                error, seterror,updateCaptain
                }}>
                    {children}
                </CapatainDataContext.Provider>
        )
}

export default CapatainContext;