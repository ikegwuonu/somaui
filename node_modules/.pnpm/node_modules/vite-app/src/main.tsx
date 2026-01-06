"use client";
import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/globals.css";
import { Button } from "@somaui/ui/button";
import { Loader } from "../components/ui/loader";
import { Switch } from "../components/ui/switch/switch";
import { Input } from "../components/ui/input/input";

const App = () => {
  return (
    <div className="p-10 space-y-4">
      <p className="bg-primary-dark text-secondary-foreground">this</p>
      <Input label="Name" placeholder="Enter your name" />
      <Button variant="danger" type="button" as="button" size="md">
        Click Me
      </Button>

      <Switch />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
