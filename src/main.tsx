import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "@/components/ui/provider"
import './index.css'
import App from './App.tsx'

import { ColorModeProvider } from "@/components/ui/color-mode"
import { ChakraProvider, createSystem, defaultConfig, defaultSystem, defineConfig, mergeConfigs } from "@chakra-ui/react"


const theme = defineConfig({
  theme: {
    tokens: {
      colors: {
        gray: {
          DEFAULT: { value: "#f9f9f9" },
          100: { value: "#ededed" },
        }
      }
    }
  }
}
);

const config = mergeConfigs(defaultConfig, theme);
const system = createSystem(config);

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
