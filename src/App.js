import { Link, Outlet, useSearchParams } from "react-router-dom";

import ToDoList from "./components/TodoList-temp";
import "./App.css";
import "./App.css";
import Books from "./components/Books";
import About from "./components/About";
import BookHeader from "./components/BookHeader";

const App = () => {
  return (
    <div>
      <h4
        style={{
          textAlign: "center",
          backgroundColor: "#f5f9f5",
          paddingTop: "22px",
        }}
      >
        کتاب سبز
      </h4>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
          textAlign: "center",
          backgroundColor: "#f5f9f5",
          paddingTop: "25px",
        }}
      >
        <Link to="./About" style={{ color: "Black", textDecoration: "none" }}>
          درباره ما
        </Link>
        {"   "}
        <Link
          to="./Books"
          style={{ textDecoration: "none", color: "Black", padding: "22px" }}
        >
          کتاب
        </Link>
      </nav>
      <Outlet />

      <About />

      <BookHeader />
      <div className="w-full flex align-items-start justify-content-between h-[100vh]">
        <Books />

        <ToDoList />
      </div>
    </div>
  );
};

export default App;
