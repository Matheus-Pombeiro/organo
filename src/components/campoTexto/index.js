import "./CampoTexto.css";

const CampoTexto = (props) => {
    let valor = "";

    const aoDigitado = (e) => {
        valor = e.target.value;
    };

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={valor} onChange={aoDigitado} placeholder={props.placeholder} required={props.obrigatorio} />
        </div>
    )
};

export default CampoTexto;