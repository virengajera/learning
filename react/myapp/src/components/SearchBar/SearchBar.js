import './SearchBar.css'
import { useState, useEffect } from 'react'
import SearcResult from '../SearchResult/SearchResult'



export default function SearchBar() {

    let [historyList, sethistoryList] = useState([]) /* Here default value of historyList is [] (empty array) */
    let [films, setFilms] = useState([])

    function addToSearchHistory(ev) {
        let searchName = document.getElementById('searchName').value
        console.log("Button Clicked")

        //historyList.push("Hello")
        sethistoryList([...historyList, searchName])
        fetchData(searchName)

    }

    function clearSearchHistory() {
        sethistoryList([])
    }

    useEffect(() => {
        console.log("Intial render completed")
        fetchData('films')
    }, [])

    useEffect(() => {
        console.log("Film object getting watched")
    }, [films])


    async function fetchData(type) {
        let url = `https://swapi.dev/api/${type}`
        let res = await fetch(url)

        if (!res.ok) throw new Error(res.statusText);

        let data = await res.json()
        console.log("Data Fetched")
        setFilms(data.results)

    }

    return (
       
            <div className="SearchBar">
                <div>

                    <label>Enter Value</label>
                    <input type="text" onInput={() => { console.log("On Input Event occured") }} id="searchName" />
                    <button onClick={addToSearchHistory}> Search</button>
                    <button onClick={clearSearchHistory}> Clear Search history</button>


                </div>
                <div className="search-history">
                    <ul>
                        {
                            historyList.map((h, idx) => {
                                if (h) {
                                    return <li key={idx}>{h}</li>
                                }
                            })
                        }
                    </ul>
                </div>

                <SearcResult films={films} />

            </div>
      

    )
}