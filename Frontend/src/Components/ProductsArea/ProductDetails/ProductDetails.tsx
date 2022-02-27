import { Component } from "react";
import { NavLink } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import productsService from "../../../Services/ProductsService";
import config from "../../../Utils/Config";
import "./ProductDetails.css";

interface ProductDetailsProps {
}

interface ProductDetailsState {
    product: ProductModel;
}

class ProductDetails extends Component<ProductDetailsProps, ProductDetailsState> {

    public async componentDidMount() {
        try {
            // Workaround: 
            const lastSlashIndex = window.location.pathname.lastIndexOf("/");
            const id = +window.location.pathname.substr(lastSlashIndex + 1);

            const product = await productsService.getOneProduct(id);
            this.setState({ product });
        }
        catch (err: any) {
            alert(err.message);
        }
    }

    public render(): JSX.Element {
        return (
            <div className="ProductDetails Box">

                <h2>Product Details: </h2>

                <h3>{this.state?.product?.name}</h3>
                <h3>Price: ${this.state?.product?.price} | Stock: {this.state?.product?.stock}</h3>
                <img src={config.urls.productImages + this.state?.product?.imageName} />

                <NavLink to="/products">Back</NavLink>

            </div>
        );
    }
}

export default ProductDetails;
