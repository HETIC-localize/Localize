import React, { useState } from "react";
import useFormatMessage from "../hooks/useFormatMessage";
import { useTranslationContext } from '../hooks/useTranslationContext'
import { FormatMessageItem } from './type'

const Translate = ({transmittedCode }: FormatMessageItem ) => {
  const { translationData } = useTranslationContext()
  const [code] = useState(transmittedCode)
  const test = useFormatMessage(code, translationData)

  return (
    <React.Fragment>
      <p>{test}</p>
    </React.Fragment>
  );
};

export default Translate;
