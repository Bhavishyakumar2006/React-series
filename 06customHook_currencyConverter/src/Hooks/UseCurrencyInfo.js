import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        let api_key = '9d73a3aa63e975fb396d9ab1';
        fetch(`https://v6.exchangerate-api.com/v6/${api_key}/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res["conversion_rates"]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;