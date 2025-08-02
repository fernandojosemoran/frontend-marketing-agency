"use client";

import { useEffect } from "react";
import { CasesHeader, CasesList } from "./(components)";

import useToggleDarkMode from "../(shared)/hooks/useToggleDarkModel";

export default function CasesPage() {
  const { handlerTheme } = useToggleDarkMode();

  useEffect(() => handlerTheme(), []);

  return (
    <div className="pt-28 dark:bg-dm-primary overflow-x-hidden">
      <CasesHeader />
      <CasesList />
    </div>
  );
}
