import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../../HomeArea/Home/Home";
import ProductList from "../../ProductsArea/ProductList/ProductList";
import About from "../../AboutArea/About/About";
import Page404 from "../Page404/Page404";
import ProductDetails from "../../ProductsArea/ProductDetails/ProductDetails";
import AddProduct from "../../ProductsArea/AddProduct/AddProduct";
import Register from "../../AuthArea/Register/Register";
import Login from "../../AuthArea/Login/Login";
import Logout from "../../AuthArea/Logout/Logout";
import authService from "../../../Services/AuthService";
import { useEffect, useState } from "react";
import { authStore } from "../../../Redux/Store";

function Routing(): JSX.Element {

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        const unsubscribeMe = authStore.subscribe(() => {
            setIsLoggedIn(authService.isLoggedIn());
        });
        return () => unsubscribeMe();
    }, []);

    return (
        <Routes>

            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/details/:id" element={<ProductDetails />} />
            <Route path="/products/new" element={isLoggedIn ? <AddProduct /> : <Navigate to="/login" />} />
            <Route path="/about" element={<About />} />

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />

            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<Navigate to="/home" />} />

            {/* Page not found route - must be last route: */}
            <Route path="*" element={<Page404 />} />

        </Routes>
    );
}

export default Routing;
