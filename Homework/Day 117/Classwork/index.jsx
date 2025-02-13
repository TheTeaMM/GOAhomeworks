import React, { useState, useEffect } from 'react';

export default function App() {
  const [api, setApi] = useState(null); 
  const [update, setUpdate] = useState(1);
  const [updateTitle, setUpdateTitle] = useState('todos'); 

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${updateTitle}/${update}`)
      .then((response) => response.json())
      .then((json) => setApi(json)) 
      .catch((error) => console.error('Error fetching data:', error));
  }, [update, updateTitle]);

  return (
    <div className="container">
      <h1>API Data Viewer</h1>
      <ul>
        <li onClick={() => setUpdate(1)}>1 title</li>
        <li onClick={() => setUpdate(2)}>2 title</li>
        <li onClick={() => setUpdate(3)}>3 title</li>
        <li onClick={() => setUpdate(4)}>4 title</li>
        <li onClick={() => setUpdate(5)}>5 title</li>
      </ul>

      
      <ul>
        <li onClick={() => setUpdateTitle('comments')}>Comments</li>
        <li onClick={() => setUpdateTitle('albums')}>Albums</li>
        <li onClick={() => setUpdateTitle('todos')}>Todos</li>
      </ul>

      
      <div className="api-result">
        {api ? (
          <div>
            <h3>Data for {updateTitle} with ID {update}</h3>
            <pre>{JSON.stringify(api, null, 2)}</pre> {}
          </div>
        ) : (
          <p>Loading...</p> 
        )}
      </div>
    </div>
  );
}
