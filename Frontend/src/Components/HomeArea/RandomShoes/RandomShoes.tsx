import "./RandomShoes.css";
import adidas from "../../../Assets/Images/Shoes/Adidas.jpg";
import armour from "../../../Assets/Images/Shoes/Armour.jpg";
import crocks from "../../../Assets/Images/Shoes/Crocks.jpg";
import nike from "../../../Assets/Images/Shoes/Nike.jpg";
import source from "../../../Assets/Images/Shoes/Source.jpg";
import { useEffect, useState } from "react";

function RandomShoes(): JSX.Element {

    const [imageSource, setImageSource] = useState<string>(getRandomLogo());

    useEffect(() => {
        const timerId = setInterval(() => setImageSource(getRandomLogo()), 1000);
        return () => clearInterval(timerId);
    }, []);

    return (
        <div className="RandomShoes Box">
            <p>
                <img src={imageSource} />
            </p>
        </div>
    );
}

function getRandomLogo(): string {
    const rnd = Math.floor(Math.random() * 5) + 1;
    switch (rnd) {
        case 1: return adidas;
        case 2: return armour;
        case 3: return crocks;
        case 4: return nike;
        default: return source;
    }
}

export default RandomShoes;
