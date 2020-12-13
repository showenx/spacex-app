import React from "react";

import { useSelector, shallowEqual } from "react-redux";

import { updateCellAction } from "./store/actions";
import spacex from "./spacex.svg";
import "./App.css";
import { CapsuleCatalog } from "./components/capsule-catalog";

const App: React.FC = () => {
  const capsules: readonly ICapsule[] = useSelector(
    (state: CapsuleState) => state.capsules,
    shallowEqual
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={spacex} className="App-logo" alt="logo" />

        {capsules.map((capsule: ICapsule) => (
          <CapsuleCatalog
            key={capsule.capsule_serial}
            capsule={capsule}
            updateCell={updateCellAction}
          />
        ))}
      </header>
    </div>
  );
};

export default App;
