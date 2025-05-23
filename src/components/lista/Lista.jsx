import "./Lista.css"

// Importacao de imagens
import Editar from "../../assets/img/pen-to-square-solid.svg";
import Excluir from "../../assets/img/trash-can-regular.svg";


const Lista = (props) => {
    return (
        <section className="layout_grid listagem">
            <h1>{props.tituloDaLista}</h1>
            <hr />
            <div className="tabela">
                <table>{/*TABELA/cabeçalho da tabela:*/}
                    <thead>
                        <tr className="table_cabecalho"> {/*tr => table row*/}
                            <th >Nome</th>{/*th => table head*/}
                            <th style={{ display: props.excluirNome }} >Gênero</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    {/* tbody => corpo da tabela */}
                    <tbody>
                        {props.lista && props.lista. > 0 ? (
                            // vamos mapear os itens da lista
                            props.lista.map((item) => (

                                <tr className="item_lista" key={props.tipoLista == "genero" ? item.idGenero : item.idFilme}>
                                    <td data-cell="Nome" >
                                        {props.tipoLista == "genero" ? item.nome : item.titulo}
                                    </td>
                                    <td data-cell="Gênero" style={{ display: props.excluirNome }} >
                                        {item.genero?.nome}
                                    </td>
                                     
                                    <td data-cell="Editar"><button className="botao_editar" onClick={() => props.funcEditar(item)}><img src={Editar} alt="Imagem de uma caneta" /></button></td>
                                    
                                    <button className="botao_deletar" onClick={() => props.funcExcluir(item)}><td data-cell="Excluir"><img src={Excluir} alt="Imagem de um lixo" /></td></button>
                                </tr>
                            ))

                        ) :
                            (
                                <p>Nenhum gênero foi encontrado.</p>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Lista;