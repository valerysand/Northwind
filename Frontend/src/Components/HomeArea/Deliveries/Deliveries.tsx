import BackColorByHour from "../BackColorByHour/BackColorByHour";
import "./Deliveries.css";

interface DeliveriesProps {
	startingHour: string;
    endingHour: string;
}

function Deliveries(props: DeliveriesProps): JSX.Element {
    return (
        <div className="Deliveries">
			<p>
                Delivery Hours: {props.startingHour} - {props.endingHour}
            </p>
        </div>
    );
}

export default BackColorByHour(Deliveries); // Using the HOC

