import React, { useState } from "react";
import { TraductionDataFormat } from './type'
import useFormatMessage from "../hooks/useFormatMessage";

type FormatMessageItem = {
  transmittedCode: string
  transmittedData: Array<TraductionDataFormat>
}

const Message = ({transmittedCode , transmittedData}: FormatMessageItem ) => {
  const [code] = useState(transmittedCode)
  const [data] = useState(transmittedData)

  const test = useFormatMessage(code, data)


  return (
    <React.Fragment>
      <p>{test}</p>
    </React.Fragment>
  );
};

export default Message;
