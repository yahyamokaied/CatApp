const CatItem = ({ items }) => {

  return (
    <div className="App">
      <h1>Cats Facts</h1>
      {items.map(items => (
        <div>
          <h2 key={items._id} > No. {items._id} -  {items.type === 'cat' ? 'Do you know :' : items.type}</h2>
          <h3 key={items._id} >{items.text}</h3>
          {items && <h3 key={items._id} >{items.text}</h3>}
        </div>
      ))}

    </div>
  );

}

export default CatItem;