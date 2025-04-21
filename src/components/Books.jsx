import {
  NavLink,
  useSearchParams,
  useLocation,
  Outlet,
} from "react-router-dom";
import { getBooks } from "./data";
import { useEffect, useState } from "react";

const Books = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const books = getBooks();
  const [hoveredBook, setHoveredBook] = useState(null);
  const [idBook, setIdBook] = useState();
  useEffect(() => {
    setIdBook();
  }, []);

  const greenPalette = {
    light: "rgba(210, 235, 210, 0.7)",
    medium: "rgba(180, 215, 180, 0.9)",
    dark: "rgba(150, 195, 150, 1)",
    active: "rgba(100, 160, 100, 1)",
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f8faf8",
      }}
    >
      <nav
        style={{
          width: "280px",
          padding: "20px",
          backgroundColor: "#ffffff",
          borderRight: "1px solid #e0e0e0",
        }}
      >
        <input
          type="text"
          style={{
            width: "100%",
            padding: "10px 15px",
            marginBottom: "20px",
            border: "1px solid #d0e0d0",
            borderRadius: "4px",
            fontSize: "16px",
            outline: "none",
            backgroundColor: "#f5f9f5",
          }}
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            const filter = event.target.value;
            setSearchParams(filter ? { filter } : {});
          }}
          placeholder="جست و جوی کتاب"
        />

        <div
          className="flex flex-col gap-8"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          {books
            .filter((book) => {
              const filter = searchParams.get("filter");
              if (!filter) return true;
              return book.name.toLowerCase().includes(filter.toLowerCase());
            })
            .map((book) => (
              <NavLink
                key={book.number}
                to={`/books/${book.number}${location.search}`}
                style={({ isActive }) => ({
                  display: "block",
                  padding: "12px 15px",
                  borderRadius: "4px",
                  color: isActive ? "white" : "#2d4d2d",
                  textDecoration: "none",
                  backgroundColor: isActive
                    ? greenPalette.active
                    : hoveredBook === book.number
                    ? greenPalette.medium
                    : greenPalette.light,
                  transition: "all 0.3s ease",
                  border: `1px solid ${
                    isActive
                      ? "rgba(80, 140, 80, 0.5)"
                      : "rgba(180, 215, 180, 0.3)"
                  }`,
                  transform:
                    hoveredBook === book.number ? "translateX(3px)" : "none",
                })}
                onMouseEnter={() => setHoveredBook(book.number)}
                onMouseLeave={() => setHoveredBook(null)}
              >
                {book.name}
              </NavLink>
            ))}
        </div>
      </nav>

      <div
        style={{
          flex: 1,
          padding: "20px",
          backgroundColor: "#ffffff",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Books;
