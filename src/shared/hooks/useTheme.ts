import { useSyncExternalStore } from 'react'
import { themeStore } from '../stores/themeStore'

export const useTheme = () => {
  const theme = useSyncExternalStore(
    themeStore.subscribe,
    themeStore.getSnapshot,
  )

  return {
    theme,
    toggleTheme: themeStore.toggleTheme,
  }
}
