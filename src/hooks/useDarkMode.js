import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = (key) => {
  const [value, setValue] = useLocalStorage(key, false)
  return [value, setValue]
}