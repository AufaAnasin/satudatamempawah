 import { useRef } from 'react';
import { useContext, useState, createContext } from 'react'

const MenuContext = createContext();

function MenuProvider({children}) {
    const activeSectionRef = useRef(null)
    const [selectedMenu, setSelectedMenu] = useState('')
    
  return (
    <MenuContext.Provider value={{selectedMenu, setSelectedMenu, activeSectionRef }}>
        {children}
    </MenuContext.Provider>
  )
}

function useMenu() { 
    return useContext(MenuContext)
}

export { MenuProvider, useMenu }