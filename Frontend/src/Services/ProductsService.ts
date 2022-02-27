import axios from "axios";
import ProductModel from "../Models/ProductModel";
import { addProductAction, fetchProductsAction } from "../Redux/ProductsState";
import productsStore from "../Redux/Store";
import config from "../Utils/Config";

class ProductsService {

    public async getAllProducts(): Promise<ProductModel[]> {
        if (productsStore.getState().products.length === 0) {
            const response = await axios.get<ProductModel[]>(config.urls.products);
            const products = response.data;
            productsStore.dispatch(fetchProductsAction(products)); // Send downloaded products to Redux.
            return products;
        }
        else {
            const products = productsStore.getState().products;
            return products;
        }
    }

    public async getOneProduct(id: number): Promise<ProductModel> {
        const products = productsStore.getState().products;
        const product = products.find(p => p.id === id);
        if (product) {
            return product;
        }
        const response = await axios.get<ProductModel>(config.urls.products + id);
        return response.data;
    }

    public async addProduct(product: ProductModel): Promise<ProductModel> {
        const myFormData = new FormData();
        myFormData.append("name", product.name);
        myFormData.append("price", product.price.toString());
        myFormData.append("stock", product.stock.toString());
        myFormData.append("image", product.image.item(0)); // FileList has to be converted to File
        const response = await axios.post<ProductModel>(config.urls.products, myFormData); // Must send FormData and not product
        const addedProduct = response.data;
        productsStore.dispatch(addProductAction(addedProduct));
        return addedProduct;
    }

}

// Single object:
const productsService = new ProductsService();

export default productsService;