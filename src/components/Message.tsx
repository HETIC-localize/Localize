import React from "react";
import useUserLangage from "../hooks/useUserLangage";

const Message = () => {
    const test2 = useUserLangage()

    return (
    <React.Fragment>
        <p>{test2}</p>
    </React.Fragment>
    )
}

export default Message;