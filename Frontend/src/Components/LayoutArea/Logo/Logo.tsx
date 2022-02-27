import "./Logo.css";
import logoImage from "../../../Assets/Images/logo.jpg";

function Logo(): JSX.Element {
    return (
        <div className="Logo">
			<img src={logoImage} />
        </div>
    );
}

export default Logo;
