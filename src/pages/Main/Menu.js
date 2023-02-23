import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <main className="section">
    <div className="container">
        <h2 className="title-1">Menu</h2>
        <ul className="content-list">
        <li className="content-list__item">
      <Link to="/information">Інформація</Link>
        </li>
        <li className="content-list__item">
      <Link to="/job">Опис вакансії</Link>
      </li>
        <li className="content-list__item">
      <Link to="/all">Кандидати</Link>
      </li>
        <li className="content-list__item">
      <Link to="/interview">Співбесіда</Link>
      </li>
        <li className="content-list__item">
      <Link to="/test">Тестові завдання</Link>
      </li>
        <li className="content-list__item">
      <Link to="/documents">Документи</Link>
      </li>
        <li className="content-list__item">
      <Link to="/message">Шаблони відписок</Link>
      </li>
        <li className="content-list__item">
      <Link to="/knowledge">База знань</Link>
      </li>
        <li className="content-list__item">
      <Link to="/other">Інше</Link>
      </li>
      </ul>
    </div>
    </main>
  );
};

export default Menu;
