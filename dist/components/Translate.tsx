import React, { useState } from "react";
import useFormatMessage from "../hooks/useFormatMessage";
import { useTranslationContext } from '../hooks/useTranslationContext'
import { FormatMessageItem } from './type'

const Translate = ({transmittedCode }: FormatMessageItem ) => {
  const { userEmail } = useTranslationContext()
  const [code] = useState(transmittedCode)
  const formatMessage = useFormatMessage(code, userEmail)

  return (
    <React.Fragment>
      <p>{formatMessage}</p>
    </React.Fragment>
  );
};

export default Translate;
