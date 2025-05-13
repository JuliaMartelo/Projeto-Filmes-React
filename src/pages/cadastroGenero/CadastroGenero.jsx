
import { useEffect, useState } from "react";

// importacao de componentes:
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import api from "../../Services/Services";
// importar sweet alert
import Swal from 'sweetalert2';


const CadastroGenero = () => {

    //nome do genero
    const [genero, setGenero] = useState("");

    function alerta(icone, mensagem) {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: icone,
            title: mensagem
        });
    }

    async function cadastrarGenero(evt) {
        evt.preventDefault();
        //Verificar se o input esta vindo vazio
        // trim apaga os espacos vazios
        if (genero.trim() != "") {

            // try => tentar(o esperado)
            // catch => pega a excecao
            try {
                // Cadastrar um genero: post
                await api.post("genero", { nome: genero });
                alerta("success", "Cadastro realizado com sucesso!")
             
                
            } catch (error) {
               alerta("error", "Erro! Entre em contato com o suporte!")
               console.log(error);
               
            }
        } else {
            alerta("Error", "Preencha o campo!")
        }

    }

    // Teste
    // useEffect(() => {
    //     console.log(genero)
    // },[genero]);


    // Fim do teste

    return (
        <>
            <Header />
            <main>
                <Cadastro
                    tituloCadastro="Cadastro de Gênero"
                    visibilidade="none"
                    placeholder="Gênero"

                    //Consumindo api
                    // Atribuindo a funcao
                    funcCadastro={cadastrarGenero}
                    // Atribuindo o valor ao input
                    valorInput={genero}
                    // Atribuindo a funcao que atualiza o meu genero
                    setValorInput={setGenero}
                />
                <Lista tituloDaLista="Lista de Gênero"
                    excluirNome="none" />
            </main>
            <Footer />
        </>
    )
}

export default CadastroGenero;