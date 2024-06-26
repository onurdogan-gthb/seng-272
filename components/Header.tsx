import React, { useState } from "react";
import { useTemplateStore } from "@/store/templateStore";
import Login from "./Login";

const Header = () => {
  const { template } = useTemplateStore();
  const [showMessage, setShowMessage] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  const copyToClipboard = () => {
    let copyText = document.querySelector(".signaturetrying");

    const range = document.createRange();
    if (copyText) {
      range.selectNode(copyText);
    }

    const windowSelection = window.getSelection();
    if (windowSelection) {
      windowSelection.removeAllRanges();
      windowSelection.addRange(range);
    }
    try {
      let successful = document.execCommand("copy");
      if (successful) {
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 2000);
      }
    } catch (err) {
      console.log("Fail");
    }
  };

  const handleGenerateClick = () => {
    setLoginOpen(true);
  };

  const isDisabled = template.id === "initial";

  return (
    <header className="fixed flex items-center justify-between z-50 top-0 left-0 right-0 p-4 bg-window shadow">
      <button
        className="ml-8 sm:px-4 py-2.5 text-sm font-semibold text-white rounded-md shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background bg-sky-blue hover:bg-sky-blue/75"
        onClick={handleGenerateClick}
        disabled={isDisabled}
      >
        Sign in
      </button>

      {isLoginOpen && (
        <div>
          <Login />
        </div>
      )}

      <div className="flex items-center overflow-hidden">
        <h1 className="ml-32 text-base sm:text-2xl font-semibold text-sky-blue">
          Open
        </h1>
        <h1 className="text-base sm:text-2xl font-semibold text-default">
          Signature✒️
        </h1>
      </div>

      <button
        className={`px-2 sm:px-4 py-2.5 text-sm font-semibold text-white rounded-md shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background ${
          isDisabled
            ? "bg-disabled cursor-not-allowed"
            : "bg-sky-blue hover:bg-sky-blue/75"
        }`}
        onClick={copyToClipboard}
        disabled={isDisabled}
      >
        Copy
      </button>
      {showMessage && <div className="message">Copied!</div>}
    </header>
  );
};

export default Header;
