import { Link } from "react-router-dom";
 
export default function AboutUs() {
  return (
    <>
      <section id="AboutUs" className="coverText--about">
        <div className="textContainer--about">
          <p data-text="About Us">About Us</p>
          <p className="text-center mx-auto w-1/2 text-base pt-8 mt-0">
            As an avid coffee lover, we often face a common issue: spillage. Drinks always seem to find its way out, and splash sticks are only a temporary solution. <br />
            <br /> 
            Driven by the idea of having a sliding piece that could seamlessly cover the sip hole, Team Slid embarked on a journey back in 2015, became fully patented in the U.S., to get into production. <br /><br /> <span>Today, we're thrilled to
            introduce our innovative solution to coffee enthusiasts everywhere.
            Experience the future of spill-free sipping.</span> <Link to="/customize"><span className="inline-block text-xl text-blue-900 font-bold underline underline-offset-8 text-shadow-text hover:text-blue-800 transition transform hover:scale-105">Try Slid!</span></Link>
          </p>
        </div>
      </section>
      <ol class="flex flex-row items-center justify-center py-40 px-60">
        <li class="relative mb-6 sm:mb-0">
          <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg
                class="w-6 h-6 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div class="mt-3 sm:pr-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Initial Prototype
            </h3>
            <time class="block mb-2 text-base font-normal leading-none text-gray-400 dark:text-gray-500">
              2015
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              First Slid prototype created as a spill-proof solution that can
              substitute splash sticks.
            </p>
          </div>
        </li>
        <li class="relative mb-6 sm:mb-0">
          <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg
                class="w-6 h-6 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div class="mt-3 sm:pr-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Patent & Investment
            </h3>
            <time class="block mb-2 text-base font-normal leading-none text-gray-400 dark:text-gray-500">
              2016
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              Slid began patent process in U.S., Korea, China and India in May
              2016 and started raising funds.
            </p>
          </div>
        </li>
        <li class="relative mb-6 sm:mb-0">
          <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg
                class="w-6 h-6 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div class="mt-3 sm:pr-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Factory Production
            </h3>
            <time class="block mb-2 text-base font-normal leading-none text-gray-400 dark:text-gray-500">
              2017
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              Slid finalizes design and initiates production at factories,
              continously making enhancements to achieve 100% spill-proof.
            </p>
          </div>
        </li>
        <li class="relative mb-6 sm:mb-0">
          <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg
                class="w-6 h-6 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div class="mt-3 sm:pr-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              U.S. Patent Granted
            </h3>
            <time class="block mb-2 text-base font-normal leading-none text-gray-400 dark:text-gray-500">
              2020
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              United States Patent and Trademark Office(USPTO) grants patent
              rights to Slid.
            </p>
          </div>
        </li>
      </ol>
    </>
  );
}
