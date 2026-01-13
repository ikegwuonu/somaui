"use client";

import React from "react";
import { RizzUIThemeProvider } from "@site/src/contexts/somaui-theme-context";

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RizzUIThemeProvider>{children}</RizzUIThemeProvider>;
}
