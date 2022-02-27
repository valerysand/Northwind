import "./Menu.css";
import { NavLink } from "react-router-dom";

function Menu(): JSX.Element {
    return (
        <div className="Menu">

            <NavLink to="/home">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/about">About</NavLink>

        </div>
    );
}

export default Menu;
