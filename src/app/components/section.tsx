import { ReactElement } from "react";

export const Section = ({
  children,
  fullVh,
  bg,
}: {
  fullVh?: boolean;
  bg?: boolean;
  children: ReactElement;
}) => {
  return (
    <>
      <section
        className={` w-full flex  justify-center items-center relative z-2 ${
          bg ? "bg-blue/10 backdrop-blur-md" : ""
        }
       ${fullVh ? "h-screen" : ""}`}
      >
        <div className="rounded-3xl bg-blue/10 backdrop-blur-sm w-full lg:mx-24 xl:mx-48 p-8 lg:p-16 m-8">
          {children}
        </div>
      </section>
    </>
  );
};
