// import { Fragment } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import api from "../../Services/Services";

import { useEffect, useState } from "react";

// importar sweet alert
import Swal from 'sweetalert2';
// import { useEffect } from "react";


const CadastroFilme = () => {

    const [listaGenero, setListaGenero] = useState("");
    const [genero, setGenero] = useState("");
    const [filme, setFilme] = useState("");
    const [listaFilme, setListaFilme] = useState([])

    // funcao para trazer os generos no meu select
    async function listarGenero() {
        try {
            const resposta = await api.get("genero");
            setListaGenero(resposta.data);

        } catch (error) {
            console.log(error);

        }
    }

    async function cadastrarFilme(e) {

        // e.preventDefault();
        // console.log(filme);
        // console.log(genero);
        

        if (filme.trim() !== "")
            try {
                await api.post("filme", {Titulo: filme, idGenero: genero});
                setFilme("");
                setGenero("");
            } catch (error) {
                console.log(error);

            }
        alert("alerta");
    }

     async function listarFilme() {
        try {
            const resposta = await api.get("filme");
            setListaFilme(resposta.data);
        } catch (error) {
            console.log(error);
            
        }
    }


    useEffect(() => {
        listarGenero();
        listarFilme();
    }, []);
    return (
        <>
            <Header />
            <main>
                <Cadastro tituloCadastro="Cadastro de Filme"
                    placeholder="Filme"

                    lista={listaGenero}

                    funcCadastro={cadastrarFilme}
                    valorInput={filme}
                    setValorInput={setFilme}

                    valorSelect={genero}
                    setValorSelect={setGenero}

                />
                <Lista 
                
                tituloDaLista="Lista de Filmes" 

                tipoLista = "filme"

                lista = {listaFilme}
                
                />
            </main>
            <Footer />
        </>
    )
}

export default CadastroFilme;