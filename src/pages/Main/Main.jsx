import "./Main.css";

import Mouse from "../../components/Mouse/Mouse";

export default function Main() {
  return (
    <>
      <main className="main">
        <div className="home__text">
          <h1 className="home__text__titulo">Olá, nós somos a Conquest</h1>
          <div className="home__text__sub">
            <p className="home__text__p">
              Uma equipe altamente qualificada, apaixonada por dados e
              comprometida em fornecer soluções personalizadas para impulsionar
              o sucesso dos nossos clientes.
            </p>
          </div>
          <div className="home__button">
            <a className="btn btn-bg" href="#sobre">
              Saiba Mais
            </a>
          </div>
        </div>

        <Mouse />
      </main>
    </>
  );
}
