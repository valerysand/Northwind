import { useLocation, useNavigate } from "react-router";
import "./RouteParams.css";

function RouteParams(InnerComponent: Function): Function {

    const location = useLocation();
    const navigate = useNavigate();

    return function (props: any): JSX.Element {
        return <InnerComponent {...props} location={location} navigate={navigate} />
    }

}

export default RouteParams;
