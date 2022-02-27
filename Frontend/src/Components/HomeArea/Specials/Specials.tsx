import "./Specials.css";

// Conditional Rendering

function Specials(): JSX.Element {
    return (
        <div className="Specials Box">

            <p>
                Our Specials:

                {isWeekend() ? " Pizza | " : " Pasta | "}
                
                { isWeekend() && " Fish & Chips | " }

                { isWeekend() || " Sushi | " }

            </p>

        </div>
    );
}

function isWeekend(): boolean {
    const now = new Date();
    const dayOfWeek = now.getDay() + 1; // Sunday = 1, Monday = 2...
    return dayOfWeek >= 6;
}

export default Specials;
