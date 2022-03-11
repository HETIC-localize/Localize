// import { TraductionDataFormat } from "../components/type";
import useUserEmail from './useUserEmail'
let message: string

const useFormatMessage = (userCode: string, userEmail: string)  => {
    const data = useUserEmail(userEmail)

    data.map(test => {
        if(userCode === test.code){
             return message = test.value;
          }
          return message = userCode
      })
      return message
  }

export default useFormatMessage