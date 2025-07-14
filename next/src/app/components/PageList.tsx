"use client";
import styles from "./PageList.module.css";
import React, { useState, ChangeEvent } from "react";
import { useEffect } from "react";
import { getUsers } from "../api/api";
import Item from "./Item";

export interface IData {
  id: number;
  name: string;
  age: number;
  city: string;
  phone: number;
}

export default function PageList() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getData = async () => {
      const result = await getUsers();
      setData(result);
    };
    getData();
  }, []);

  const filteredData = data.filter((item: any) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.pageList}>
      <div className={styles.filter}>
        Поиск по имени
        <input
          type="text"
          placeholder="Поиск..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className={styles.item}>
        <Item data={filteredData} />
      </div>
    </div>
  );
}
