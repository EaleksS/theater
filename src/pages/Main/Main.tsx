import { FC } from "react";
import {
  About,
  BestTheater,
  Contacts,
  Layout,
  Partners,
  Preview,
  Productions,
} from "../../widgets";
// import styles from "./Main.module.scss";

export const Main: FC = (): JSX.Element => {
  return (
    <Layout>
      <Preview />
      <About />
      <Productions />
      <BestTheater />
      <Partners />
      <Contacts />
    </Layout>
  );
};
