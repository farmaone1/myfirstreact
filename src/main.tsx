import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "@/components/ui/provider"
import './index.css'
import App from './App.tsx'

import { ColorModeProvider } from "@/components/ui/color-mode"
import { ChakraProvider} from "@chakra-ui/react"
import system from './theme.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
    <ChakraProvider value={system}>
      <ColorModeProvider forcedTheme="dark">
        <App />
      </ColorModeProvider>
    </ChakraProvider>
    </Provider>
  </StrictMode>,
)
