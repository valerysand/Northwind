import { Component } from "react";
import "./ProductList.css";
import ProductModel from "../../../Models/ProductModel";
import ProductCard from "../ProductCard/ProductCard";
import Loading from "../../SharedArea/Loading/Loading";
import { NavLink } from "react-router-dom";
import productsService from "../../../Services/ProductsService";

interface ProductListState {
    products: ProductModel[];
}

class ProductList extends Component<{}, ProductListState> {

    public async componentDidMount() {
        try {
            const products = await productsService.getAllProducts();
            this.setState({ products });
        }
        catch (err: any) {
            alert(err.message);
        }
    }

    public render(): JSX.Element {
        return (
            <div className="ProductList">

                {this.state?.products === undefined && <Loading />}

                <NavLink to="/products/new">New Product</NavLink>

                {this.state?.products?.reverse()?.map(p => <ProductCard key={p.id} product={p} />)}

            </div>
        );
    }
}

export default ProductList;
