import "./Botao.css"

const Botao = (props) => {
    return(
        //o submit eh para consumir a api
        <button className="botao"type="submit">{props.nomeDoBotao}</button>
    )
}

export default Botao;