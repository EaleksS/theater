import { FC } from "react";
import styles from "./Partners.module.scss";
import { Text } from "../../../shared";

export const Partners: FC = (): JSX.Element => {
  return (
    <div className={styles.partners} id="partners">
      <Text type="h2" color="#fff">
        <span>партнеры</span> театра
      </Text>

      <div className={styles.items}>
        {[1, 2, 3, 4].map((e) => (
          <img
            key={e}
            src="/img/gazprom.svg"
            alt="gazprom"
            className={styles.item}
          />
        ))}
      </div>
    </div>
  );
};
