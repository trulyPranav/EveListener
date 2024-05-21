import { createContext, useEffect, useContext, useReducer } from "react";

const initialState = {
  user : null,
  pwd : null
};

export const authContext = createContext(initialState);

const authReducer = (state, action) => {
  switch(action.type){
    case 'LOGIN_START':
        return{
            user: null,
            pwd : null
        };
    case 'LOGIN_SUCCESS':
        return{
            user : action.payload.user,
            pwd : action.payload.pwd
        };
    case 'LOGOUT':
        return{
            user: null,
            pwd : null
        };
    default:
        return state;
    
  }
};

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    return <authContext.Provider value = {{user:state.user, pwd:state.pwd, dispatch}}>
        {children}
    </authContext.Provider>
}
