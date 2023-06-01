import { FC } from "react";
import styles from "./Header.module.scss";
import { Text } from "../../../shared";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { useBurgerMenu } from "../../store/burgerMenu.store";

export const Header: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const { isActive, setIsActive } = useBurgerMenu();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div
          className={`${styles.burger_menu} ${isActive && styles.active}`}
          onClick={() => setIsActive("reverse")}
        >
          <div className={styles.l1}></div>
          <div className={styles.l2}></div>
          <div className={styles.l3}></div>
        </div>
        <ul>
          <li>
            <Link to="wrapper" smooth={true} onClick={() => navigate("/")}>
              <Text type="p2" color="#fff">
                Главная
              </Text>
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} onClick={() => navigate("/")}>
              <Text type="p2" color="#fff">
                о театре
              </Text>
            </Link>
          </li>
          <li>
            <Link to="productions" smooth={true} onClick={() => navigate("/")}>
              <Text type="p2" color="#fff">
                Наши постановки
              </Text>
            </Link>
          </li>
          <li>
            <Link to="partners" smooth={true} onClick={() => navigate("/")}>
              <Text type="p2" color="#fff">
                партнеры театра
              </Text>
            </Link>
          </li>
          <li>
            <Link to="contacts" smooth={true} onClick={() => navigate("/")}>
              <Text type="p2" color="#fff">
                контакты
              </Text>
            </Link>
          </li>
        </ul>
        <ul className={styles.phone}>
          <li>
            <a href="#">
              <Text type="p2" color="#fff">
                +7 495 123-45-67
              </Text>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
