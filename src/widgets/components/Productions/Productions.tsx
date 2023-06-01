import { FC } from "react";
import styles from "./Productions.module.scss";
import { Text } from "../../../shared";
import { BiSearch } from "react-icons/bi";

export const Productions: FC = (): JSX.Element => {
  return (
    <div className={styles.productions} id="productions">
      <Text type="h2" color="#fff">
        <span>наши</span> постановки
      </Text>
      <div className={styles.items}>
        <div className={styles.item}>
          <img src="/img/7-1.jpg" alt="img" />
          <div className={styles.content}>
            <Text type="h3">ОСКАР 2020</Text>
            <Text type="p3">сентябрь 2020</Text>
          </div>
          <div className={styles.increase}>
            <BiSearch className={styles.icon} />
          </div>
        </div>
        <div className={styles.item}>
          <img src="/img/6.jpg" alt="img" />
          <div className={styles.content}>
            <Text type="h3">золотой грамофон</Text>
            <Text type="p3">июль 2020</Text>
          </div>
          <div className={styles.increase}>
            <BiSearch className={styles.icon} />
          </div>
        </div>
        <div className={styles.item}>
          <img src="/img/4-1.jpg" alt="img" />
          <div className={styles.content}>
            <Text type="h3">золотой грамофон</Text>
            <Text type="p3">июль 2020</Text>
          </div>
          <div className={styles.increase}>
            <BiSearch className={styles.icon} />
          </div>
        </div>
        <div className={styles.item}>
          <img src="/img/5-1.jpg" alt="img" />
          <div className={styles.content}>
            <Text type="h3">щелкунчик</Text>
            <Text type="p3">май 2020</Text>
          </div>
          <div className={styles.increase}>
            <BiSearch className={styles.icon} />
          </div>
        </div>
      </div>

      <div className={styles.best}>
        <div className={styles.im}></div>
      </div>
    </div>
  );
};
