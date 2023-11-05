import React from "react";
import ResponsivePagination from "react-responsive-pagination";
import { dropEllipsis } from "react-responsive-pagination/narrowBehaviour";
import "react-responsive-pagination/themes/classic.css";
import leftArrow from "../assets/images/chevrons-left.png";
import rightArrow from "../assets/images/chevrons-right.png";
import styles from "./Pagination.module.css";

function Pagination({
  currentPage,
  setCurrentPage,
  lastElement,
  firstElement,
}) {
  const totalPages = 10;
  return (
    <div className={styles.page_fluid}>
      <div className={styles.container}>
        <img className={styles.left} src={leftArrow} onClick={lastElement} />

        <ResponsivePagination
          narrowBehaviour={dropEllipsis}
          current={currentPage}
          total={totalPages}
          onPageChange={setCurrentPage}
          nextLabel={">"}
          previousLabel={"<"}
        />
        <img className={styles.right} src={rightArrow} onClick={firstElement} />
      </div>
    </div>
  );
}
export default Pagination;
