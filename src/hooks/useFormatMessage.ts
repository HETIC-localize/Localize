import { TraductionDataFormat } from "../components/type";
let message: string

const useFormatMessage = (userCode: string, data: Array<TraductionDataFormat>)  => {
    data.map(test => {
        if(userCode === test.code){
             return message = test.value;
          }
          return message = userCode
      })
      return message
  }

export default useFormatMessage