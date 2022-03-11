export type TraductionDataFormat = {
  id: string
  code: string
  value: string
  country: string 
  createdAt: string
}

export type Message = {
  formattedMessage: string;
  data: Array<TraductionDataFormat>
}

export type FormatMessageItem = {
  transmittedCode: string
}

export type TranslationContent = {
  userEmail: string
  setUserEmail: (c: string) => void
  // translationData: Array<TraductionDataFormat>
  // setTranslationData:(c: Array<TraductionDataFormat>) => void
}


