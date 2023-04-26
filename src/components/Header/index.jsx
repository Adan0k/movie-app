import React, { Children } from "react";

const Header = ({ children }) => {
    return (
        <>
            <header>
                {children}
            </header>
        </>
    );
}
export default Header;