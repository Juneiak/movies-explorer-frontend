import React from 'react';
import './about-project.css';

const AboutProject = () => {
  return (
    <section id='about' className='about-project'>
      <div className='about-project__content'>
        <h2 className='main-page__title'>О проекте</h2>
        <div className='about-project__about'>
          <article className='about-project__text'>
            <p className='about-project__text-title'>Дипломный проект включал 5 этапов</p>
            <p className='about-project__text-subtitle'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </article>
          <article className='about-project__text'>
            <p className='about-project__text-title'>На выполнение диплома ушло 5 недель</p>
            <p className='about-project__text-subtitle'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </article>
        </div>
        <div className='about-project__scale'>
          <div className='about-project__first-part'>
            <div className='about-project__first-part_weeks'>1 неделя</div>
            <span className='about-project__parts-bottom'>Back-end</span>
          </div>
          <div className='about-project__second-part'>
            <div className='about-project__second-part_weeks'>4 недели</div>
            <span className='about-project__parts-bottom'>Front-end</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
