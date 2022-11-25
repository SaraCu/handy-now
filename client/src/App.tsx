import React from "react";
import "./App.css";

type BoxProps = {
    children: React.ReactNode;
};

function App(props: BoxProps) {
    return (
        <div className="App">
            {props.children}
            <header className="App-header"></header>
        </div>
    );
}

export default App;
