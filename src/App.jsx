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
const TransactionsPage = lazy(() => import("./components/TransactionsPage"))
const AnalyticsPage = lazy(() => import("./components/AnalyticsPage"))
const SettingsPage = lazy(() => import("./components/SettingsPage"))
const DeveloperPage = lazy(() => import("./components/DeveloperPage"))
const HelpPage = lazy(() => import("./components/HelpPage"))

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
            <Route path="/wallet" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}></Route>
            <Route path="/transactions" element={<ProtectedRoute><TransactionsPage /></ProtectedRoute>}></Route>
            <Route path="/analytics" element={<ProtectedRoute><AnalyticsPage /></ProtectedRoute>}></Route>
            <Route path="/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>}></Route>
            <Route path="/developer" element={<ProtectedRoute><DeveloperPage /></ProtectedRoute>}></Route>
            <Route path="/help" element={<ProtectedRoute><HelpPage /></ProtectedRoute>}></Route>
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
