import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/global.css";
import Text from "./text";
import { Input } from "@somaui/ui/input";
import { Accordion } from "@somaui/ui/accordion";
import ButtonUI from "./ui/buttonui";
import { TT } from "./ui/tt";
import { Title } from "@somaui/ui/title";
import { Loader } from "@somaui/ui/loader";
import { Button } from "./components/button";
const App = () => {
  return (
    <div className="p-10 space-y-4">
      {/* <TT /> */}
      <Input className="bg-amber-50" />
      <Title children="Hello, Somaui!" />
      <ButtonUI />
      <Input placeholder="Enter your name" label="Name" />
      <Button size="sm" variant="outline">
        <Loader />
      </Button>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
