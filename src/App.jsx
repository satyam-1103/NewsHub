import Header from "./components/Header";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <News
                key={"general"}
                pageSize={12}
                country="in"
                category="general"
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                key={"business"}
                pageSize={12}
                country="in"
                category="business"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                key={"science"}
                pageSize={12}
                country="in"
                category="science"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                key={"entertainment"}
                pageSize={12}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            path="sports"
            element={
              <News
                key={"sports"}
                pageSize={12}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                key={"technology"}
                pageSize={12}
                country="in"
                category="technology"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                key={"health"}
                pageSize={12}
                country="in"
                category="health"
              />
            }
          />
          <Route
            path="/education"
            element={
              <News
                key={"education"}
                pageSize={12}
                country="in"
                category="education"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
