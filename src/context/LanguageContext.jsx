import {createContext, useState, useContext} from "react";
import PropTypes from "prop-types";

// Create the Language Context
const LanguageContext = createContext("en");

// Create a provider component
export const LanguageProvider = ({children}) => {
    LanguageProvider.propTypes = {
        children: PropTypes.node.isRequired,
    };
    const [language, setLanguage] = useState("en"); // Default language is English

    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === "en" ? "ukr" : "en"));
    };

    return (
        <LanguageContext.Provider value={{language, toggleLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
};

// Custom hook to use the Language Context
export const useLanguage = () => useContext(LanguageContext);