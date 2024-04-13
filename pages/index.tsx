import Head from "next/head";
import clsx from "clsx";

import Header from "@/components/Header";
import Welcome from "@/components/Welcome";
import Step from "@/components/Step";
import { useStepStore } from "@/store/stepStore";
import Template from "@/components/Template";
import Info from "@/components/Info";
import Customization from "@/components/Customization";
import { Preview } from "@/components/Preview";

export default function Home() {
  const { step } = useStepStore();

  return (
    <>
      <Head>
        <title>OpenSignature</title>
      </Head>

      <div>
        <Header />
      </div>

      <div className="flex flex-col xl:flex-row w-full bg-background">
        {/*   L E F T   C O L U M N   /   T O P   R O W   */}
        <aside className="xl:block xl:sticky xl:basis-1/12 xl:top-8 xl:h-screen bg-window border-gray-400 border-b-2">
          <div className=" flex flex-row xl:flex-col xl:grid justify-items-end max-xl:justify-center gap-2 md:gap-6">
            <Step />
          </div>
        </aside>

        {/*   M I D D L E   C O L U M N   /   R O W   */}
        <main
          className={clsx(
            "max-h-screen overflow-y-auto bg-window border-l-2 border-gray-400",
            step === 0 ? "xl:basis-11/12" : "xl:basis-4/12",
          )}
        >
          {step === 0 && <Welcome />}
          {step === 1 && <Template />}
          {step === 2 && <Info />}
          {step === 3 && <Customization />}
          {step === 4 && (
            <div className="px-5 pt-10">
              <Preview />
            </div>
          )}
        </main>

        {step !== 0 && (
          /*   R I G H T   C O L U M N   /   H I D D E N   */
          <aside className="hidden sticky xl:block basis-7/12 top-8 h-screen p-5 bg-window border-x-2 border-gray-400">
            <div className="p-10">
              <Preview />
            </div>
          </aside>
        )}
      </div>
    </>
  );
}
