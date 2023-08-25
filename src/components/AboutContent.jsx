import { useState } from "react";

import AboutCard from "./aboutCard/AboutCard";
import TaskCard from "./taskCard/TaskCard";

import starSmile from "../assets/image/starSmile.svg";
import linguaSmile from "../assets/image/linguaSmile.svg";
import glassesSmile from "../assets/image/glassesSmile.svg";
import decorBg from "../assets/image/decorBgAbout.svg";
import decorCircleBlue from "../assets/image/decorCircleBlue.svg";
import decorCirclePurpleTop from "../assets/image/decorPurple.svg";
import decorCirclePurpleBottom from "../assets/image/decorPurpleOpacity.svg";
import photoSchool from "../assets/image/photo-school.png";
import photoNow from "../assets/image/photo-now.jpg";
import videoCSS from "../assets/video/text-overflow-1.mp4";

import styles from "./AboutContent.module.scss";

const AboutContent = () => {
  const [photosTask, setPhotosTask] = useState(false);
  const [historyTask, setHistoryTask] = useState(false);
  const [videoTask, setVideoTask] = useState(false);
  const [textShort, setTextShort] = useState(true);
  return (
    <div className={styles.aboutContent}>
      <img src={decorBg} className={styles.aboutContent__decorBgRight} />
      <h1 className={styles.aboutContent__title}>Ответы на вопросы</h1>
      <div className={styles.aboutContent__cards} id="AboutContent">
        {!photosTask ? (
          <AboutCard
            onClick={() => setPhotosTask(true)}
            cardImg={starSmile}
            cardText="Как я изменилась после школы? Сравним фотографии"
          />
        ) : (
          <TaskCard onClose={() => setPhotosTask(false)}>
            <div className={styles.photosTask}>
              <div className={styles.photosTask__photo}>
                <h1>Тогда</h1>
                <img src={photoSchool} alt="photo" />
              </div>
              <div className={styles.photosTask__photo}>
                <h1>Сейчас</h1>
                <img src={photoNow} alt="photo" />
              </div>
            </div>
          </TaskCard>
        )}
        {!historyTask ? (
          <AboutCard
            onClick={() => setHistoryTask(true)}
            cardImg={linguaSmile}
            cardText="Почему программирование стало для меня любимым делом?"
          />
        ) : (
          <TaskCard onClose={() => setHistoryTask(false)}>
            <div className={styles.historyTask}>
              <h1>Почему программирование стало для меня любимым делом?</h1>
              <p
                className={!textShort ? "" : styles.historyTask__shortText}
                onClick={() => setTextShort(!textShort)}
              >
                Заниматься программированием я начала не со школьной скамьи и
                искренне радуюсь за ребят, которые стремятся изучать его раньше.
                Оно не только помогает развить в себе аналитические навыки, но и
                познакомиться с новыми языком общения - языком компьютера! Для
                меня программирование стало “дверью” во вторую Вселенную,
                которая полна разнообразием языков, правил и возможностей
                привнести что-то новое. Моё знакомство началось с разработки
                веб-страниц, в частности frontend-разработки, которая дает
                безграничные возможности для реализации технологичных идей.
                Frontend - это возможность создавать невероятные
                пользовательские интерфейсы. Ведь ещё несколько десятков лет
                назад об анимации, удобстве и читаемости сайтов речи не шло, а с
                развитием этого направления, у визуализации появился шанс.
              </p>
            </div>
          </TaskCard>
        )}
        {!videoTask ? (
          <AboutCard
            onClick={() => setVideoTask(true)}
            cardImg={glassesSmile}
            cardText="Фишка CSS при работе с текстом или тайна text-overflow"
          />
        ) : (
          <TaskCard onClose={() => setVideoTask(false)}>
            <div className={styles.videoTask}>
              <video
                src={videoCSS}
                className={styles.videoTask__video}
                controls
              ></video>
            </div>
          </TaskCard>
        )}
      </div>

      <img
        src={decorCircleBlue}
        className={styles.aboutContent__decorCircleBlue}
      />
      <img
        src={decorCirclePurpleTop}
        className={styles.aboutContent__decorCirclePurpleTop}
      />
      <img
        src={decorCirclePurpleBottom}
        className={styles.aboutContent__decorCirclePurpleBottom}
      />
    </div>
  );
};

export default AboutContent;
