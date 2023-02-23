const Contacts = () => {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Контакти</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Місцезнаходження</h2>
                        <p>Україна</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram</h2>
                        <p><a href="tel:+380980000000">+38 (098) 000-00-00</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:webdfffffffev@it.com">hr@it.com</a></p>
                    </li>
                </ul>

            </div>
        </main>
    );
}
 
export default Contacts;