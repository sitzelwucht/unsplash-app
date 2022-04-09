import React from 'react';

const Placeholder = (props) => {

    return (
        <div className="placeholder">
            {
                props.results 
                ? `Looking for ${props.searchTerm}...` 
                : `No results were found for ${props.searchTerm} :(`
            }
        </div>
    )
}

export default Placeholder;