"use client";

import { isDarkTheme, toggleDarkMode } from "@/infrastructure/helpers/toggle-dark-mode";
import { useEffect } from "react";
import {
  CareersFeatures,
  CareersHeader,
  PositionsList,
  Testimonial,
} from "./components";

import TupleLogoIcon from "../shared/icons/tailwind-logos/TupleLogoIcon";
import TransistorLogoIcon from "../shared/icons/tailwind-logos/TransistorLogoIcon";
import StatamicLogoIcon from "../shared/icons/tailwind-logos/StatamicLogoIcon";
import SavvycalLogoIcon from "../shared/icons/tailwind-logos/SavvycalLogoIcon";
import ReformLogoIcon from "../shared/icons/tailwind-logos/ReformLogoIcon";

export default function CareersPage() {
  useEffect(() => toggleDarkMode());

  const isDarkMode: boolean  = isDarkTheme;

  return (
    <>
      <div className="pt-28 bg-lm-primary dark:bg-dm-primary">
        <CareersHeader />
        <Testimonial />
        <div className="">
          <div className=" mx-auto lg:mx-12 pt-24 pb-12">
            <h3 className="lg:text-5xl text-3xl px-4 font-bold leading-6 text-lm-third-text dark:text-dm-primary-text">
              Work with top notch companies
            </h3>
          </div>
          <div className="mx-auto lg:mx-12 max-w-full py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-6 lg:grid-cols-5">
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <TupleLogoIcon fill={isDarkMode ? "#eee" : "#000"} width={ 100 } height={50}/>
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <TransistorLogoIcon fill={isDarkMode ? "#eee" : "#000"} width={ 150 } height={50}/>
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <StatamicLogoIcon fill={isDarkMode ? "#eee" : "#000"}  width={ 150 } height={50}/>
              </div>
              <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                <SavvycalLogoIcon fill={isDarkMode ? "#eee" : "#000"} width={ 100 } height={50}/>
              </div>
              <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                <ReformLogoIcon fill={isDarkMode ? "#eee" : "#000"} width={ 200 }/>
              </div>
              
            </div>
          </div>
        </div>
        <CareersFeatures />
        <CareersFeatures />
        <PositionsList />
      </div>
    </>
  );
}


