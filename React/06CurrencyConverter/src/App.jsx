import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(from);
    const options = Object.keys(currencyInfo || {});

    const swap = () => {
        setFrom(to);
        setTo(from);
        setConvertedAmount(amount * currencyInfo[from]);
        setAmount(convertedAmount);
    };

    const convert = () => {
        if (currencyInfo[to]) {
            setConvertedAmount(amount * currencyInfo[to]);
        } else {
            alert("Conversion rate not available.");
        }
    };

    return (
        <div className="w-full h-screen flex items-center justify-center  bg-slate-800 p-4">
            <div className="w-full max-w-md bg-white/20 backdrop-blur-md rounded-2xl shadow-xl p-6">
                <h1 className="text-center text-3xl font-semibold text-white mb-6 animate-fadeIn">
                    Currency Converter
                </h1>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                    }}
                >
                    <div className="mb-4">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative flex items-center justify-center my-6">
                        <button
                            type="button"
                            onClick={swap}
                            className="transition-transform duration-300 transform hover:rotate-180 bg-gray-700 text-white rounded-full p-3 shadow-lg"
                        >
                            ⇅ {/* Unicode for swap icon */}
                        </button>
                    </div>
                    <div className="mb-6">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                            className="bg-slate-700"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-200"
                    >
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default App;
