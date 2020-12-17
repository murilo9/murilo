/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable max-len */
import * as React from 'react';
import {Container} from 'react-bootstrap';
import PortfolioCard from '../components/PortfolioCard';

const projects = [
  {
    title: 'YouSendr Message',
    description: <React.Fragment>
      <p>
        Aplicação desenvolvida durante minha atuação
        na <a href="https://yousendr.com/pt-br/" target="_blank" className="color-green">
          YouSendr™</a>, o YouSendr Message
        é um complemento para o Google Planilhas para automação de disparo de mensagens.
        Os contatos da planilha são organizados dentro de um pipeline composto por fases, que
        podem ter mensagens personalizadas e realizar os disparos agendados para os canais
        configurados (Email, SMS, Whatsapp e Telegram) de acordo com as regras estabelecidas
        (data, horário, dias da semana). Também é possível acompanhar em tempo real as interações
        (visualizações, cliques e respostas) que ocorrem nas mensagens, dentre inúmeras outras
        funcionalidades.
      </p>
      <p>
        O front-end da aplicação foi feito em Vue com um layout personalizado construído
        utilizando o framework Element. O back-end da aplicação é híbrido, utilizando as
        funções do Google Planilhas escritas em Google App Script, e os serviços do Firebase.
      </p>
    </React.Fragment>,
    techs: [
      'Vue.js', 'Vuex', 'Element', 'Google App Script', 'Firebase',
    ],
    pictures: [
      'yousendr-message-1.png',
      'yousendr-message-2.png',
      'yousendr-message-3.png',
      'yousendr-message-4.png',
    ],
    links: {
      site: 'https://yousendr.com/pt/message/',
    },
  },
  {
    title: 'Mydria',
    description: <p>
      Mydria é uma rede social onde os usuários podem postar texto e imagens,
      bem como seguir e reagir a posts de outros usuários. O front-end foi feito
      em React usando o tema padrão do Bootstrap, além de uma cariação dark mode.
      No back-end foi utilizada uma API REST feita em Node que faz autenticação
      e fornece os serviços para a aplicação, interagindo com um banco de dados
      MongoDB através do Mongoose ORM. A API Node é hospedada no Heroku. As imagens
      são hospedadas no serviço de store do Firebase.
    </p>,
    techs: [
      'React.js', 'Redux', 'Bootstrap', 'Node.js', 'MongoDB', 'Mongoose', 'Heroku', 'Firebase',
    ],
    pictures: [
      'mydria-front.png',
      'mydria-feed.png',
      'mydria-feed-black.png',
      'mydria-profile.png',
    ],
    links: {
      repo: 'https://github.com/murilo9/mydria',
    },
  },
  {
    title: 'Jevang',
    description: <p>
      Site de exposição de obras em desenvolvimento para a
      pintora <a href="https://www.instagram.com/jevangart/" target="_blank" className="color-green">
      Julia Evangelista</a>. Feito em
      Nuxt utilizando o framework Vue Material. Design feito por mim. O site possui
      um painel de administrador com layout padrão do Material Design. Os usuários podem
      enviar mensagens que são visualizadas pelo administrador no painel. O back-end é
      serverless, portanto o site se comunica diretamente com os serviços de autenticação,
      hospedagem e storage do Firebase.
    </p>,
    techs: [
      'Vue.js', 'Nuxt', 'Firebase', 'Material UI',
    ],
    pictures: [
      'jevang-front.png',
      'jevang-mobile.png',
      'jevang-panel-mobile.png',
    ],
    links: {
      demo: '#',
    },
  },
];

class PortfolioSection extends React.Component {
  renderPortfolioCards() {
    const cards = [];
    projects.forEach((project) => {
      cards.push(
          <PortfolioCard title={project.title}
            description={project.description}
            pictures={project.pictures}
            links={project.links}
            techs={project.techs}
            key={project.title}
          />,
      );
    });
    return cards;
  }

  render() {
    return (
      <section id="portfolio">
        <Container>
          <div className="d-flex justify-content-center">
            <h2 className="green-title-border">Portfólio</h2>
          </div>
          { this.renderPortfolioCards() }
        </Container>
      </section>
    );
  }
}

export default PortfolioSection;
