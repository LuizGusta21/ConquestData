import SocialMedia from "../../components/SocialMedia/SocialMedia";
import "./Footer.css";

const Footer = () => {
  const ano = new Date().getFullYear();
  return (
    <footer className="main_footer">
      <div className="main-container">
        <div className="main_footer_top">
          <div className="title_name">
            <h2 className="name">Conquest</h2>
            <p className="subtitle">
              Uma equipe altamente qualificada, apaixonada por dados e
              comprometida em fornecer soluções personalizadas para impulsionar
              o sucesso dos nossos clientes.
            </p>
          </div>
          <div className="social">
            <h2 className="name">Redes Sociais</h2>
            <div className="social_media subtitle">
              <SocialMedia />
            </div>
          </div>
        </div>

        <div className="main_footer_rodape">
          &copy; {ano} Todos os direitos reservados. | Desenvolvido por:{" "}
          <a href="https://www.linkedin.com/in/luizgusta21/" target="_blank">
            Luiz Gustavo
          </a>{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
