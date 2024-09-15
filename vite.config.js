import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { styled } from '@mui/system'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
       '@emotion/react': '@emotion/react',
        '@emotion/styled': '@emotion/styled',

    },
  },
})
