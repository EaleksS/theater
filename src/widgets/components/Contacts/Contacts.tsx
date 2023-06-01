import { FC, useState } from "react";
import styles from "./Contacts.module.scss";
import { Button, Input, Text } from "../../../shared";

export const Contacts: FC = (): JSX.Element => {
  const [valueName, setValueName] = useState<string>("");
  const [valueTel, setValueTel] = useState<string>("");
  const [valueEmail, setValueEmail] = useState<string>("");
  const [valueCompany, setValueCompany] = useState<string>("");
  const [valueMess, setValueMess] = useState<string>("");

  return (
    <div className={styles.contacts} id="contacts">
      <Text type="h2" color="#fff">
        <span>стать</span> меценатом
      </Text>

      <div className={styles.container}>
        <div className={styles.contact}>
          <Text type="p3" color="#fff">
            +7 (812) 123-45-55
          </Text>
          <Text type="p3" color="#fff">
            +7 (812) 123-45-55
          </Text>
          <Text type="p3" color="#fff">
            info@theater.ru
          </Text>
          <Text type="p3" color="#fff">
            г. санкт-петербург, невский 140
          </Text>
        </div>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.inputs}>
            <div className={styles.input}>
              <Input
                placholder="Имя"
                value={valueName}
                setValue={setValueName}
              />
              <Input
                placholder="Компания"
                value={valueCompany}
                setValue={setValueCompany}
              />
              <Input
                type="tel"
                placholder="Телефон"
                value={valueTel}
                setValue={setValueTel}
              />
              <Input
                placholder="E-mail"
                value={valueEmail}
                setValue={setValueEmail}
              />
            </div>
            <div className={styles.textarea}>
              <Input
                type="textarea"
                value={valueMess}
                setValue={setValueMess}
              />
            </div>
          </div>
          <div className={styles.info}>
            <Text type="p5">
              * Ваши данные не будут переданы третьим лицам, 100% вероятность.
              Конфиденциальность мы гарантируем, и защищаем персональные данные
              согласно законку ФЗ-52.
            </Text>
            <Button>
              <Text type="p2" color="#fff">
                отправить
              </Text>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
