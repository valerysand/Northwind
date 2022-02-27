import { Component } from "react";
import "./RandomBrand.css";
import adidasLogo from "../../../Assets/Images/Shoes/AdidasLogo.jpg";
import newBalanceLogo from "../../../Assets/Images/Shoes/NewBalanceLogo.jpg";
import nikeLogo from "../../../Assets/Images/Shoes/NikeLogo.jpg";
import pumaLogo from "../../../Assets/Images/Shoes/PumaLogo.png";
import vansLogo from "../../../Assets/Images/Shoes/VansLogo.jpg";

interface RandomBrandState {
    imageSource: string;
}

class RandomBrand extends Component<{}, RandomBrandState> {

    private timerId: number;

    public constructor(props: {}) {
        super(props);
        this.state = { imageSource: this.getRandomLogo() };
    }

    public componentDidMount(): void {
        this.timerId = window.setInterval(() => this.setState({ imageSource: this.getRandomLogo() }), 1000);
    }

    private getRandomLogo(): string {
        const rnd = Math.floor(Math.random() * 5) + 1;
        switch (rnd) {
            case 1: return adidasLogo;
            case 2: return newBalanceLogo;
            case 3: return nikeLogo;
            case 4: return pumaLogo;
            default: return vansLogo;
        }
    }

    public render(): JSX.Element {
        return (
            <div className="RandomBrand Box">
                <p>
                    <img src={this.state.imageSource} />
                </p>
            </div>
        );
    }

    public componentWillUnmount(): void {
        window.clearInterval(this.timerId);
    }
}

export default RandomBrand;
