import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import Footer from "./layout/footer";
import Header from "./layout/header";
import Main from "./layout/main";
import ScrollToTop from "./components/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>
      {!loading && (
        <>
          <Header />
          <Main />
          <Footer />
          <ScrollToTop />
        </>
      )}
    </>
  );
}

export default App;
