import React, { useState } from "react";
import languagedata from './languagedata.json'
import useFormatMessage from "../hooks/useFormatMessage";

const Message = () => {
  const [data] = useState(languagedata)

  return (
    <React.Fragment>
      <p>{useFormatMessage("home.statut", data)}</p>
    </React.Fragment>
  );
};

export default Message;
