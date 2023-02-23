import video from  "./../../media/video_2023.gif"


const Home = () => {
  return (    
      <main className="section">
        <div className="container">
         <img src={video} alt="HR" />  
           <ul className="content-list">
              <li className="content-list__item">
                  <h2 className="title-2">HR Program</h2>
                  <p>Це комплексна система автоматизації найму, відбору, залучення персоналу. HR Program - Фундамент для HR-початківця і джерело ґрунтовних знань для спеціаліста, який вже працює в професії HR  від рекрутингу та онбордингу до бренду роботодавця та розвитку персоналу.</p>
              </li>
              <li className="content-list__item">
                  <h2 className="title-2">HR Program</h2>
                  <p>Це автоматичний помічник для виконання завдань HR. За допомогою даної програми Здобудете чітке розуміння, як побудувати та розвинути свою кар’єру в HR Розберетеся з кожним аспектом роботи HR — від зустрічей один на один до оцінки персоналу Опануєте ролі й функції HR та їхню цінність для людей та бізнесу Підвищите свою кваліфікацію</p>  
              </li>
          </ul>  
        </div>
      </main>
  )
};

export default Home;
