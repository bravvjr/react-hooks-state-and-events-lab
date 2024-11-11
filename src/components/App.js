import React from "react";
import { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkTheme, setIsDark] = useState(false);
  function HandleClick() {
    setIsDark(!isDarkTheme);
    // update the state variable 'isDarkTheme' to toggle between true and false
  }
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDarkTheme ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={HandleClick}>
          {isDarkTheme ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
