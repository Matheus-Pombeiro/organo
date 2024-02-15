import "./Rodape.css";

const Rodape = () => {
    return (
        <footer className="footer">
            <div className="social-medias">
                <img src="/images/fb.png" alt="Facebook" />
                <img src="/images/tw.png" alt="Twitter" />
                <img src="/images/ig.png" alt="Instagram" />
            </div>
            <div className="logo">
                <img src="/images/logo.png" alt="Organo" />
            </div>
            <div>
                <p>Desenvolvido por Alura</p>
            </div>
        </footer>
    )
};

export default Rodape;