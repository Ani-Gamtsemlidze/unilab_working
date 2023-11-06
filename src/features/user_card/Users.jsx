import React, { useEffect } from "react";
// import "mdb-react-ui-kit/dist/css/mdb.min.css";
import styles from "./Users.module.css";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";

import Pagination from "../../api/Pagination";

export default function Users({ currentUsers }) {
  return (
    <section className={styles.table}>
      <div style={{ display: "flex" }} className={styles.categories}>
        <ul>
          <li>სტუდენტის სახელი და გვარი</li>
          <li>სტატუსი</li>
          <li>სქესი</li>
          <li>ქულები</li>
          <li>პირადი ნომერი</li>
          <li>მაილი</li>
          <li>მობილურის ნომერი</li>
          <li>მისამართი</li>
          <li>დაბადების თარიღი</li>
        </ul>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {currentUsers.slice(0, 10).map((item) => (
          <ul className={styles.item}>
            <li>{item.full_name}</li>
            <li>{item.status}</li>
            <li>{item.gender}</li>
            <li>{item.points}</li>
            <li>{item.id_number}</li>
            <div>
              <li>{item.mail}</li>
            </div>
            <li>{item.mobile_numbers}</li>
            <li>{item.address}</li>
            <li>{item.birth_day}</li>
          </ul>
        ))}
      </div>
    </section>
  );
}
