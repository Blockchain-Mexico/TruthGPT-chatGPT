// theme.js
import { extendTheme } from '@chakra-ui/react'

// Version 1: Using objects
export const theme = extendTheme({
  colors: {
    backgroundDark: '#00000A',
  },
  styles: {
    global: {
      body: {
        bg: '#8E8EA0',
        color: 'white'
      }
    }
  }
})
