import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

const config: Config = {
  theme: {
    extend: {
      colors: {
         primary: '#787d69',
        secondary: '#fcf6dc',
        
       
      },
      
  
      
    }
  },
  darkMode: "class",
  plugins: [heroui()],
};

export default config;