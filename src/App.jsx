import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"
import { useAuth } from "@clerk/clerk-react"
import { Suspense, lazy, useEffect } from "react"
import { Spinner } from "./components/Spinner"

const HomePage = lazy(() => import("./components/HomePage"))
const Dashboard = lazy(() => import("./components/Dashboard"))
const Docs = lazy(() => import("./components/Docs"))
const FAQs = lazy(() => import("./components/FAQs"))
const HowItWorks = lazy(() => import("./components/HowItWorks"))
const NotFound = lazy(() => import("./components/NotFound"))

const ProtectedRoute = ({ children }) => {
  const { isSignedIn } = useAuth()
  const location = useLocation() 
  if (!isSignedIn) {
    return <Navigate to="/" state={{ from: location }} replace />
  }
  return children
}

const PublicRoute = ({ children }) => {
  const { isSignedIn } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isSignedIn) {
      navigate("/app")
    }
  }, [isSignedIn, navigate])

  return isSignedIn ? null : children
}


function App() {

  return (
    <ThemeProvider defaultTheme="system" enableSystem>
      <Suspense fallback={<Spinner />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PublicRoute><HomePage /></PublicRoute>}></Route>
            <Route path="*" element={<NotFound />}></Route>
            <Route path="/app" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}></Route>
            <Route path="/docs" element={<Docs />}></Route>
            <Route path="/faqs" element={<FAQs />}></Route>
            <Route path="/how-it-works" element={<HowItWorks />}></Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>

  )
}

export default App
