import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage"
import { ModeToggle } from "./components/mode-toggle"
import { ThemeProvider } from "./components/theme-provider"

function App() {

  return (
    <ThemeProvider defaultTheme="system" enableSystem>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  )
}

export default App
