import { FC } from "react";
import styles from "./Preview.module.scss";
import { Button, Text } from "../../../shared";

export const Preview: FC = (): JSX.Element => {
  return (
    <div className={styles.preview}>
      <div className={styles.title}>
        <Text type="h1" color="#fff">
          Большой театр
        </Text>
        <Text type="p5" mt="3rem" color="#fff">
          Большо́й теа́тр — петербургский театр, существовавший в 1784—1886 годах,
          <br />
          с 1886 года — Петербургская консерватория. Первое постоянное в
          <br />
          Санкт-Петербурге, крупнейшее в России и одно из крупнейших театральных
          <br />
          зданий в Европе XVIII.
        </Text>
        <Button mt="3rem">
          <Text type="p2" color="#fff">
            афиша
          </Text>
        </Button>
      </div>
      <div className={styles.img}>
        <img src="/img/2.jpg" alt="img" className={styles.img1} />
        <img src="/img/2-1.jpg" alt="img" className={styles.img2} />
      </div>
    </div>
  );
};
