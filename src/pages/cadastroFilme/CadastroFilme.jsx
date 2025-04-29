// import { Fragment } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";

const CadastroFilme = () => {
    return (
        <>
            <Header />
            <main>
            <Cadastro tituloCadastro="Cadastro de Filme"
            placeholder = "Filme"/>
            <Lista tituloDaLista="Lista de Filmes"/>
            </main>
            <Footer />
        </>
    )
}

export default CadastroFilme;