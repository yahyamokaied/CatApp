import './App.css';
import { useEffect, useState } from 'react';
import CatItem from './CatItem';
import CatNames from './CatNames';


function MrChat() {

  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {

    fetchItems();

  }, []);


  const fetchItems = async () => {
    const data = await fetch(
      'https://cat-fact.herokuapp.com/facts'
    );

    const items = await data.json();
    console.log(items);
    setItems(items);
  }

  const btnStyle = {
    width: 250,
    height: 40,
    margin: 5,
    padding: 5,
    textAlign: 'center'
  }


  return (
    <div>
      <input
        style={btnStyle}
        type="text"
        placeholder="Write your favorite cat in black color"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <CatNames search={search} />
      <CatItem items={items} />
    </div>
  );
}

export default MrChat;
