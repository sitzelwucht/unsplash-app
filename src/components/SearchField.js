import React, { useState } from "react";
import ImageBox from './ImageBox';
import Placeholder from './Placeholder';
import axios from 'axios';

const SearchField = () => {

    const [results, setResults] = useState();
    const [active, setActive] = useState(false);
    const [queryName, setQueryName] = useState(null);

    const getImages = (e) => {
        e.preventDefault();
        let query = e.target.input.value;
        setQueryName(query);
        axios.get(
            `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_ACCESS_TOKEN}&query=${query}&per_page=30`)
            .then(response => setResults(response.data.results))
            .catch(err => console.log(err))
        setActive(true);
    }

    return (
        <>
            <div className={active ? "search-container-sm" : "search-container-lg"}>
                <form onSubmit={getImages}>
                    <input name="input" type="text" placeholder="search images..." />
                    <button>Search!</button>
                </form>
            </div>
            <div className={active && 'image-grid'}>

            { queryName && !results && <Placeholder results searchTerm={queryName} /> } 

            { results && results.map((item, i) => {
                return <ImageBox key={i} 
                    imgUrl={item.urls.regular}
                    altDesc={item.alt_description}
                    download={item.links.download}
                    page={item.links.html}
                />
            })}

            { results && !results.length && <Placeholder searchTerm={queryName}/>} 

            </div>
        </>
    )
}

export default SearchField;