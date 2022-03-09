import React, { useState } from "react";
import useUserLangage from "../hooks/useUserLangage";

import languagedata from './languagedata.json'
import TraductionDataFormat from './type'

const Message = () => {
  const [data, setData] = useState(languagedata)
  const test2 = useUserLangage();
//   console.log(data)

    let message: string

  const useFormatMessage = (userCode: string): string | undefined => {
    data.map(test => {
          if(userCode === test.code){
            message =  test.value;
          }
          return undefined
      })
      console.log(userCode)
      return message
  }

  return (
    <React.Fragment>
      <p>{useFormatMessage("home.greetings")}</p>
    </React.Fragment>
  );
};

export default Message;
