import React from 'react';
import './About.css'
import teamImg from '../../images/team.png'

function About() {
  return (
    <section className="about">
      <img className="about__img" src={teamImg} alt="Команда"/>
      <div className="about__heading">
        <div className="about__column_left">
          <h2 className="about__title">
            Твоя работа в крупнейшем&nbsp;интеграторе цифрового производства
          </h2>
          <button className="about__button">Отправить резюме</button>
          <p className="about__text">
            Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
          </p>
        </div>
        <div className="about__column_right">
          <p className="about__paragraph">
            Top 3D Shop – лидер по продажам 3D-оборудования в России и странах СНГ.
            В 2018 мы стали лучшим интегратором 3D оборудования по аддитивным технологиям и цифровому производству
            по версии <a className="about__link" href="#" target="_blank" rel="noreferrer">3D Print Awards</a>.
          </p>
          <p className="about__paragraph">
            За 6 лет работы более 10 000 клиентов по всей России и СНГ выбрали Top 3D Shop.
            В 2018 наш оборот составил 600 млн. рублей, в компании работает более 100 сотрудников.
          </p>
          <p className="about__paragraph">
            Новая цель: 1 млрд торгового оборота в этом году и выход на международные рынки.
            Если вы — целеустремленный специалист, готовый учиться новым навыкам и учить других,
            мыслите не просто как исполнитель, а как владелец своего направления, то нам по пути!
          </p>
        </div>
      </div>
      <div className="about__links">
        <h3 className="about__subtitle">
          Лучше один раз увидеть:
        </h3>
        <div className="about__line" />
      </div>
    </section>
  );
}

export default About;

