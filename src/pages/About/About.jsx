import "./About.css";

export default function About() {
  return (
    <>
      <section id="sobre" className="section__about">
        <div className="main-container">
          <h2 className="h2_style">
            <span className="h2_style_span">Sobre</span>
            <span className="h2_style_span_sub">
              Abaixo estão mais informações sobre a Conquest e nossos objetivos.
            </span>
          </h2>
          <div className="about__grid">
            <div className="about__grid__text">
              <h3 className="about__grid__title">Nos Conheça!</h3>
              <p className="about__grid__text__text">
                A Conquest é uma empresa de consultoria em business intelligence
                fundada por três visionários empreendedores que compartilham uma
                paixão por dados e uma visão de transformar o cenário
                empresarial em âmbito regional e nacional. Nossa equipe
                altamente qualificada combina expertise técnica com uma
                abordagem personalizada, trabalhando lado a lado com nossos
                clientes para entender suas necessidades específicas e fornecer
                soluções sob medida que impulsionem seu sucesso.
              </p>
              <p className="about__grid__text__text2">
                Estamos comprometidos em construir relacionamentos de longo
                prazo com nossos clientes, ajudando-os a enfrentar os desafios
                do mercado atual e a alcançar seus objetivos de negócios de
                maneira eficaz e sustentável.
              </p>
              <a href="#contato" className="btn btn-medium">
                Contato
              </a>
            </div>
            <div className="about__grid__skills">
              <h3 className="about__grid__title">Nossos Objetivos</h3>
              <div className="about__grid__objectivs">
                <div className="about__grid__objectiv">
                  <h4>Missão</h4>
                  <p className="about__grid__text__text_objectiv">
                    Auxiliar empresas e organizações a alcançarem seu máximo
                    potencial por meio da análise de dados e consultoria em
                    business intelligence, tanto em nível regional quanto
                    nacional. Nosso compromisso é fornecer insights acionáveis e
                    soluções personalizadas que impulsionem o crescimento e a
                    eficiência dos nossos clientes.
                  </p>
                </div>
                <div className="about__grid__objectiv">
                  <h4>Visão</h4>
                  <p className="about__grid__text__text_objectiv">
                    Ser a principal referência em consultoria de business
                    intelligence, reconhecida pelo nosso profissionalismo,
                    excelência nos serviços prestados e pelo impacto positivo
                    que geramos para nossos clientes e comunidade, tanto em
                    âmbito regional quanto nacional.
                  </p>
                </div>
                <div className="about__grid__objectiv">
                  <h4>Valores</h4>
                  <p className="about__grid__text__text_objectiv">
                    Os valores da Conquest são pautados na excelência técnica,
                    parceria colaborativa e compromisso com o sucesso do
                    cliente. Integridade e ética são fundamentais em todas as
                    interações, enquanto a empresa mantém uma postura de
                    inovação constante para agregar valor aos clientes e se
                    adaptar ao ambiente empresarial em evolução.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
