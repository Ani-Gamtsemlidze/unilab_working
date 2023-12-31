// import { useEffect, useRef, useState } from "react";
// import { Link, useParams } from "react-router-dom";
import styles from "./Form.module.css";

import filter from "../../assets/images/filter.svg";
import search from "../../assets/images/search.svg";

import Header from "../../layouts/Header";
import Users from "../user_card/Users";
import Pagination from "../../api/Pagination";

import users from "../../data/users.json";

import { useState } from "react";

function Form() {
  const currentCount = 1;
  const cardsCount = 10;

  const [isFilterActive, setIsFilterActive] = useState(false);

  const [currentPage, setCurrentPage] = useState(currentCount);
  const [cardPerPage, setCardPerPage] = useState(cardsCount);
  // const [cards, setCards] = useState([]);

  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;
  // console.log(users);
  let currentUsers = users.slice(indexOfFirstCard, indexOfLastCard);
  const total = currentUsers.length;
  const [isActive, setIsActive] = useState(false);

  const handlePageChange = (newPage) => {
    // console.log(newPage);
    setCurrentPage(newPage);
  };

  function firstElement() {
    setCurrentPage(currentCount);
    // setIsActive(true);
  }
  function lastElement() {
    setCurrentPage(cardsCount);
  }

  function handleFilterActive() {
    setIsFilterActive(!isFilterActive);
  }

  const filterData = (test) => {
    console.log(test);
    // currentUsers = test;
  };
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.section}>
          <div onClick={handleFilterActive} className={styles.filter}>
            <img src={filter} />
            <p>filter</p>
          </div>

          <div className={styles.search}>
            <img src={search} />
          </div>
        </section>
        {/* <section className={styles.users}> */}
        <Users
          filterData={filterData}
          currentUsers={currentUsers}
          isFilterActive={isFilterActive}
        />

        {/* </section> */}
      </main>
      <Pagination
        total={total}
        isActive={isActive}
        setCurrentPage={handlePageChange}
        currentPage={currentPage}
        lastElement={lastElement}
        firstElement={firstElement}
      />
    </>
  );
}

export default Form;
