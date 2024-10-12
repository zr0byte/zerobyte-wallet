import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage"
import { ModeToggle } from "./components/mode-toggle"
import { ThemeProvider } from "./components/theme-provider"
import Dashboard from "./components/Dashboard"
import Docs from "./components/Docs"
import FAQs from "./components/FAQs"
import HowItWorks from "./components/HowItWorks"

function App() {

  return (
    <ThemeProvider defaultTheme="system" enableSystem>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/app" element={<Dashboard />}></Route>
          <Route path="/docs" element={<Docs />}></Route>
          <Route path="/faqs" element={<FAQs />}></Route>
          <Route path="/how-it-works" element={<HowItWorks />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  )
}

export default App
