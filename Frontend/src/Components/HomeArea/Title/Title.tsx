import { useEffect } from "react";
import "./Title.css";

function Title(): JSX.Element {

    const title = "Northwind Traders";

    // Invoking useEffect as componentDidMount
    useEffect(() => {

        // Side-Effect - needs to perform only once:
        document.title = title;

    }, []);

    return (
        <div className="Title Box">
            <p>{title}</p>
        </div>
    );
}

export default Title;
