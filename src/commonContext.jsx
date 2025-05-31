import { createContext } from 'react';
import {userInfo} from './contentData/data'

export const MyContext=createContext('')

export const MyProvider=({children})=>{
    console.log("userinfo=>",userInfo)
    return(
        <MyContext.Provider value={userInfo}>
            {children}
        </MyContext.Provider>
    )
}

