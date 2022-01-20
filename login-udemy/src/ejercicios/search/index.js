import { useState } from "react";
import SearchBox from "./components/SearchBox";
import "./style.css";

export default function Search() {
  const [isAtop, setIsAtTop] = useState(false);
  const handleSearchClick = () => {
    setIsAtTop(true);
  };
  const handleCloseClick = () => {
    setIsAtTop(false);
  };
  
  return (
    <div className={`search ${isAtop ? "searchTop" : "searchCenter"}`}>
      <SearchBox onSearch={handleSearchClick} onClose={handleCloseClick} />
    </div>
  );
}
