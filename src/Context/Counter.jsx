import { createContext } from "react";
export  const CounterContext =createContext(null);
export const CouterProvider= ()=>{
    return(
        <CounterContext.Provider>
            
        </CounterContext.Provider>
    )
}