import style from "./service.module.scss";
import Image from "next/image";

export default function ServiceSection() {
  return (
    <section className={`{"main__service-section"} ${style.section}`}>
      <div className={style.section__container}>
        <div className={style.section__inner}>
          <div className={style.section__host}>
            <div className={style.section__host__textWrapper}>
              <h2 className={style.section__host_title}>
              Используй почту для бизнеса по максимум! 
              </h2>
              <p className={style.section__host_descr}>
              Встречайте icemail — помощника в написании электронной почты, который поможет вам с легкостью и быстротой создавать идеальные письма! 

              </p>
            </div>
          </div>
          <div className={style.section__vds}>
            <div className={style.section__vds_content}>
              <h3 className={style.section__vds_title}>
              Удобная мобильная версия 
              </h3>
              <p className={style.section__vds_descr}>
              Всегда будьте на связи и управляйте своей электронной почтой прямо с вашего смартфона в любое время и в любом месте! 
              </p>
            </div>
          </div>
          <div className={style.section__servers}>
            <div className={style.section__servers__textWrapper}>
              <div className={style.section__servers_block}>
                <h2 className={style.section__servers_title}>
                  Запустите проект
                </h2>
                <Image
                  alt=""
                  src="/code.png"
                  width={100}
                  height={100}
                  className={style.hosting}
                />
              </div>

              <p className={style.section__servers_descr}>
                Перенесите свой проект на сервер сами или доверьте это нашей
                команде
              </p>
            </div>
            <div className={style.section__construct_btnWrapper}>
              <div className={style.section__construct_btn}>
                Перенести почту
              </div>
            </div>
          </div>

          <div className={style.section__construct}>
            <div className={style.section__construct__textWrapper}>
              <div className={style.section__servers_block}>
                <h2 className={style.section__servers_title}>
                Фильтруйте письма
и блокируйте спам
                </h2>
                <Image
                  alt=""
                  src="/laptope.png"
                  width={100}
                  height={100}
                  className={style.hosting}
                />
              </div>
              <p className={style.section__construct_descr}>
              Блокируйте отправителей, от которых не хотите
больше получать письма, одной кнопкой. Больше
не нужно переходить по ссылкам для отписки.
              </p>
            </div>
            <div className={style.section__construct_btnWrapper}>
              <div className={style.section__construct_btn}>
                Настроить фильтры
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
