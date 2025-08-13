import { useState } from "react";
import Admin from "./Admin";
import StatesDemo from "./StatesDemo";
import Test from "./Test";
import User from "./User";
import { BrowserRouter as Router,Routes,Route, Link } from "react-router"; 
import Home from "./Home";
import Product from "./Product";
import Contact from "./Contact";
import NotFound from "./NotFound";
import WelcomePage from "./WelcomePage";

//How to create component
function App() {
        
    return (
        <div>
            {/* <h3>Routing Example</h3> */}
            <Router>
                <div>
                    <Link to="/home">Home</Link>
                    <Link to="/product">Product</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <Routes>
                    <Route path="/" element={<WelcomePage />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    )
}
export default App;
