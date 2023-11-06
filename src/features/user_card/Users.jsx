import React, { useEffect } from "react";
// import "mdb-react-ui-kit/dist/css/mdb.min.css";
import styles from "./Users.module.css";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";

import Pagination from "../../api/Pagination";
import { useState } from "react";

export default function Users({ currentUsers, isFilterActive, filterData }) {
  const [checkBox, setCheckBox] = useState();

  const [displayCategory, setDisplayCategory] = useState("active");

  const [activeChecked, setActiveChecked] = useState(true);
  const [inactiveChecked, setInactiveChecked] = useState(true);

  const toggleActive = () => {
    setActiveChecked(!activeChecked);
  };

  const toggleInactive = () => {
    setInactiveChecked(!inactiveChecked);
  };

  const filteredUsers = currentUsers.filter((user) => {
    if (activeChecked && user.status === "active") {
      return true;
    }
    if (inactiveChecked && user.status === "inactive") {
      return true;
    }
    return false;
  });

  useEffect(() => {
    console.log(filteredUsers, currentUsers);
    filterData(filteredUsers);
    // console.log(filteredUsers);
  }, [filteredUsers]);
  // const handleChange = (event) => {
  //   if (event.target.checked) {
  //     setDisplayCategory("active");
  //     console.log("✅ Checkbox is checked");
  //   } else {
  //     setDisplayCategory("");
  //     console.log("⛔️ Checkbox is NOT checked");
  //   }
  // };

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
        {filteredUsers.map((item) => (
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
      {isFilterActive ? (
        <div
          style={{
            position: "absolute",
            backgroundColor: "red",
            width: "240px",
            height: "280px",
            left: "0",
            borderRadius: "21px",
          }}
        >
          <p>სტუდენტის სტატუსი</p>
          <label>
            active
            <input
              type="checkbox"
              checked={activeChecked}
              onChange={toggleActive}
            />
          </label>
          <label>
            inactive
            <input
              type="checkbox"
              checked={inactiveChecked}
              onChange={toggleInactive}
            />
          </label>
          {/* <ul>
            {filteredUsers.map((user, index) => (
              <li key={index}>{user.full_name}</li>
            ))}
          </ul> */}
        </div>
      ) : (
        ""
      )}
    </section>
  );
}
