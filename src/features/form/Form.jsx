import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Form.module.css";

export function Header({ setCurrentPage, currentPage }) {
  const [isPopUp, setIsPopUp] = useState(false);
  const image = localStorage.getItem("image");
  const name = localStorage.getItem("name");

  // console.log(id);

  const popRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        isPopUp &&
        popRef.current &&
        !popRef.current.contains(e.target) &&
        imageRef.current &&
        !imageRef.current.contains(e.target)
      ) {
        setIsPopUp(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isPopUp]);

  function shownPopUp() {
    setIsPopUp(!isPopUp);
  }

  return (
    <header className={styles.header}>
      <Link className={styles.form} to="/form">
        Form
      </Link>
      <div className={styles.user}>
        <Link
          // onClick={() => setCurrentPage(id)}
          className={styles.card}
          to={`/cards`}
        >
          User Cards
        </Link>
        <div className={styles.name}>
          <p>{name}</p>
        </div>
        <div style={{ position: "relative" }}>
          <img ref={imageRef} onClick={shownPopUp} src={image} />
          {isPopUp ? (
            <div className={styles.pop_up} ref={popRef}>
              <div>
                <p className={styles.question}>
                  {name}, <br /> do you want to leave the page?
                </p>
              </div>
              <div>
                <button
                  className={styles.btn}
                  onClick={() => setIsPopUp(false)}
                >
                  Cancel
                </button>
                <Link className={styles.logout} to="/">
                  log out
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}

function Form() {
  return (
    <>
      <Header />
      <main>this is form</main>
    </>
  );
}

export default Form;
