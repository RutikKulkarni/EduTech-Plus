import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-react";
import LandingPage from "./pages/LandingPage";
import Weather from "./pages/Weather";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
  throw new Error("Clerk publishableKey is missing.");
}

// Layout Component
const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

// Protected Route Component
const ProtectedRoute = ({ element }) => (
  <>
    <SignedIn>{element}</SignedIn>
    <SignedOut>
      <Navigate to="/" replace />
    </SignedOut>
  </>
);

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/weather"
              element={<ProtectedRoute element={<Weather />} />}
            />
            <Route
              path="/dashboard"
              element={<ProtectedRoute element={<Dashboard />} />}
            />
          </Routes>
        </Layout>
      </Router>
    </ClerkProvider>
  );
}

export default App;
