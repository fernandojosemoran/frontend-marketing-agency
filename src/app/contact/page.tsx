"use client";

import { toggleDarkMode } from "@/infrastructure/helpers/toggle-dark-mode";
import { useEffect, useState } from "react";

export default function ContactPage() {
  useEffect(() => {
    toggleDarkMode();
  }, []);

  const [agreed, setAgreed] = useState<boolean>(false);

  useEffect(() => {
    toggleDarkMode();
  }, []);

  return (
    <div className="pt-28">
    <div className="isolate bg-lm-primary text-dm-primary dark:text-lm-primary dark:bg-dm-primary px-6 py-24 sm:py-32 lg:px-8 relative">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight  text-dm-third dark:text-lm-primary sm:text-5xl">
          Contact sales
        </h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-lm-secondary">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20 bg-lm-secondary dark:bg-dm-secondary py-16 px-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold text-dm-third dark:text-lm-primary">
              First name
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="mt-2.5 block w-full rounded-md bg-lm-primary text-dm-primary dark:text-lm-primary dark:bg-dm-secondary px-3.5 py-2 text-base outline outline-1 outline-dm-primary dark:outline-indigo-500 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold text-dm-third dark:text-lm-primary">
              Last name
            </label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              className="mt-2.5 block w-full rounded-md bg-lm-primary text-dm-primary dark:text-lm-primary dark:bg-dm-secondary px-3.5 py-2 text-base outline outline-1 outline-dm-primary dark:outline-indigo-500 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-500"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold text-dm-third dark:text-lm-primary">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              className="mt-2.5 block w-full rounded-md bg-lm-primary text-dm-primary dark:text-lm-primary dark:bg-dm-secondary px-3.5 py-2 text-base outline outline-1 outline-dm-primary dark:outline-indigo-500 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-500"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold text-dm-third dark:text-lm-primary">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              className="mt-2.5 block w-full rounded-md bg-lm-primary text-dm-primary dark:text-lm-primary dark:bg-dm-secondary px-3.5 py-2 text-base outline outline-1 outline-dm-primary dark:outline-indigo-500 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-500"
            ></textarea>
          </div>
          <div className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <button
                type="button"
                className={`bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-gray-900/5 transition-colors duration-200 ease-in-out ring-inset focus-visible:outline-2 focus-visible:outline-indigo-500 ${
                  agreed ? "bg-indigo-600" : "bg-gray-200"
                }`}
                role="switch"
                aria-checked={agreed}
                onClick={() => setAgreed(!agreed)}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={`transition duration-200 ease-in-out transform rounded-full bg-lm-primary dark:bg-dm-secondary dark:text-lm-secondary ring-1 shadow-xs ring-gray-900/5 size-4 ${
                    agreed ? "translate-x-3.5" : "translate-x-0"
                  }`}
                ></span>
              </button>
            </div>
            <label
              className="text-sm text-gray-600 dark:text-dm-secondary-text cursor-pointer"
              onClick={() => setAgreed(!agreed)}
            >
              By selecting this, you agree to our
              <a href="#" className="font-semibold text-indigo-600"> privacy policy</a>.
            </label>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-indigo-500"
          >
            Let&apos;s talk
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

