"use client";

import LaravelLogoIcon from "@/app/shared/icons/tailwind-logos/LaravelLogoIcon";
import MirageLogoIcon from "@/app/shared/icons/tailwind-logos/MirageLogoIcon";
import StatamicLogoIcon from "@/app/shared/icons/tailwind-logos/StatamicLogoIcon";
import StaticKitLogoIcon from "@/app/shared/icons/tailwind-logos/StaticKit";
import TransistorLogoIcon from "@/app/shared/icons/tailwind-logos/TransistorLogoIcon";
import TupleLogoIcon from "@/app/shared/icons/tailwind-logos/TupleLogoIcon";
import { isDarkTheme } from "@/infrastructure/helpers/toggle-dark-mode";

function Clients() {

  const isDarkMode: boolean = isDarkTheme;

  return (
    <div className="bg-lm-primary dark:bg-dm-primary">
      <div className="mx-auto lg:mx-12 max-w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-lm-third-text dark:text-dm-primary-text sm:text-4xl">
              Used by the world&apos;s most average companies
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-lm-primary-text dark:text-dm-secondary-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue.
            </p>
            <div className="mt-8 sm:flex">
              <div className="rounded-md shadow">
                <a
                  href="/register"
                  className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                >
                  Create Account
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="/contact"
                  className="flex items-center justify-center rounded-md border border-transparent bg-indigo-100 px-5 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            <div className="relative col-span-1 flex justify-center bg-lm-primary dark:bg-dm-primary py-8 px-8">
              <TransistorLogoIcon fill={isDarkMode ? "#ffffff" : "#000"} width={150} height={50} />
            </div>
            <div className="relative col-span-1 flex justify-center bg-lm-primary dark:bg-dm-primary py-8 px-8">
              <MirageLogoIcon fill={isDarkMode ? "#ffffff" : "#000"} width={200} height={50} />
            </div>
            <div className="relative col-span-1 flex justify-center bg-lm-primary dark:bg-dm-primary py-8 px-8">
              <TupleLogoIcon fill={isDarkMode ? "#ffffff" : "#000"} width={200} height={65} />
            </div>
            <div className="relative col-span-1 flex justify-center bg-lm-primary dark:bg-dm-primary py-8 px-8">
              <LaravelLogoIcon fill={isDarkMode ? "#ffffff" : "#000"} width={200} height={50} />
            </div>
            <div className="relative col-span-1 flex justify-center bg-lm-primary dark:bg-dm-primary py-8 px-8">
              <StaticKitLogoIcon fill={isDarkMode ? "#ffffff" : "#000"} width={140} height={50} />
            </div>
            <div className="relative col-span-1 flex justify-center bg-lm-primary dark:bg-dm-primary py-8 px-8">
              <StatamicLogoIcon fill={isDarkMode ? "#ffffff" : "#000"} width={200} height={65} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
