import { useContext } from 'react'
import {TranslationContext} from '../context/TranslationContext'

export const useTranslationContext = () => useContext(TranslationContext)