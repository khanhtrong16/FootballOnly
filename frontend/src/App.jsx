import { Routes, Route, Navigate } from "react-router-dom";

// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import ClientLayout from "./components/layouts/ClientLayout";
import Home from "./components/client/Home";
import Contact from "./components/client/Contact";
import Introduce from "./components/client/Introduce";
import StadiumDetail from "./components/client/StadiumDetail";
import StadiumList from "./components/client/StadiumList";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import AdminLayout from "./components/layouts/AdminLayout";
import AddProduct from "./components/admin/product/AddProduct";
import ListProduct from "./components/admin/product/ListProduct";
import AddAddtributes from "./components/admin/addtribute/AddAddtributes";
import PutAddtributes from "./components/admin/addtribute/putAddtributes";
import ListAddtributes from "./components/admin/addtribute/ListAddtributes";
import Authenticated from "./components/layouts/Authenticated";
import UpdateProduct from "./components/admin/product/UpdateProduct";
import CourtDetail from "./components/admin/product/CourtDetail";

function App() {
    return (
        <Routes>
            <Route path="/" element={<ClientLayout />}>
                <Route index element={<Home />} />
                <Route path="introduce" element={<Introduce />} />
                <Route path="contact" element={<Contact />} />
                <Route path="liststadium" element={<StadiumList />} />
                <Route path="detailstadium/:id" element={<StadiumDetail />} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
                <Route path="logout" element={<Home />} />
            </Route>

            <Route
                path="/admin"
                element={
                    <Authenticated fallBack={<Navigate to={"/"} />}>
                        <AdminLayout />
                    </Authenticated>
                }
            >
                <Route path="addProduct" element={<AddProduct />} />
                <Route path="updateProduct/:id" element={<UpdateProduct />} />
                <Route path="courtDetail/:id" element={<CourtDetail />} />
                <Route path="listProduct" element={<ListProduct />} />
                <Route path="addAddtribute" element={<AddAddtributes />} />
                <Route path="putAddtributes/:id" element={<PutAddtributes />} />
                <Route path="listAddtribute" element={<ListAddtributes />} />
            </Route>
        </Routes>
    );
}

export default App;
