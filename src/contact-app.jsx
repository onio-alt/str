/* global React, ReactDOM, Header, Footer, MIcon */

function ContactPage() {
  return (
    <React.Fragment>
      <Header/>
      <main>
        <section className="contact-page" id="top">
          <div className="container">
            <header className="contact-page__head">
              <p className="contact-page__eyebrow"><span></span> Контакты и реквизиты</p>
              <h1>Связаться с экспертом</h1>
              <p className="contact-page__lead">
                Выберите удобный способ связи. Для оформления документов и оплаты услуг ниже указаны полные реквизиты.
              </p>
            </header>

            <div className="contact-page__grid">
              <section className="contact-page__card contact-requisites" aria-labelledby="details-title">
                <div className="contact-page__card-head">
                  <span className="contact-page__card-icon"><MIcon name="business_center" size={24}/></span>
                  <div>
                    <p className="contact-page__card-caption">Индивидуальный предприниматель</p>
                    <h2 id="details-title">Стрелков Родион Александрович</h2>
                  </div>
                </div>

                <div className="contact-address">
                  <span className="contact-address__icon"><MIcon name="location_on" size={23}/></span>
                  <div>
                    <span>Фактический адрес</span>
                    <strong>Московская область, Ленинский г.о., рп. Лопатино, ул. Сухановская, д. 10, 5 подъезд</strong>
                  </div>
                </div>

                <h3 className="contact-requisites__title">Банковские реквизиты</h3>
                <dl className="contact-details">
                  <div className="contact-detail">
                    <dt>ИНН</dt>
                    <dd>091706875564</dd>
                  </div>
                  <div className="contact-detail">
                    <dt>ОГРНИП</dt>
                    <dd>325010000032740</dd>
                  </div>
                  <div className="contact-detail contact-detail--wide">
                    <dt>Расчётный счёт</dt>
                    <dd>40802810620000814203</dd>
                  </div>
                  <div className="contact-detail">
                    <dt>Банк</dt>
                    <dd>ООО «Банк Точка»</dd>
                  </div>
                  <div className="contact-detail">
                    <dt>БИК</dt>
                    <dd>044525104</dd>
                  </div>
                  <div className="contact-detail contact-detail--wide">
                    <dt>Корреспондентский счёт</dt>
                    <dd>30101810745374525104</dd>
                  </div>
                </dl>
              </section>

              <aside className="contact-page__card contact-channels" aria-labelledby="channels-title">
                <div className="contact-page__card-head contact-page__card-head--compact">
                  <span className="contact-page__card-icon"><MIcon name="forum" size={24}/></span>
                  <h2 id="channels-title">Способы связи</h2>
                </div>
                <p className="contact-channels__intro">
                  Нажмите на удобный вариант — телефон и приложения откроются автоматически.
                </p>
                <div className="contact-channels__list">
                  <a className="contact-action contact-action--primary" href="tel:+79266100903">
                    <span className="contact-action__icon"><img src="assets/icon-call.svg" alt="" width="24" height="24"/></span>
                    <span className="contact-action__copy"><strong>Позвонить</strong><small>+7 (926) 610-09-03</small></span>
                    <MIcon name="arrow_outward" size={20}/>
                  </a>
                  <a className="contact-action" href="mailto:rstrelkov@inbox.ru">
                    <span className="contact-action__icon"><MIcon name="mail" size={24}/></span>
                    <span className="contact-action__copy"><strong>Электронная почта</strong><small>rstrelkov@inbox.ru</small></span>
                    <MIcon name="arrow_outward" size={20}/>
                  </a>
                  <a className="contact-action" href="https://wa.me/79266100903" target="_blank" rel="noopener noreferrer">
                    <span className="contact-action__icon"><img src="assets/icon-whatsapp.svg" alt="" width="24" height="24"/></span>
                    <span className="contact-action__copy"><strong>WhatsApp</strong><small>Написать в мессенджере</small></span>
                    <MIcon name="arrow_outward" size={20}/>
                  </a>
                  <a className="contact-action" href="https://t.me/IT_Expert_strexpit" target="_blank" rel="noopener noreferrer">
                    <span className="contact-action__icon"><img src="assets/icon-telegram.svg" alt="" width="24" height="24"/></span>
                    <span className="contact-action__copy"><strong>Telegram</strong><small>Написать в Telegram</small></span>
                    <MIcon name="arrow_outward" size={20}/>
                  </a>
                  <a className="contact-action" href="https://max.ru/u/f9LHodD0cOI_xD66B9gSkqR2KqiMaQWBJgHLFhiEkTNQMEazV7VkzTJO71A" target="_blank" rel="noopener noreferrer">
                    <span className="contact-action__icon"><img src="assets/icon-max.svg" alt="" width="24" height="24"/></span>
                    <span className="contact-action__copy"><strong>MAX</strong><small>Написать в MAX</small></span>
                    <MIcon name="arrow_outward" size={20}/>
                  </a>
                </div>
                <p className="contact-channels__schedule"><MIcon name="schedule" size={18}/> Режим работы: 12:00–20:00, Пн–Пт</p>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ContactPage/>);
