import { Fragment } from "react";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import Pokedex from "../../components/Pokedex";


const PokedexView = () => {
    return ( 
        <Fragment>
            <Header />
            <Pokedex />
            <Footer />
        </Fragment>
     );
}
 
export default PokedexView;