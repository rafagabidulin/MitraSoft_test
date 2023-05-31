import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const AboutMePage = () => (
  <div>
    <Container>
      <h2>Здравствуй, гость! Меня зовут Габидулин Рафаэль.</h2>
      <p>Я начинающий Frontend-разработчик.</p>
      <p>Проживаю в г. Москва.</p>
      <p>
        Мои навыки:
        <ul>
          <li>JavaScript/TypeScript;</li>
          <li>React (hooks);</li>
          <li>Redux (toolkit);</li>
          <li>HTML5;</li>
          <li>CSS3;</li>
          <li>REST API;</li>
          <li>настройка Webpack, Babel, Eslint, Prettier;</li>
          <li>GIT (GitHub);</li>
          <li>npm;</li>
          <li>SQL (postgreSQL)</li>
          <li>автоматизированное тестирование (Jest);</li>
          <li>английский язык B1.</li>
        </ul>
      </p>
      <p>
        Ссылка на github:{' '}
        <Card.Link href='https://github.com/rafagabidulin'>
          https://github.com/rafagabidulin
        </Card.Link>
      </p>
      <p>
        Переписываю проекты на TypeScript. Изучаю профессиональную литературу, статьи и
        документацию. Имею огромное желание расти и развиваться во Frontend-разработке. Буду рад
        обратной связи!
      </p>
    </Container>
  </div>
);

export default AboutMePage;
