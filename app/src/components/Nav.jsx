import { NavStyled } from "./styles/Nav.styled";
import MobileMenu from './MobileMenu';


export default function Nav() {
    return (
        <NavStyled>
            <img src="/images/logo.svg" />
            <MobileMenu />
        </NavStyled>
    )
}