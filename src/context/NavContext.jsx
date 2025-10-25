import React from "react";


const navContext = React.createContext();

function NavProvider({children}) {
    const [selected, setSelected] = React.useState(0);
  return (
    <navContext.Provider value={{selected, setSelected}}>
        {children}
    </navContext.Provider>
    
  );
}
export {NavProvider, navContext};