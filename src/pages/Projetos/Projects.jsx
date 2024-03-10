import styles from "./Projects.module.css";
import Slider from "react-slick";

import dash1 from "../../assets/dash1.svg";

export default function Projects() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
    adaptiveHeight: false,
  };

  const projetos = [
    {
      title: "Dashboard de Vendas",
      id: 1,
      imagem: dash1,
      text: "Um dashboard de vendas oferece uma visão consolidada do desempenho das vendas, incluindo gráficos de vendas, indicadores-chave de desempenho e análise do pipeline de vendas. Ele permite monitorar tendências, identificar áreas de oportunidade e tomar decisões estratégicas para impulsionar o crescimento das vendas da empresa.",
      link: "https://app.powerbi.com/view?r=eyJrIjoiZWIxYTg4ZGItNGE0MS00M2QxLWJiMmUtZmYwNTYwYTFlZjMyIiwidCI6IjMxYmI1NjNlLTJhM2ItNGJlYy1iMDM3LWMwMmFiZGJkMWNmMSJ9",
    },
  ];

  return (
    <>
      <section id="projetos" className={styles.section}>
        <div className="main-container">
          <h2 className="h2_style">
            <span className="h2_style_span">Projetos</span>
            <span className="h2_style_span_sub">
              Abaixo estão alguns dos nossos projetos
            </span>
          </h2>
          {projetos.map((project) => (
            <div className={styles.project} key={project.id}>
              <div className={styles.project_img}>
                <img
                  src={project.imagem}
                  alt={project.title}
                  className={styles.img}
                />
              </div>
              <div className={styles.project_description}>
                <h3 className={styles.project_title}>{project.title}</h3>
                <p className={styles.project_text}>{project.text}</p>
                <a
                  target="_blank"
                  className="btn btn-medium"
                  href={project.link}
                >
                  Projeto
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
