import { useEffect, useState } from 'react';

const CatNames = ({ search }) => {

    const MyCatColor = {
        color: 'black',
        fontSize: 80
    }

    const cats = () => {
        if (search) return <p>cat</p>
        else return <p>no cat</p>
    }

    return (
        <div className="App">
            <h1>My favorite Cats :{search ? <span style={MyCatColor}>{search}</span> : <span> No Cat Selected</span>}</h1>
            {search && <h1>Cat: {search} </h1>}
            {cats}
        </div>
    );
}

export default CatNames;