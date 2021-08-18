import React from "react"

import { useGetAllCoins } from "../../hooks/useGetAllCoins"

const TableCoins = ({ coinsPerPage, searchData, desc, pageActual }) => {
    const { coins } = useGetAllCoins(coinsPerPage, pageActual)
    var filteredCoins =
        searchData && searchData !== ""
            ? coins.filter(
                  (coin) =>
                      coin.name
                          .toLowerCase()
                          .includes(searchData.toLowerCase()) ||
                      coin.symbol
                          .toLowerCase()
                          .includes(searchData.toLowerCase()),
              )
            : coins
    filteredCoins = desc
        ? filteredCoins.sort((a, b) => a.market_cap_rank - b.market_cap_rank)
        : filteredCoins.sort((a, b) => b.market_cap_rank - a.market_cap_rank)

    return (
        <table className="responsive-table striped highlight">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Simbolo</th>
                    <th>Precio</th>
                    <th>1h</th>
                    <th>Volumen en 24h</th>
                </tr>
            </thead>
            <tbody>
                {filteredCoins.map((coin, index) => (
                    <tr key={coin.market_cap_rank}>
                        <td>{coin.market_cap_rank}</td>
                        <td
                            style={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <a
                                href={
                                    "https://www.coingecko.com/es/monedas/" +
                                    coin.id
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={coin.image}
                                    alt=""
                                    className="img img-fluid"
                                    style={{
                                        maxWidth: "30px",
                                        marginRight: "15px",
                                    }}
                                />
                                {coin.name}
                            </a>
                        </td>
                        <td>{coin.symbol.toUpperCase()}</td>
                        <td>{coin.current_price} USD</td>
                        <td
                            className={
                                coin.price_change_percentage_24h > 0
                                    ? "green-text"
                                    : "red-text"
                            }
                        >
                            {parseFloat(
                                coin.price_change_percentage_24h,
                            ).toFixed(1) + "%"}
                        </td>
                        <td
                            className={
                                coin.total_volume > 0
                                    ? "green-text"
                                    : "red-text"
                            }
                        >
                            {coin.total_volume}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableCoins
