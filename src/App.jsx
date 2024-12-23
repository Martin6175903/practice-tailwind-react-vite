import './App.css'
import Header from "./components/header/Header.jsx";
import ArmChairInfo from "./components/armchair-info/ArmChairInfo.jsx";
import SpecialOffers from "./components/special-offers/SpecialOffers.jsx";
import Market from "./components/market/Market.jsx";
import Brands from "./components/brands/Brands.jsx";
import Recently from "./components/recently/Recently.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {

    return (
        <>
            <Header/>
            <main>
                <ArmChairInfo/>
                <SpecialOffers/>
                <Market/>
                <Brands/>
                <Recently/>
            </main>
            <Footer/>
        </>
    )
}

export default App
