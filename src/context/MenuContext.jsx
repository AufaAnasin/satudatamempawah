 import { useContext, useState, createContext } from 'react'

const MenuContext = createContext();

function MenuProvider({children}) {
    const [selectedMenu, setSelectedMenu] = useState('menu1')
    
  return (
    <MenuContext.Provider value={{selectedMenu, setSelectedMenu}}>
        {children}
    </MenuContext.Provider>
  )
}

function useMenu() { 
    return useContext(MenuContext)
}

export { MenuProvider, useMenu }