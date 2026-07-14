/* global React, ReactDOM, Header, Footer, MIcon, IconWhatsApp, IconTelegram, IconMax */

function ContactPage() {
  return (
    <React.Fragment>
      <Header/>
      <main>
        <section className="contact-page" id="top">
          <div className="container">
            <header className="contact-page__head">
              <p className="contact-page__eyebrow">Контакты</p>
              <h1>Связаться с экспертом</h1>
              <p className="contact-page__lead">
                Выберите удобный способ связи или используйте реквизиты для оформления документов и оплаты услуг.
              </p>
            </header>

            <div className="contact-page__grid">
              <section className="contact-page__card" aria-labelledby="details-title">
                <h2 id="details-title">Контактные данные и реквизиты</h2>
                <dl className="contact-details">
                  <dt>Наименование</dt>
                  <dd>ИП Стрелков Родион Александрович</dd>

                  <dt>Фактический адрес</dt>
                  <dd>Московская область, Ленинский г.о., рп. Лопатино, ул. Сухановская, д. 10, 5 подъезд</dd>

                  <dt>ИНН / ОГРНИП</dt>
                  <dd>091706875564 / 325010000032740</dd>

                  <dt>Расчётный счёт</dt>
                  <dd>40802810620000814203</dd>

                  <dt>Банк</dt>
                  <dd>ООО «Банк Точка»</dd>

                  <dt>БИК</dt>
                  <dd>044525104</dd>

                  <dt>Корреспондентский счёт</dt>
                  <dd>30101810745374525104</dd>

                  <dt>E-mail</dt>
                  <dd><a href="mailto:rstrelkov@inbox.ru">rstrelkov@inbox.ru</a></dd>

                  <dt>Телефон</dt>
                  <dd><a href="tel:+79266100903">+7 (926) 610-09-03</a></dd>
                </dl>
              </section>

              <aside className="contact-page__card contact-channels" aria-labelledby="channels-title">
                <h2 id="channels-title">Способы связи</h2>
                <p className="contact-channels__intro">
                  Нажмите на нужную кнопку, чтобы сразу связаться с экспертом.
                </p>
                <div className="contact-channels__list">
                  <a className="btn btn--primary contact-channel" href="tel:+79266100903">
                    <span className="contact-channel__icon"><MIcon name="call" size={24}/></span>
                    Позвонить
                  </a>
                  <a className="btn btn--ghost contact-channel" href="mailto:rstrelkov@inbox.ru">
                    <span className="contact-channel__icon"><MIcon name="mail" size={24}/></span>
                    Написать на почту
                  </a>
                  <a className="btn btn--ghost contact-channel" href="https://wa.me/79266100903" target="_blank" rel="noopener noreferrer">
                    <span className="contact-channel__icon"><IconWhatsApp size={24}/></span>
                    WhatsApp
                  </a>
                  <a className="btn btn--ghost contact-channel" href="https://t.me/IT_Expert_strexpit" target="_blank" rel="noopener noreferrer">
                    <span className="contact-channel__icon"><IconTelegram size={24}/></span>
                    Telegram
                  </a>
                  <a className="btn btn--ghost contact-channel" href="https://max.ru/u/f9LHodD0cOI_xD66B9gSkqR2KqiMaQWBJgHLFhiEkTNQMEazV7VkzTJO71A" target="_blank" rel="noopener noreferrer">
                    <span className="contact-channel__icon"><IconMax size={24}/></span>
                    MAX
                  </a>
                </div>
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
