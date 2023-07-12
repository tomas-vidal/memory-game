import React, { useState, createContext, useEffect } from "react";

export const CounterContext = createContext();

function Context({ children }) {
  const [playersClicked, setPlayersClicked] = useState([]);
  const [counter, setCounter] = useState(0);

  const checkIfArrayIsUnique = (arr) => {
    var map = {},
      i,
      size;

    for (i = 0, size = arr.length; i < size; i++) {
      if (map[arr[i]]) {
        return false;
      }

      map[arr[i]] = true;
    }

    return true;
  };

  const addPlayer = (name) => {
    if (checkIfArrayIsUnique(playersClicked)) {
      setPlayersClicked((players) => [...players, name]);
      setCounter((prevCounter) => prevCounter + 1);
    }
  };

  if (!checkIfArrayIsUnique(playersClicked)) {
    setPlayersClicked([]);
    setCounter(0);
  }

  return (
    <CounterContext.Provider value={{ setPlayersClicked, addPlayer, counter }}>
      {children}
    </CounterContext.Provider>
  );
}

export default Context;
