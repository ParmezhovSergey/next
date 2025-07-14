"use client";
import styles from "./Item.module.css";
import { IData } from "./PageList";

export default function Item(props: any) {
  return (
    <div className={styles.item}>
      {props.data.map((item: IData) => (
        <div key={item.id} className={styles.card}>
          <div>Имя: {item.name}</div>
          <div>Возраст: {item.age}</div>
          <div>Город: {item.city}</div>
          <div>Телефон: {item.phone}</div>
        </div>
      ))}
    </div>
  );
}
