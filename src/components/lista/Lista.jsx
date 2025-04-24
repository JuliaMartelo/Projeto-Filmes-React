import "./Lista.css"

// Importacao de imagens
import Editar from "../../assets/img/pen-to-square-solid.svg";
import Excluir from "../../assets/img/trash-can-regular.svg";


const Lista = () => {
    return (
        <section className="layout_grid listagem">
        <h1>Lista dos filmes</h1>
        <hr />
        <div className="tabela">
            <table>{/*TABELA/cabeçalho da tabela:*/}
                <thead>
                    <tr className="cabecalho"> {/*tr => table row*/}
                        <th>Nome</th>{/*th => table head*/}
                        <th>Gênero</th>
                        <th>Editar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                {/* tbody => corpo da tabela */}
                <tbody>
                <tr className="item_lista">
                    <td>Velozes e Furiosos</td>
                    <td>Ação</td>
                    <td><img src={Editar} alt="Imagem de uma caneta" /></td>
                    <td><img src={Excluir} alt="Imagem de um lixo" /></td>
                </tr>

                </tbody>
            </table>
        </div>
    </section>
    )
}

export default Lista;