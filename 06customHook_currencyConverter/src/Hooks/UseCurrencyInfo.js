import { useState, useEffect } from "react"

function useCurrencyInfo(currency){
    const [Data, setdata] = useState({});
    useEffect(() => {
        const API_Key = "9d73a3aa63e975fb396d9ab1";
        fetch('https://v6.exchangerate-api.com/v6/${API_Key}/latest/${currency}.json')
        .then((res) => res.json())
        .then((res) => setData(res[conversion_rates]))
        console.log(Data)
    }, [currency])
    return Data
}

export default useCurrencyInfo;