import s from "./Paginator.module.css";
import React, {useState} from "react";
import cn from "classnames"

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
            {pagesNumbers
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                return <span className={cn({[s.selectedPage]: selectedPage === p})}
                             onClick={(e) => {
                                 onSetSelectedPage(p)
                             }}
                             key={p}
                >{p}</span>
            })}
            {portionCount > portionNumber && <button onClick={() => {setPortionNumber(portionNumber + 1)}}>Next</button>}
        </div>
    )
}

export default Paginator;