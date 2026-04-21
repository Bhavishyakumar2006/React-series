import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numAllowed, setnumAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");

  // Generating the password
  const passwordGen = useCallback(() => {
    let pass = "";
    let alphabets = "ABCDEFGHIJKLMNOPQRTUVWXYZabcdefghijklmnopqrtuvwxyz";
    if (numAllowed) alphabets += "0123456789";
    if (charAllowed) alphabets += "~@#$%^&*()?;:";

    for (let i = 0; i < length; i++) {
      pass += alphabets[Math.floor(Math.random() * alphabets.length)];
    }
    setpassword(pass);
  }, [length, numAllowed, charAllowed, setpassword]); // this dependancies is for optimization

  // useRef hook
  let passwordRef = useRef(null);

  const copyPasswordToClipBoard = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  };

  // to render the password in UI
  useEffect(() => {
    passwordGen();
  }, [length, numAllowed, charAllowed,passwordGen]); // this dependancies is for re run the function

  return (
    <>
      <div className="  p-3 rounded-2xl mx-auto mt-3 bg-slate-700 max-w-sm shadow-md text-orange-500">
        <h1 className="text-2xl text-center mb-2 ">Password Generator</h1>
        <input // password box
          type="text"
          placeholder="Password"
          defaultValue={password}
          max={99}
          min={0}
          spellCheck={false}
          ref={passwordRef}
          className="bg-white rounded-1-md w-2xs ml-2"
        />
        <button // copy button
          className="bg-blue-600 text-center rounded-r-md w-13 active:bg-blue-300"
          onClick={copyPasswordToClipBoard}
        >
          copy
        </button>
        <input // password length
          type="range"
          max={99}
          min={8}
          className="mt-3 w-20 h-1.5 ml-2 "
          onChange={(e) => {
            setlength(e.target.value);
          }}
        />
        <label className="text-sm mt-3 ml-1">Length ({length})</label>
        <input
          type="checkbox" 
          className="ml-1.5 mt-3 w-3 h-2.5"
          onClick={() => setnumAllowed((prev) => !prev)}
        />
        <label className="text-sm mt-3 ml-0.5">Number</label>
        <input
          type="checkbox"
          className="ml-1.5 mt-3 w-3 h-2.5"
          onClick={() => setcharAllowed((prev) => !prev)}
        />
        <label className="text-sm mt-3 ml-0.5">Character</label>
      </div>
    </>
  );
};

export default App;
