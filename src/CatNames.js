import { useEffect, useState } from 'react';

const CatNames = ({ search }) => {

    const MyCatColor = {
        color: 'black',
        fontSize: 80
    }

    return (
        <div className="App">
            <h1>My favorite Cats :{search ? <span style={MyCatColor}>{search}</span> : <span> No Cat Selected</span>}</h1>
        </div>
    );
}

export default CatNames;