import React, {createContext, useReducer} from 'react'
// import AppReducer from './AppReducer'
export default (state,action) =>{
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return{
                ...state,
                transactions:state.transactions.filter(transaction => transaction.id !== action.payload)
            }
            case 'ADD_TRANSACTION':
                return{
                    ...state,
                    transactions:[...state.transactions,action.payload]
                }    

        default:
            return state;
    }

}

// Initial state 
const initialState = {
    transactions:[]
}
// Create context 
export const GlobalContext = createContext(initialState);
//Provider Components
export const GlobalProvider =({ children }) =>{
const [state, dispatch] = useReducer(AppReducer, initialState)
// Action 
function deleteTransaction(id){
    dispatch({
        type:'DELETE_TRANSACTION',
        payload:id
    })
}
function addTransaction(transaction){
    dispatch({
        type:'ADD_TRANSACTION',
        payload:transaction

    })
}

return(
    <GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>
)
}