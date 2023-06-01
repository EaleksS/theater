import { FC } from "react";
import styles from "./BestTheater.module.scss";
import { Text } from "../../../shared";
import { AiFillStar } from "react-icons/ai";

export const BestTheater: FC = (): JSX.Element => {
  return (
    <div className={styles.best_theater}>
      <div className={styles.content}>
        <div className={styles.years}>
          <Text type="h1">
            <span>2018</span>
          </Text>
          <Text type="h1">
            <span>2019</span>
          </Text>
          <Text type="h1">
            <span>2020</span>
          </Text>
        </div>
        <div className={styles.title}>
          <div className={styles.rating}>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <Text type="h3" color="#fff" mt="1rem">
            Лучший театр <br />
            по мнению театральных <br /> критиков Парижа
          </Text>
        </div>
      </div>
    </div>
  );
};
