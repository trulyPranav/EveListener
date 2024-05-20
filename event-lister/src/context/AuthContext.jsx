import { createContext, useEffect, useContext, useReducer } from "react";

const initialState = {
  id : null,
  name : null
};

export const authContext = createContext(initialState);

const authReducer = (state, action) => {
  switch(action.type){
    case 'LOGIN_START':
        return{
            id: null,
            name : null
        };
    case 'LOGIN_SUCCESS':
        return{
            id : action.payload.id,
            name : action.payload.name
        };
    case 'LOGOUT':
        return{
            id: null,
            name : null
        };
    default:
        return state;
    
  }
};

export const authContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    return <authContext.Provider value = {{id:state.id, name:state.name, dispatch}}>
        {children}
    </authContext.Provider>
}
