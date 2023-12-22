import style from './hero.module.scss';
// import SplineCanvas from '../canvas/SplineCanvas';
export default function HeroSection() {
  return (
    <section className={`{"main__hero-section"} ${style.section}`}>
      <div className={style.section__block}>
        <div className={`${style.section__container}`}>
          <div className={style.section__inner}>
            <div className={style.section__left}>
              <h1 className={style.section__title}>Холодный хостинг</h1>
              <p className={style.section__description}>
                бррр <br />
                Если вы ищете надежное и профессиональное решение для размещения вашего веб-сайта, то вы находитесь в нужном месте. "Холодильник" – это инновационная платформа, предоставляющая широкий спектр услуг хостинга с лучшей производительностью и надежностью.
              </p>
              <div className={style.section__btn}>Попробовать</div>
            </div>
            <div className={style.section__right}>
              {/* <SplineCanvas /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
