import { createContext, useState } from "react";
export const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
    const [show, setShow] = useState(true);
    return (
        <ToggleContext.Provider value="">
            {children}
        </ToggleContext.Provider>
    )
};
