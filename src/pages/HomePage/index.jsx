import { useEffect, useState } from 'react';
import './style.css';
import { Joke } from '../../Joke/Joke';

export const HomePage = () => {
  
  const [jokes, setJokes] = useState([]);



  useEffect(() => {
    const fetchJokesData = async () => {
      const response = await fetch('http://localhost:4000/api/jokes');
      const json = await response.json();
      setJokes(json.data);
    }; 
    
    fetchJokesData();

  }, [] )

  if (jokes) {

    return (
      <div className="container">
        {jokes.map((joke) => (
          <Joke
            key={joke.id}
            likes={joke.likes}
            dislikes={joke.dislikes}
            userAvatar={joke.avatar}
            userName={joke.name}
            text={joke.text}
          />
        ))
        }


      </div>

    );
  } else {
    <p>Načítám data...</p>
  }

};
