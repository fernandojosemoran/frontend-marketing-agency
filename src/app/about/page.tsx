"use client";

import {
  AboutFeatures,
  AboutHeader,
  AboutTeam,
  Clients,
} from "./(components)";

import { useEffect } from "react";

import Link from "next/link";
import TestStats from "./(components)/test-stats/TestStats";
import useToggleDarkMode from "../(shared)/hooks/useToggleDarkModel";



export default function AboutPage() {
  const { handlerTheme } = useToggleDarkMode();

  useEffect(() => handlerTheme());

  return (
    <div className="pt-28">
      <AboutHeader />
      <TestStats />
      <Clients />
      <AboutFeatures />
      <AboutTeam />
      <div className="bg-lm-primary dark:bg-dm-third">
        <div className="mx-12 max-w-full py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-lm-third-text dark:text-dm-primary-text sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-indigo-600 dark:text-indigo-400">
              Start your free trial today.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
              >
                Get started
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
