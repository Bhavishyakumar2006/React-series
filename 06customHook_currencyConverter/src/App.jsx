import { useState } from "react";
import useCurrencyInfo from "./Hooks/UseCurrencyInfo";
import InputBox from "./Components/InputBox";
import "./App.css";

function App() {
  const [amount, setamount] = useState(0);
  const [currencyOptions, setcurrencyOptions] = useState("");
  const [from, setfrom] = useState("usd");
  const [To, setTo] = useState("inr");
  let currencyInfo = useCurrencyInfo(from);
  setcurrencyOptions(Object.keys(currencyInfo));

  return (
    <>
    
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox label="From" selectCurrency={from} />
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox label="To" selectCurrency="inr" />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert {from.toUpperCase()} to {To.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
