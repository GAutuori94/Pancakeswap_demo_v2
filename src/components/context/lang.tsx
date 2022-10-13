import React, { useReducer, createContext, FC, ReactNode } from 'react';


import arSA from '../../../public/locales/ar-SA.json'
import bnBD from '../../../public/locales/bn-BD.json'
import deDE from '../../../public/locales/de-DE.json'
import elGR from '../../../public/locales/el-GR.json' 
import enAU from '../../../public/locales/en-AU.json'

enum LangActionType {
    SET_LANGUAGE = 'SET_LANGUAGE'
}

interface LangState {
    language: string;
}

interface LangStateProps {
    children: ReactNode;
}

interface SetLanguageAction {
    type: typeof LangActionType.SET_LANGUAGE;
    payload: string;
}

interface ContextProps {
    state: LangState;
    dispatch: {
        setLanguage: (lang:string) => void;
        translate: (key:string) => string; 

    }
}

const langReducer = (state:LangState, action: SetLanguageAction): LangState => {
    switch(action.type) {
        case LangActionType.SET_LANGUAGE: 
        return{ 
            language: action.payload
        }
        default: 
        return state;
    }
}

const localStorageLang = localStorage.getItem('language');
const initialState = {
    language: localStorageLang ? localStorageLang : 'en-AU'
}

export const LangContext = createContext({} as ContextProps); 

const LangState: FC<LangStateProps> = ({children}) => {
    const [state, dispatch] = useReducer(langReducer, initialState);

    const setLanguage = (lang: string) => {
        localStorage.setItem('language', lang);
        dispatch({
            type: LangActionType.SET_LANGUAGE,
            payload: lang
        });
    }
    const translate = (key:string): string => {
        const { language } = state; 
        let langData: {[key: string]: string} = {}; 

        if (language === 'ar-SA'){
            langData = arSA;
        
        } if (language === 'el-GR'){
            langData = bnBD;
        }
         if (language === 'de-DE'){
            langData = deDE;
        }
         if (language === 'el-GR'){
            langData = elGR;
        }
         if (language === 'en-AU'){
            langData = enAU;
        }

        return langData[key];
    }
    return(
        <LangContext.Provider value={{state, dispatch: {setLanguage, translate}}}>
            {children}
        </LangContext.Provider>
    )
}
export default LangState;
