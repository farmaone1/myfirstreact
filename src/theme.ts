import { createSystem, defaultConfig, defineConfig, mergeConfigs } from "@chakra-ui/react";

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

export default system;