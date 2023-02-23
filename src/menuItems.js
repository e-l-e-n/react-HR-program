export const menuItems = [
  {
    title: 'Головна',
    url: '/',
  },
  {
    title: 'Меню',
    url: '/menu',
    submenu: [
      {
        title: 'Інформація',
        url: 'information',
      },
      {
        title: 'Опис вакансії',
        url: 'job',
        submenu: [
          {
            title: 'Розробники',
            submenu: [
              {
                title: 'React Native',
                url: 'rn',
              },
              {
                title: 'WordPress',
                url: 'wp',
              },
              {
                title: 'Ruby on Rails',
                url: 'ror',
              },
            ],
          },
          {
            title: 'Інші',
            submenu: [
              {
                title: 'Sales',
                url: 'sales',
              },
              {
                title: 'HR',
                url: 'hr',
              },
            ],
          },
        ],
      },
      {
        title: 'Кандидати',
        url: 'all',
        submenu: [
          {
            title: 'Всі',
            url: 'candidates',
          },
          {
            title: 'Працевлаштовані',
            url: 'employed',
          },
        ],
      },
      {
        title: 'Співбесіда',
        url: 'interview',
        submenu: [
          {
            title: 'Для кандидатів',
            submenu: [
              {
                title: 'Загальні',
                url: 'common',
              },
              {
                title: 'Sales',
                url: 'sales-interview',
              },
            ],
          },
          {
            title: 'До нас',
            url: 'question',
          },
        ],
      },
      {
        title: 'Тестові завдання',
        url: 'test',
        submenu: [
          {
            title: 'React Native',
            url: 'testRN',
          },
          {
            title: 'WordPress',
            url: 'testWP',
          },
        ],
      },
      {
        title: 'Документи',
        url: 'documents',
        submenu: [
           {
              title: 'NDA',
              url: 'NDA',
            },
            {
            title: 'Інструкції',
            submenu: [
              {
                title: 'Дія',
                url: 'diya',
              },
              {
                title: 'Вчасно',
                url: 'vchasno',
              },
              {
                title: 'Ключ ПБ',
                url: 'pbank',
              },
            ],
          },
          {
            title: 'Інше',
            url: 'documentGroup',
          },
        ],
      },
      {
        title: 'Шаблони відписок',
        url: 'message',
        submenu: [
          {
            title: 'Шаблони відписок',
            url: 'messages',
          }
        ],
      },
      {
        title: 'База знань',
        url: 'knowledge',
        submenu: [
          {
            title: 'Ресурси',
            url: 'resourses',
            submenu: [
              {
                title: 'HR',
                url: 'resoursesHR',
              },
              {
                title: 'Sales',
                url: 'resoursesSales',
              },
              {
                title: 'English',
                url: 'resoursesEng',
              }
            ],
          }
        ],
      },
      {
        title: 'Інше',
        url: 'other',
      },



    ],
    


  },
 
  {
    title: 'Про нас',
    url: '/about',
    submenu: [
      {
        title: 'Хто ми',
        url: 'who-we-are',
      },
      {
        title: 'Наші цінності',
        url: 'our-values',
      },
      {
        title: 'Контакти',
        url: 'contacts',
      },
    ],
  },
];
