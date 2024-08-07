import { useState } from "react";

function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      className="bg-[#efefef] w-full text-start border border-[#efefef]"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function App() {
  const [clicked1, isClicked1] = useState(false);
  const [clicked2, isClicked2] = useState(false);

  return (
    <>
      <div className="flex items-start flex-col m-6 font-semibold">
        <Button
          onClick={() => {
            isClicked1(!clicked1);
            isClicked2(false);
          }}
        >
          <div className="ml-7">Devtools Tech? 🤔</div>
          {clicked1 === true ? (
            <div className="bg-white p-7">
              The aim with Devtools Tech is to create a platform for Frontend
              Engineers where we all can improve, invest in ourselves, and grow
              by learning from high quality real world programming content. This
              is a platform where you can practice actual interview questions,
              watch courses, read blogs, and keep track of your progress across
              various domains and topics.
            </div>
          ) : (
            ""
          )}
        </Button>
        <Button
          onClick={() => {
            isClicked2(!clicked2);
            isClicked1(false);
          }}
        >
          <div className="ml-7">Is it Free?</div>
          {clicked2 === true ? (
            <div className="bg-white p-7">
              Yes, the platform and YouTube both are completely free!
            </div>
          ) : (
            ""
          )}
        </Button>
      </div>
    </>
  );
}

export default App;
