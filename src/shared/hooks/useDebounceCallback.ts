import { useCallback, useRef } from 'react'

export const useDebounceCallback = <T extends (...args: any[]) => void>(
  callback: T,
  delay: number = 500,
): ((...args: Parameters<T>) => void) => {
  const timeout = useRef<ReturnType<typeof setTimeout>>(null)

  return useCallback(
    (...args: Parameters<T>) => {
      const later = () => {
        if (timeout.current) {
          clearTimeout(timeout.current)
        }
        callback(...args)
      }

      if (timeout.current) {
        clearTimeout(timeout.current)
      }
      timeout.current = setTimeout(later, delay)
    },
    [callback, delay],
  )
}
