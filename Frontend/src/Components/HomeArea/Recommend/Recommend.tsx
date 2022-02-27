import { SyntheticEvent } from "react";
import "./Recommend.css";

function Recommend(): JSX.Element {

    const item1 = "Irish Coffee";
    const item2 = "Green Tea";

    function showItem1(): void {
        alert("Recommend Item: " + item1);
    }

    function showItem2(args: SyntheticEvent): void {
        console.log(args); // Data regarding the event.
        console.log(args.target); // The HTML element raising the event.
        alert("Recommend Item: " + item2);
    }

    return (
        <div className="Recommend Box">
            <p>
                <button onClick={showItem1}>Recommend 1</button>
                <button onClick={showItem2}>Recommend 2</button>
            </p>
        </div>
    );
}

export default Recommend;
