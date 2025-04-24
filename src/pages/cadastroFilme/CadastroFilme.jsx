// import { Fragment } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";

const CadastroFilme = () => {
    return (
        <>
            <Header />
            <Cadastro/>
            <Lista/>
            <Footer />
        </>
    )
}

export default CadastroFilme;