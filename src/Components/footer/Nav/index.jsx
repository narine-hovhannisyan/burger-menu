import React from "react";
//Components
import Item from "./item";
// Constants
import footerNav from "../../../Constants/footerNav";

const Nav = () => {
    return (
        <ul className="socials">
            {
                footerNav.map((item) => {
                    return (
                        <Item key={item.id} name={item.name}/>
                    )
                })
            }
        </ul>
    )
}
export default Nav;