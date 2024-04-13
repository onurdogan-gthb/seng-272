import React, { useState } from "react";

const Welcome = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index: any) => {
    if (openAccordion === index) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(index);
    }
  };

  return (
    <>
      <div className="m-6">
        <div className="p-2 sm:p-20 ">
          <h1 className="mt-5 mb-8 lg:mt-0 lg:mb-14 text-center text-3xl sm:text-5xl font-bold">
            Create Your Professional Email Signature
          </h1>
          <p className="mb-8 text-center text-lg sm:text-xl">
            Upgrade your email signature to a professional look without email
            deliverability issues.
          </p>
        </div>

        <div className="max-w-3xl min-h-screen mx-auto bg-window">
          <p className="mb-8 p-2 text-center text-lg sm:text-2xl font-semibold">
            How to create an email signature?
          </p>

          <div
            onClick={() => toggleAccordion(1)}
            className={`flex items-center justify-between w-full p-2 bg-window rounded cursor-pointer ${
              openAccordion === 1
                ? "bg-window text-sky-blue"
                : "bg-window text-default"
            }`}
          >
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-8 h-8 ml-2 ${
                  openAccordion === 1 ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <p className="text-xl">Choose a Template</p>
            </div>
          </div>
          {openAccordion === 1 && (
            <div className="w-full pb-3 pl-3 bg-window">
              <p className="ml-12 text-default">
                Choose a template and start filling in your information
              </p>
            </div>
          )}
          <hr className="border-b-1 border-fade" />
          <div
            onClick={() => toggleAccordion(2)}
            className={`flex items-center justify-between w-full p-2 bg-window rounded cursor-pointer ${
              openAccordion === 2
                ? "bg-window text-sky-blue"
                : "bg-window text-default"
            }`}
          >
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-8 w-8 ml-2 ${
                  openAccordion === 2 ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <p className="text-xl">Customize the Style</p>
            </div>
          </div>
          {openAccordion === 2 && (
            <div className="w-full pb-3 pl-3 bg-window">
              <p className="ml-12 text-default">
                Customize the style – Pick the font, colors, and adjust the size
              </p>
            </div>
          )}
          <hr className="border-b-1 border-fade" />
          <div
            onClick={() => toggleAccordion(3)}
            className={`flex items-center justify-between w-full p-2 bg-window rounded cursor-pointer ${
              openAccordion === 3
                ? "bg-window text-sky-blue"
                : "bg-window text-default"
            }`}
          >
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-8 h-8 ml-2 ${
                  openAccordion === 3 ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <p className="text-xl">Settle on the Design</p>
            </div>
          </div>
          {openAccordion === 3 && (
            <div className="w-full pb-3 pl-3 bg-window">
              <p className="ml-12 text-default">
                Create a professional email signature that enhances your image
                and does not impact your email deliverability
              </p>
            </div>
          )}
          <hr className="border-b-1 border-fade" />
          <div
            onClick={() => toggleAccordion(4)}
            className={`flex items-center justify-between w-full p-2 bg-window rounded cursor-pointer ${
              openAccordion === 4
                ? "bg-window text-sky-blue"
                : "bg-window text-default"
            }`}
          >
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-8 h-8 ml-2 ${
                  openAccordion === 4 ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <p className="text-xl">Integrate with Your Email</p>
            </div>
          </div>
          {openAccordion === 4 && (
            <div className="w-full bg-window pb-3 pl-3">
              <p className="ml-12 text-default">
                Copy-paste your finished signature to your preferred email
                clients
              </p>
            </div>
          )}
          <hr className="border-b-1 border-fade" />
          <div
            onClick={() => toggleAccordion(5)}
            className={`flex items-center justify-between w-full p-2 bg-window rounded cursor-pointer ${
              openAccordion === 5
                ? "bg-window text-sky-blue"
                : "bg-window text-default"
            }`}
          >
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-8 h-8 ml-2 ${
                  openAccordion === 5 ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <p className="text-xl ">Have Your Email Signature Ready?</p>
            </div>
          </div>
          {openAccordion === 5 && (
            <div className="w-full pb-3 pl-3 bg-window">
              <p className="ml-12 text-default">Excellent!</p>
            </div>
          )}
          <hr className="border-b-1 border-fade" />
        </div>
        <div className="text-center">
          <h1 className="text-xl font-bold">Contact Me</h1>
          <p>-</p>
          <p>Onur Doğan</p>
          <p>c2028008@student.cankaya.edu.tr</p>
        </div>
      </div>
    </>
  );
};

export default Welcome;
