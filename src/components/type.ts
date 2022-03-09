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


