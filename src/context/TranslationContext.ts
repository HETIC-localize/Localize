import { createContext } from "react"
import { TranslationContent } from '../components/type'

export const TranslationContext = createContext<TranslationContent>({
translationData: [],
setTranslationData: () => {},
})
