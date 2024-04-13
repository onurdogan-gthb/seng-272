import clsx from "clsx";

import Signature from "./Signature";

const Preview = () => {
  return (
    <div className="w-full max-sm:pb-8 border-2 rounded-lg border-highlight">
      <div className="flex w-full h-7 rounded-lg gap-3 bg-gray-100">
        <div className="w-3 h-3 rounded-full ml-3 mt-2 bg-[#FD4646]"></div>
        <div className="w-3 h-3 rounded-full mt-2 bg-[#FEB024]"></div>
        <div className="w-3 h-3 rounded-full mt-2 bg-[#2AC131]"></div>
      </div>

      <div className="text-default">
        <div className={clsx("py-2 pl-4 border-t-2 border-gray-300")}>
          <span className={clsx("text-fade")}>Send from:</span>{" "}
          c202028008@student.cankaya.edu.tr - Onur Doğan
        </div>
        <div className={clsx("py-2 pl-4 border-y-2 border-gray-300")}>
          <span className={clsx("text-fade")}>Subject:</span> Email Signatures
        </div>
      </div>

      <div className="m-5">
        <div>{"Hey,"}</div>
        <div>Want to stop signing your emails like a boomer?</div>
        <span>- - -</span>
      </div>

      <div className="p-4">
        <div className="max-sm:overflow-x-scroll max-sm:py-6">
          <Signature />
        </div>
      </div>
    </div>
  );
};

export { Preview };
