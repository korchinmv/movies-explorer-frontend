import { TitleBlock } from "../elements/TitleBlock/TitleBlock";

export const Technologys = () => {
  return (
    <section className='technologys' id='technologys'>
      <div className='container'>
        <TitleBlock name='Технологии' margin='technologys__title' />
        <h3 className='technologys__subtitle'>7 технологий</h3>
        <p className='technologys__text'>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className='technologys__list'>
          <li className='technologys__item'>HTML</li>
          <li className='technologys__item'>CSS</li>
          <li className='technologys__item'>JS</li>
          <li className='technologys__item'>React</li>
          <li className='technologys__item'>Git</li>
          <li className='technologys__item'>Express.js</li>
          <li className='technologys__item'>mongoDB</li>
        </ul>
      </div>
    </section>
  );
};
