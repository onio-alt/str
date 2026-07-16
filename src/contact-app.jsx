/* global React, ReactDOM, Header, Footer, Contact, MIcon, IconWhatsApp, IconTelegram, IconMax */
const { useState } = React;

function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('rstrelkov@inbox.ru');
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <React.Fragment>
      <Header/>
      <main>
        <section className="contact-page" id="top">
          <div className="container contact-page__container">
            <h1 className="contact-page__title">Контакты</h1>

            <div className="contact-layout">
              <div className="contact-main">
                <div className="contact-person">
                  <img
                    className="contact-person__photo"
                    src="assets/expert-photo.jpg"
                    alt="Родион Александрович Стрелков"
                    width="140"
                    height="140"
                  />
                  <div className="contact-person__info">
                    <p>Независимый судебный эксперт</p>
                    <h2>Родион Александрович Стрелков</h2>
                  </div>
                </div>

                <p className="contact-bio">диплом МГТУ им. Баумана, специализация «Судебная экспертиза», опыт 7+ лет.</p>

                <div className="contact-block">
                  <h3>Как связаться</h3>
                  <div className="contact-methods">
                    <a className="contact-method" href="tel:+79266100903">
                      <span className="contact-method__label">Телефон</span>
                      <span className="contact-method__value">
                        +7 (926) 610-09-03
                        <img src="assets/icon-call.svg" alt="" width="20" height="20"/>
                      </span>
                    </a>
                    <div className="contact-method">
                      <span className="contact-method__label">E-mail</span>
                      <span className="contact-method__value">
                        <a href="mailto:rstrelkov@inbox.ru" className="contact-method__email">rstrelkov@inbox.ru</a>
                        <button type="button" className="contact-method__copy" onClick={copyEmail} aria-label="Скопировать e-mail">
                          <MIcon name={copied ? 'check' : 'content_copy'} size={19}/>
                        </button>
                      </span>
                    </div>
                  </div>

                  <div className="contact-messengers">
                    <a className="contact-messenger" href="https://wa.me/79266100903" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><img src="assets/icon-contact-whatsapp.svg" alt="" width="20" height="20"/></a>
                    <a className="contact-messenger" href="https://t.me/IT_Expert_strexpit" target="_blank" rel="noopener noreferrer" aria-label="Telegram"><img src="assets/icon-contact-telegram.svg" alt="" width="20" height="20"/></a>
                    <a className="contact-messenger" href="https://max.ru/u/f9LHodD0cOI_xD66B9gSkqR2KqiMaQWBJgHLFhiEkTNQMEazV7VkzTJO71A" target="_blank" rel="noopener noreferrer" aria-label="MAX"><img src="assets/icon-contact-max.svg" alt="" width="20" height="20"/></a>
                  </div>
                </div>

                <div className="contact-block">
                  <h3>График работы</h3>
                  <p>Отвечаю лично по будням с 9:00 - 20:00.</p>
                </div>

                <div className="contact-block">
                  <h3>Формат работы</h3>
                  <p>Москва и область - лично, по договорённости. С другими регионами России работаю удалённо.</p>
                </div>

                <div className="contact-block">
                  <h3>Реквизиты</h3>
                  <div className="contact-requisites">
                    <p>ИП Стрелков Родион Александрович</p>
                    <p>Фактический адрес Московская область, Ленинский г.о., рп. Лопатино, ул. Сухановская, д. 10</p>
                    <p>ИНН 091706875564</p>
                    <p>ОГРНИП 325010000032740</p>
                    <p>Расчётный счёт 40802810620000814203</p>
                    <p>Банк ООО «Банк Точка»</p>
                    <p>БИК 044525104</p>
                    <p>Корреспондентский счёт 30101810745374525104</p>
                  </div>
                </div>
              </div>

              <div className="contact-form-col">
                <Contact
                  title="Есть вопросы?"
                  subtitle="Опишите ситуацию и приложите фото или документы - бесплатно оценю задачу."
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ContactPage/>);
