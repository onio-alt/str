/* global React, ReactDOM, Header, Footer, MIcon */

function ContactPage() {
  return (
    <React.Fragment>
      <Header/>
      <main>
        <section className="contact-page" id="top">
          <div className="container contact-page__container">
            <header className="contact-page__head">
              <p className="contact-page__eyebrow">Связаться с экспертом</p>
              <h1>Контакты</h1>
              <p className="contact-page__lead">Свяжитесь с экспертом удобным для вас способом.</p>
            </header>

            <section className="contact-primary" aria-labelledby="expert-contact-title">
              <div className="contact-profile">
                <img
                  className="contact-profile__photo"
                  src="assets/expert-photo.jpg"
                  alt="Родион Александрович Стрелков"
                  width="82"
                  height="82"
                />
                <div className="contact-profile__info">
                  <p>Независимый судебный эксперт</p>
                  <h2 id="expert-contact-title">Родион Александрович Стрелков</h2>
                </div>
              </div>

              <div className="contact-primary__body">
                <h3>Выберите способ связи</h3>
                <p>Телефон и приложения откроются автоматически.</p>

                <div className="contact-list">
                  <a className="contact-link contact-link--primary" href="tel:+79266100903">
                    <span className="contact-link__icon"><img src="assets/icon-call.svg" alt="" width="24" height="24"/></span>
                    <span className="contact-link__copy"><strong>Телефон</strong><small>+7 (926) 610-09-03</small></span>
                    <MIcon name="arrow_forward" size={20}/>
                  </a>
                  <a className="contact-link" href="mailto:rstrelkov@inbox.ru">
                    <span className="contact-link__icon"><MIcon name="mail" size={24}/></span>
                    <span className="contact-link__copy"><strong>Электронная почта</strong><small>rstrelkov@inbox.ru</small></span>
                    <MIcon name="arrow_forward" size={20}/>
                  </a>
                  <a className="contact-link" href="https://wa.me/79266100903" target="_blank" rel="noopener noreferrer">
                    <span className="contact-link__icon"><img src="assets/icon-whatsapp.svg" alt="" width="24" height="24"/></span>
                    <span className="contact-link__copy"><strong>WhatsApp</strong><small>Написать сообщение</small></span>
                    <MIcon name="arrow_forward" size={20}/>
                  </a>
                  <a className="contact-link" href="https://t.me/IT_Expert_strexpit" target="_blank" rel="noopener noreferrer">
                    <span className="contact-link__icon"><img src="assets/icon-telegram.svg" alt="" width="24" height="24"/></span>
                    <span className="contact-link__copy"><strong>Telegram</strong><small>Написать сообщение</small></span>
                    <MIcon name="arrow_forward" size={20}/>
                  </a>
                  <a className="contact-link" href="https://max.ru/u/f9LHodD0cOI_xD66B9gSkqR2KqiMaQWBJgHLFhiEkTNQMEazV7VkzTJO71A" target="_blank" rel="noopener noreferrer">
                    <span className="contact-link__icon"><img src="assets/icon-max.svg" alt="" width="24" height="24"/></span>
                    <span className="contact-link__copy"><strong>MAX</strong><small>Написать сообщение</small></span>
                    <MIcon name="arrow_forward" size={20}/>
                  </a>
                </div>

                <div className="contact-hours"><MIcon name="schedule" size={18}/> Режим работы: 12:00–20:00, Пн–Пт</div>
              </div>
            </section>

            <details className="contact-bank">
              <summary>
                <span className="contact-bank__icon"><MIcon name="account_balance" size={21}/></span>
                <span className="contact-bank__summary-copy">
                  <strong>Банковские реквизиты</strong>
                  <small>Для оформления документов и оплаты услуг</small>
                </span>
                <span className="contact-bank__chevron"><MIcon name="expand_more" size={22}/></span>
              </summary>
              <div className="contact-bank__content">
                <p className="contact-bank__owner">ИП Стрелков Родион Александрович</p>
                <dl className="contact-bank__details">
                  <div><dt>Фактический адрес</dt><dd>Московская область, Ленинский г.о., рп. Лопатино, ул. Сухановская, д. 10</dd></div>
                  <div><dt>ИНН</dt><dd>091706875564</dd></div>
                  <div><dt>ОГРНИП</dt><dd>325010000032740</dd></div>
                  <div><dt>Расчётный счёт</dt><dd>40802810620000814203</dd></div>
                  <div><dt>Банк</dt><dd>ООО «Банк Точка»</dd></div>
                  <div><dt>БИК</dt><dd>044525104</dd></div>
                  <div><dt>Корреспондентский счёт</dt><dd>30101810745374525104</dd></div>
                </dl>
              </div>
            </details>
          </div>
        </section>
      </main>
      <Footer/>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ContactPage/>);
