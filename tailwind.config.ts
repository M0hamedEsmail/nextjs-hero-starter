import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

const config: Config = {
  theme: {
    extend: {
      colors: {
         primary: '#213f9a',
         
       
      },
      
  
      
    }
  },
  darkMode: "class",
  plugins: [heroui()],
};

export default config;