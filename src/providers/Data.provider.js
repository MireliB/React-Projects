import React, { useContext, useState, createContext } from "react";


export const DataContext = createContext({});

export function useDataProvider(){
    return useContext(DataContext)
}

const DataProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const [lists, setLists] = useState([]);

    const updateCartItems = (updatedCartItems) => {
        setCartItems(updatedCartItems);
    }

    const updateLists = (updatedLists) => {
        setLists(updatedLists);
    }

    return (
        <DataContext.Provider value={{cartItems: cartItems, updateCustomers: updateCartItems, lists: lists, updateErrors: updateLists, setCartItems, setLists}}>
            {children}
        </DataContext.Provider>
    );
}
export default DataProvider;
