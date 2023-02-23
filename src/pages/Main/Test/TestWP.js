const TestWP = () => {
  return (
    <main className="section">
    <div className="container">
        <h1 className="title-1">WordPress Developer</h1>
  
        <ul className="content-list">
                <li className="content-list__item">
                    <h2 className="title-2">Тестове завдання </h2>
                    <p>Усього потрібно 2 пост тайпу, і 2 ajax запиту
Зробити 1 сторінку, на сторінці вивести календар (FullCaledar) із подіями (PostType Events).
По кліку на подію зробити аякс запит, у відповідь отримати html (template-part) і відобразити в модальному вікні (назва події, дата, картинка, форма запису з полями ім'я, телефон, емейл)
Надіслати форму ajax-ом, створити пост (PostType Lead). В адмінці створити custom MetaBox для сторінки ліда, в якому вивести інформацію про те, хто залишив заявку, та на яку подію.
Візуал не має значення.</p>
                </li>
        </ul>
  
    </div>
  </main>
 )
}
 
export default TestWP;