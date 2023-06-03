import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const AboutMePage = () => (
  <Container className='px-5 py-4'>
    <div className='d-flex justify-content-between border-bottom'>
      <h1>About me page</h1>
      <NavLink to='/'>
        <Button className='my-2 w-100'>Back to main page</Button>
      </NavLink>
    </div>
    <div className='my-4'>
      <h3>Здравствуй, гость! Меня зовут Габидулин Рафаэль.</h3>
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
    </div>
  </Container>
);

export default AboutMePage;
