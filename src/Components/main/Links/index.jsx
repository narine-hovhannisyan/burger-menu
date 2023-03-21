import React from "react";
//Components
import Itemm from "./item";
//Constants
import mainNav from "../../../Constants/mainNav";

const Navbar = () => {
    return (
        <ul>
            {
                mainNav.map((item) => {
                    return (
                        <Itemm key={item.id} name={item.name} link={item.link}/>
                    )
                })
            }
        </ul>
    )
}
export default Navbar;