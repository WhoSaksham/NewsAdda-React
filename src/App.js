import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import About from "./components/About";

const App = () => {

  const [progress, setProgress] = useState(0)

  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar
          color='#b5fffd'
          progress={progress}
        />
        <Routes>
          <Route
            exact path="/"
            element={
              <News setProgress={setProgress} />
            }
          />
        </Routes>
        <Routes>
          <Route
            exact path="/general"
            element={
              <News setProgress={setProgress} category="general" />
            }
          />
        </Routes>
        <Routes>
          <Route
            exact path="/technology"
            element={
              <News setProgress={setProgress} category="technology" />
            }
          />
        </Routes>
        <Routes>
          <Route
            exact path="/business"
            element={
              <News setProgress={setProgress} category="business" />
            }
          />
        </Routes>
        <Routes>
          <Route
            exact path="/sports"
            element={
              <News setProgress={setProgress} category="sports" />
            }
          />
        </Routes>
        <Routes>
          <Route
            exact path="/health"
            element={
              <News setProgress={setProgress} category="health" />
            }
          />
        </Routes>
        <Routes>
          <Route
            exact path="/science"
            element={
              <News setProgress={setProgress} category="science" />
            }
          />
        </Routes>
        <Routes>
          <Route
            exact path="/entertainment"
            element={
              <News setProgress={setProgress} category="entertainment" />
            }
          />
        </Routes>
        <Routes>
          <Route
            exact path='/about'
            element={<About />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;