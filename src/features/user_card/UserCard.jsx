import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Header } from "../form/Form";
import styles from "./UserCard.module.css";
import Cards from "../../api/Cards";
import { useParams } from "react-router-dom";
import leftArrow from "../../assets/images/chevrons-left.png";
// import PaginationPage from "../../api/Pagination";
import Header from "../../layouts/Header";
import Pagination from "../../api/Pagination";

function UserCard({ lastElement }) {
  const currentCount = 1;
  const cardsCount = 10;
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(currentCount);
  const [cardPerPage, setCardPerPage] = useState(cardsCount);

  const { id } = useParams();

  // აქ იცვლება გვერდები

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    console.log(newPage);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`
        );
        setCards(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUsers();
  }, []);

  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  function lastElement() {
    setCurrentPage(currentCount);
  }
  function firstElement() {
    setCurrentPage(cardsCount);
  }
  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={handlePageChange} />
      <main className={styles.main}>
        <Cards cards={currentCards} />
      </main>
      <Pagination
        cardPerPage={cardPerPage}
        currentPage={currentPage} // Pass the currentPage as a prop
        setCurrentPage={handlePageChange} // Pass the page change handler
        lastElement={lastElement}
        firstElement={firstElement}
      />
    </>
  );
}

export default UserCard;
