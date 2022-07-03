import loader from "../../../assets/images/loader.gif";
import s from "../../Users/Users.module.css";
import React from "react";

let PreLoader = (props) => {
    return <div>
        { props.isFetching ? <img src={loader} alt="loader" className={s.loader}/> : null }
    </div>
}

export default PreLoader;
