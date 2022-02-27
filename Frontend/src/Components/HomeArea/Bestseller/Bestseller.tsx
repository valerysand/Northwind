import { Component } from "react";
import "./Bestseller.css";

interface BestsellerState {
    item: string;
    price: number;
}

class Bestseller extends Component<{}, BestsellerState> { // First one is always the Props, second one is always the state

    // The constructor job is two things: 
    // 1. Get the props as argument and pass it to the parent.
    // 2. Init the state as a new object
    public constructor(props: {}) {
        super(props); // 1

        // The data managed by our component (called state):
        this.state = { item: "", price: 0 }; // 2
    }

    private initProduct = () => {
        // Won't work: 
        // this.state = { item: "Pizza", price: 70 };

        // Won't work: 
        //this.state.item = "Pizza";
        //this.state.price = 70;

        // The only way to change the state:
        this.setState({ item: "Pizza", price: 70 }); // Will render the component immediately!
    }

    private showProduct = () => {
        alert("Bestseller Product: " + this.state.item + ", Price: " + this.state.price);
    }

    public render(): JSX.Element {
        return (
            <div className="Bestseller Box">
                <p>
                    <button onClick={this.initProduct}>Init Bestseller Product</button>
                    <button onClick={this.showProduct}>Show Bestseller Product</button>
                    <span>Bestseller Product: {this.state.item}, Price: {this.state.price}</span>
                </p>
            </div>
        );
    }
}

export default Bestseller;