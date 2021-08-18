import axios from "axios"
import { useEffect, useState } from "react"

export const useGetAllCoins = (coinsPerPage, pageActual) => {
    const [coins, setCoins] = useState([])
    useEffect(() => {
        const getCoins = async () => {
            const urlAPI =
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=" +
                coinsPerPage +
                "&page=" +
                pageActual +
                "&sparkline=false"
            const res = await axios.get(urlAPI)
            const coinsDataAPI = await res.data
            setCoins(coinsDataAPI)
        }
        getCoins()
    }, [coinsPerPage, pageActual])
    return {
        coins,
    }
}
