"use client";

import { useEffect } from "react";

import {
  BlogList,
  CallToAction,
  Cases,
  Features,
  Header,
  Incentives,
  LogoCloud,
} from "./home/(components)";

import { useAppDispatch } from "./(shared)/hooks";

import controller from "./page.controller";
import useToggleDarkMode from "./(shared)/hooks/useToggleDarkModel";


export default function Home() {
  const dispatch = useAppDispatch();
  const { handlerTheme } = useToggleDarkMode();

  useEffect(() => {
    handlerTheme();
    controller.getCategories(dispatch);
  });

  return (
    <div className="pt-28 overflow-x-hidden">
      <Header />
      <Incentives />
      <Cases />
      <Features />
      <CallToAction />
      <LogoCloud />
      <BlogList />
    </div>
  );
}
