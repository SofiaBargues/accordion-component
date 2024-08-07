import { useState } from "react";

function App() {
  const [clicked1, isClicked1] = useState(false);
  const [clicked2, isClicked2] = useState(false);

  return (
    <>
      <div className="flex justify-center h-screen flex-col ">
        <button
          className="m-6 border-black border"
          onClick={() => isClicked1(!clicked1)}
          id="1"
        >
          <div>Devtools Tech? 🤔</div>
        </button>
        {clicked1 === true ? (
          <div>
            The aim with Devtools Tech is to create a platform for Frontend
            Engineers where we all can improve, invest in ourselves, and grow by
            learning from high quality real world programming content. This is a
            platform where you can practice actual interview questions, watch
            courses, read blogs, and keep track of your progress across various
            domains and topics.
          </div>
        ) : (
          ""
        )}
        <button
          className="m-6 border-black border"
          onClick={() => isClicked2(!clicked2)}
          id="2"
        >
          <div>Is it Free?</div>
        </button>
        {clicked2 === true ? (
          <div>Yes, the platform and YouTube both are completely free!</div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default App;
