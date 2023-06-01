import { FC } from "react";
import styles from "./About.module.scss";
import { Text } from "../../../shared";

export const About: FC = (): JSX.Element => {
  return (
    <div className={styles.about} id="about">
      <Text type="h2" color="#fff">
        <span>о</span> театре
      </Text>
      <div className={styles.items}>
        <div className={styles.title}>
          <Text color="#fff">Самый лучший театр СПБ</Text>
          <Text color="#fff" type="p5" mt="40px">
            Как свидетельствуют архивные документы, первое каменное <br />
            здание Большого театра начали возводить в 1775 году по <br />
            проекту Антонио Ринальди. В дальнейшем, после того как <br />
            Ринальди упал с лесов и не мог лично наблюдать за ходом <br />
            работ, Екатерина II поручила немецкому театральному <br />
            декоратору и архитектору Людвигу Филиппу Тишбейну создать <br />
            новый проект театра, который и был воплощён архитекторами <br /> Ф.
            В. фон Бауром и М. А. Деденёвым. Открытие его состоялось в <br />
            1783 году, хотя, основываясь на других свидетельствах, годом <br />
            открытия можно считать 1784 год.
          </Text>
        </div>
        <div className={styles.info}>
          <Text color="#fff">немного о цифрах</Text>
          <div className={styles.item} style={{ marginTop: "40px" }}>
            <img src="/img/armchair.svg" alt="armchair" />
            <Text type="p3" color="#fff" mt="15px">
              <span>1600</span> посадочный мест
            </Text>
          </div>
          <div className={styles.item} style={{ marginTop: "30px" }}>
            <img src="/img/theater.svg" alt="theater" />
            <Text type="p3" color="#fff" mt="15px">
              <span>350</span> лет истории
            </Text>
          </div>
        </div>
        <div className={styles.img}>
          <img src="/img/3.jpg" alt="img" />
        </div>
      </div>
    </div>
  );
};
