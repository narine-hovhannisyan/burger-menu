import React from "react";
//Styles
import './footer.css';
// Components
import Nav from "./Nav";

const Footer = () => {
    return (<>
        <footer>
            <Nav/>
            <div className="text">
                &copy;{(new Date().getFullYear())}
                Akhaltsikhe Georgia
            </div>
        </footer>
    </>)
}
export default Footer;