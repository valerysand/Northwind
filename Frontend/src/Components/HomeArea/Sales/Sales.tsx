import "./Sales.css";

interface SalesProps {
    category: string; // Sale category.
    percent: number; // Sale percent.
}

function Sales(props: SalesProps): JSX.Element {
    return (
        <div className="Sales Box">
			<p>Sale: {props.percent}% discount on all {props.category}</p>
        </div>
    );
}

export default Sales;
