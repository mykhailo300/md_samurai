import s from "./Paginator.module.css";
import React, {useState} from "react";

let Paginator = ({totalItemsCount, pageSize, selectedPage, portionSize, onSetSelectedPage}) => {
    let pageCount = Math.ceil(totalItemsCount / pageSize);
    let pagesNumbers = [];

    for (let i = 1; i <= pageCount; i++) {
        pagesNumbers.push(i);
    }

    let portionCount = Math.ceil(pageCount/portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={s.pagesContainer}>
            {portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber - 1)}}>Prev</button>}
            {pagesNumbers.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(n => {
                return <span key ={n} className={selectedPage === n ? s.selectedPage : undefined}
                             onClick={(e) => {
                                 onSetSelectedPage(n)
                             }}>{n}</span>
            })}
            {portionCount > portionNumber && <button onClick={() => {setPortionNumber(portionNumber + 1)}}>Next</button>}
        </div>
    )
}

export default Paginator;