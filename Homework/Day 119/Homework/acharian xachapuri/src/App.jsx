import React from 'react';
import { Link } from 'react-router-dom'; // Добавлен импорт Link для работы с React Router

export default function App() {
  return ( // Добавлен return для возврата JSX
    <div>
      <p>Выберите одну из страниц, чтобы узнать больше:</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>
          <Link to="/portfolio" style={{ textDecoration: 'none', color: 'blue' }}>Перейти к портфолио</Link>
        </li>
        <li>
          <Link to="/barcelona" style={{ textDecoration: 'none', color: 'blue' }}>Узнать о команде "Барселона"</Link>
        </li>
      </ul>

      <p>
        Добро пожаловать в мое портфолио! Здесь вы найдете информацию о моих проектах, навыках и достижениях.
      </p>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        <li style={{ marginBottom: '10px' }}>• Веб-разработка</li>
        <li style={{ marginBottom: '10px' }}>• Создание пользовательских интерфейсов</li>
        <li style={{ marginBottom: '10px' }}>• Реализация интерактивных приложений</li>
      </ul>
      <p>Контакт: <a href="mailto:myportfolio@example.com">myportfolio@example.com</a></p>
      <p>
        Футбольный клуб "Барселона" – один из самых успешных клубов в мире. Основан в 1899 году и известен своей яркой
        историей и выдающимися игроками.
      </p>
      <h2>Известные игроки:</h2>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        <li style={{ marginBottom: '10px' }}>• Лионель Месси</li>
        <li style={{ marginBottom: '10px' }}>• Хави Эрнандес</li>
        <li style={{ marginBottom: '10px' }}>• Андрес Иньеста</li>
        <li style={{ marginBottom: '10px' }}>• Роналдиньо</li>
      </ul>
      <h2>Достижения:</h2>
      <p>
        "Барселона" является обладателем множества титулов, включая победы в Лиге чемпионов УЕФА, Ла Лиге и Кубке Испании.
      </p>
    </div>
  );
}
