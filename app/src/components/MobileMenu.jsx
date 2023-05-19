import { MobileMenuStyled, Overlay } from "./styles/MobileMenu.styled";
import { useState } from "react";


export default function MobileMenu() {
    const [open, setOpen] = useState(false)

    function handleOpenMenu() {
        setOpen(true)
    }
    function handleCloseMenu() {
        setOpen(false)
    }
    return (
        <MobileMenuStyled>
            {open && <Overlay />}
            <nav className={open ? 'open' : ''}>
                {!open && <button onClick={handleOpenMenu} className="icon-menu"><img src="/images/icon-hamburger.svg" /></button>}
                <div className="menu">
                    <a href="#">About</a>
                    <hr />
                    <a href="#">Discover</a>
                    <hr />
                    <a href="#">Get Started</a>
                </div>
            </nav>

            {open && <button onClick={handleCloseMenu}><img src="/images/icon-close-menu.svg" /></button>}
        </MobileMenuStyled>
    )
}