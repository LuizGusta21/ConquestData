import styles from "./Projects.module.css";
import Slider from "react-slick";

import dash1 from "../../assets/dash1.svg";
import dash2 from "../../assets/dash2.svg";
import dash3 from "../../assets/dash3.svg";
import dash4 from "../../assets/dash4.svg";

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
    {
      title: "Dashboard Financeiro",
      id: 2,
      imagem: dash2,
      text: "Um dashboard financeiro tem como objetivo fornecer uma visão consolidada e em tempo real das métricas financeiras cruciais de uma organização. Ao apresentar dados como receitas, despesas, lucros, e tendências ao longo do tempo de forma clara e acessível, o dashboard capacita os tomadores de decisão a monitorar o desempenho financeiro, identificar áreas de oportunidade e desafios, e tomar ações estratégicas para otimizar o resultado financeiro da empresa.",
      link: "https://app.powerbi.com/view?r=eyJrIjoiYmZhZDE1YjMtYWZkZi00N2ZiLWJiNzUtZjJkYWJmM2NiZTk3IiwidCI6IjMxYmI1NjNlLTJhM2ItNGJlYy1iMDM3LWMwMmFiZGJkMWNmMSJ9",
    },
    {
      title: "Dashboard de SAC",
      id: 3,
      imagem: dash3,
      text: "Um dashboard de SAC (Serviço de Atendimento ao Cliente) tem como objetivo centralizar e analisar dados relacionados ao atendimento ao cliente. Ele oferece uma visão abrangente das interações entre clientes e a empresa, incluindo solicitações de suporte, reclamações, feedbacks e tempos de resposta. Ao fornecer métricas como tempo médio de espera, taxa de resolução, e satisfação do cliente, o dashboard permite monitorar a eficácia do serviço de atendimento e identificar áreas de melhoria. ",
      link: "https://app.powerbi.com/view?r=eyJrIjoiOGQ0MWMwN2YtNjIxZi00OTIwLWIyNWItZmFiMzI0NTlmNmFmIiwidCI6IjMxYmI1NjNlLTJhM2ItNGJlYy1iMDM3LWMwMmFiZGJkMWNmMSJ9",
    },
    {
      title: "Dashboard de logística",
      id: 4,
      imagem: dash4,
      text: "Um dashboard logístico tem como objetivo oferecer uma visão integrada e em tempo real das operações logísticas de uma empresa. Ele permite acompanhar o fluxo de mercadorias, o desempenho de transporte, o status de estoque e a eficiência da cadeia de suprimentos. Ao fornecer métricas como tempo de entrega, níveis de estoque, custos de transporte e índices de precisão, o dashboard ajuda a otimizar processos, reduzir custos operacionais e melhorar a eficiência geral da logística.",
      link: "https://app.powerbi.com/view?r=eyJrIjoiODBjODljODctNWQxNS00NmUxLWE4YzQtZmVkYjFjZWRmNjg0IiwidCI6IjMxYmI1NjNlLTJhM2ItNGJlYy1iMDM3LWMwMmFiZGJkMWNmMSJ9",
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
