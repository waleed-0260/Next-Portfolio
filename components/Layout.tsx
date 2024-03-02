import React from 'react'
import { ThemeProvider } from './ThemeContext'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <ThemeProvider>
        {children}
    </ThemeProvider>
  )
}

export default Layout