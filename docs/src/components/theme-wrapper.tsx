'use client';

import React from 'react';
import { SomaUIThemeProvider } from '@site/src/contexts/somaui-theme-context';

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SomaUIThemeProvider>{children}</SomaUIThemeProvider>;
}
