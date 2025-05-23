
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

    //So criamos useState quando precisamos guardar uma informacao que muda e que o React precisa acompanhar
    const [genero, setGenero] = useState("");
    const [listaGenero, setListaGenero] = useState([]);


    function alertar(icone, mensagem) {
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
        if (genero.trim() !== "") {

            // try => tentar(o esperado)
            // catch => pega a excecao
            try {
                // Cadastrar um genero: post
                await api.post("genero", { nome: genero });
                alertar("sucess", "Cadastro realizado com sucesso!")

                listarGenero();

            } catch (error) {
                alertar("error", "Erro! Entre em contato com o suporte!")
                console.log(error);

            }
        } else {
            alertar("Error", "Preencha o campo!")
        }

    }

    // função síncrono => Acontece simultaneamente
    // função assíncrono => Espera uma resposta para acontecer
    // await => Ele aguarda uma resposta
    // async => assíncrono

    async function listarGenero() {
        try {
            const resposta = await api.get("genero");

            setListaGenero(resposta.data);

        } catch (error) {
            console.log(error);
        }
    }

    // funcao de excluir o genero






    async function deletarGenero(generoId) {
        // console.log("entrou!");
        try {

            Swal.fire({
                title: "Você tem certeza?",
                text: "Você não conseguira reverter!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sim, deletar!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await api.delete(`genero/${generoId.idGenero}`);

                    Swal.fire({
                        title: "Deletado!",
                        text: "Seu item foi deletado.",
                        icon: "success"
                    });
                }
            });
            listaGenero();
            // setDeletaGenero(resposta.data);

        } catch (error) {
            console.log(error);

        }
    }


    async function editarGenero(genero) {
        console.log(genero);
        const { value: novoGenero } = await Swal.fire({
            title: "Edite seu gênero",
            input: "text",
            inputLabel: "Novo gênero",
            inputValue: genero.nome,
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return "O campo precisa estar preenchido!";
                }
            }
        });
        if (novoGenero) {
            try{
                console.log(genero.nome);
                console.log(novoGenero);
                api.put(`genero/${genero.idGenero}`,
                {nome: novoGenero});
                Swal.fire(`O gênero editado é ${novoGenero}`);
            }catch(error){
                console.log(error);
            }
        }
    }

    // Teste
    // useEffect(() => {
    //     console.log(genero)
    // },[genero]);


    // Fim do teste

    // function () = {} funcao
    // () => funcao anonima ou arrow function

    // hoocks     funcao    dependencia
    // useEffect( () => {}, [] )

    // Assim que a pagina renderizar, o metodo listarGenero() sera chamado

    useEffect(() => { // - hooks
        listarGenero(); // - funcao

    }, [listarGenero, editarGenero]) // - dependencia



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
                    excluirNome="none"

                    // atrubuir para lista, o meu estado atual:
                    lista={listaGenero}

                    tipoLista="genero"


                    funcExcluir={deletarGenero}
                    funcEditar={editarGenero}
                />
            </main>

            <Footer />
        </>
    )
}

export default CadastroGenero;