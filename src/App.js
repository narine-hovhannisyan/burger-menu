import React from 'react';

// Styles
import './App.css';

// Components
import Footer from "./Components/footer";
import Header from "./Components/header";
import NavbarMenu from "./Components/main";

function App() {
    return (
        <div>
            <NavbarMenu/>
            <div className="App">
                <Header/>
                <h1>React-burger-menu</h1>
            </div>
            <Footer/>
        </div>
    );
}

export default App;