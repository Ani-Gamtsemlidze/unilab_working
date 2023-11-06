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

  const [currentPage, setCurrentPage] = useState(currentCount);
  const [cardPerPage, setCardPerPage] = useState(cardsCount);
  // const [cards, setCards] = useState([]);

  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;
  const currentUsers = users.slice(indexOfFirstCard, indexOfLastCard);
  const [isActive, setIsActive] = useState(false);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    console.log(newPage);
  };

  function firstElement() {
    setCurrentPage(currentCount);
    // setIsActive(true);
  }
  function lastElement() {
    setCurrentPage(cardsCount);
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.filter}>
            <img src={filter} />
            <p>filter</p>
          </div>
          <div className={styles.search}>
            <img src={search} />
          </div>
        </section>
        {/* <section className={styles.users}> */}
        <Users currentUsers={currentUsers} />
        <Pagination
          isActive={isActive}
          setCurrentPage={handlePageChange}
          currentPage={currentPage}
          lastElement={lastElement}
          firstElement={firstElement}
        />

        {/* </section> */}
      </main>
    </>
  );
}

export default Form;
// currentPage,
// setCurrentPage,
// lastElement,
// firstElement,
