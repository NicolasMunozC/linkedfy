import { extendTheme } from "@chakra-ui/react"
import Fonts from './Fonts'

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
    fonts: Fonts,
    colors: {
        brand: {
            yellow: '#FED766',
            blue: '#009FB7',
            black: '#333',
        }
    },
})
