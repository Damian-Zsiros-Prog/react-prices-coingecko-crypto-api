import { BrowserRouter, Switch, Route } from "react-router-dom"
import { useState } from "react"

import "materialize-css/dist/css/materialize.min.css"
import "materialize-css/dist/js/materialize.min.js"
import "./App.css"

import TableCoins from "./components/TableCoins/TableCoins"

function App() {
    const [coinsPerPage, setcoinsPerPage] = useState(10)
    const [searchData, setsearchData] = useState("")
    const [desc, setDesc] = useState(true)
    const [pageActual, setPageActual] = useState(1)
    return (
        <BrowserRouter>
            <div className="App container">
                <div className="row">
                    <Switch>
                        <Route path="/">
                            <div className="row">
                                <div className="input-field col s3">
                                    <select
                                        value={coinsPerPage}
                                        onChange={(e) => {
                                            setcoinsPerPage(e.target.value)
                                        }}
                                        className="browser-default"
                                    >
                                        <option value="" disabled selected>
                                            Escoge la cantidad de monedas por
                                            pagina
                                        </option>
                                        <option value="10"> 10</option>
                                        <option value="50"> 50</option>
                                        <option value="100"> 100</option>
                                        <option value="250"> 250</option>
                                    </select>
                                </div>
                                <div class="input-field col s6">
                                    <input
                                        placeholder="Ingrese el nombre o simbolo de la moneda"
                                        id="searchData"
                                        type="text"
                                        class="validate"
                                        onChange={(e) =>
                                            setsearchData(e.target.value)
                                        }
                                    />
                                    <label for="searchData">Buscar</label>
                                </div>
                                <div className="row">
                                    <div class="input-field col s3">
                                        <label>
                                            <input
                                                id="indeterminate-checkbox"
                                                type="checkbox"
                                                defaultChecked={desc}
                                                onChange={(e) =>
                                                    setDesc(e.target.checked)
                                                }
                                            />
                                            <span>Descendente</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col s12">
                                <TableCoins
                                    coinsPerPage={coinsPerPage}
                                    searchData={searchData}
                                    desc={desc}
                                    pageActual={pageActual}
                                />
                            </div>
                            <div className="col s12">
                                <ul class="pagination">
                                    <li class="waves-effect">
                                        <button
                                            disabled={pageActual - 1 <= 0}
                                            onClick={() =>
                                                setPageActual(
                                                    pageActual - 1 > 0
                                                        ? pageActual - 1
                                                        : pageActual,
                                                )
                                            }
                                        >
                                            Anterior pagina
                                        </button>
                                    </li>
                                    <li class="waves-effect">
                                        <button
                                            onClick={() =>
                                                setPageActual(pageActual + 1)
                                            }
                                        >
                                            Siguiente pagina
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </Route>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
