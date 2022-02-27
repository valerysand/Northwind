import AuthMenu from "../../AuthArea/AuthMenu/AuthMenu";
import Logo from "../Logo/Logo";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header">
            <Logo />
            <AuthMenu />
            <h1>&rarr; Northwind Traders &larr;</h1>
        </div>
    );
}

export default Header;