import React, {useState} from 'react';
// styles
import './main.css';
//Component
import Navbar from "./Links";

const NavbarMenu = () => {
    const [isOpen, setOpen] = useState(false);

    const clickButton = () => {
        setOpen(true);
    }
    const clicksecond = () => {
        setOpen(false)
    }

    return (
        <>
            <header>
                <div className="menu-btn" onClick={clickButton} onDoubleClick={clicksecond}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </header>

            {
                isOpen && (
                    <div>
                        <nav>
                            <Navbar/>
                        </nav>
                    </div>
                )
            }
        </>
    )
}
export default NavbarMenu;