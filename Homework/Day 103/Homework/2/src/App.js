
import React from 'react';

const App = () => {
  return (
    <div style={styles.container}>
      {/* 2 */}
      <h1>Presentation about guinea pig</h1>
      <p>The guinea pig (Cavia porcellus) is a small rodent native to South America,
         where it was domesticated by the Incas. These herbivorous animals typically live 4–8 years,
          weighing between 700–1200 grams and measuring 20–30 cm in length. Guinea pigs are gentle, social creatures,
           which makes them excellent pets for families and children. They thrive best in pairs or small groups, as they feel safer with companions.
           Their diet must include plenty of hay (the main source of fiber), pellets specifically designed for guinea pigs, fresh vegetables like lettuce and bell peppers, and a reliable source of vitamin C since they cannot produce it naturally. Providing a spacious cage with a solid floor, soft bedding, and hiding spots such as small houses or tunnels is essential for their well-being. Regular cleaning of the habitat keeps them healthy, and daily time outside the cage allows them to exercise and explore. Toys, tunnels,
          and other enrichments are also recommended to keep them mentally stimulated.</p>
          
          
      <button style={styles.button}>More Presentations</button>
    </div>
    
  );
};

const styles = {

  container: {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#203223',
    color: 'white',
    minHeight: '100vh',
  },
  button: {
    backgroundColor: '#61dafb',
    color: 'black',
    border: 'none',
    padding: '15px 30px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default App;
