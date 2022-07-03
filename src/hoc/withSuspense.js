import React, {Suspense} from "react";
import PreLoader from "../components/common/PreLoader/PreLoader";

export const withSuspense = (Component) => {
    return (props) => {
        return <Suspense fallback={<PreLoader/>}>
            <Component {...props}/>
        </Suspense>
    }
}