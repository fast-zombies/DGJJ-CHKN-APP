import axios from 'axios';
import { default as React, default as React, useEffect, useState } from 'react';

const HomePage = () => {
  const [chickens, setChickens] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [finishedRating, setFinishedRating] = useState(false);

  useEffect(() => {
    // Fetch chickens from API (replace with your API endpoint)
    axios.get('/api/chickens')
      .then(response => {
        setChickens(response.data);
      })
      .catch(error => {
        console.error('Error fetching chickens:', error);
      });
  }, []);

  const handleUpdoot = () => {
    // Move to the next chicken
    if (currentIndex + 1 < chickens.length) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    } else {
      // All chickens have been rated
      setFinishedRating(true);
    }
  };

  const handleDowndoot = () => {
    // Move to the next chicken
    if (currentIndex + 1 < chickens.length) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    } else {
      // All chickens have been rated
      setFinishedRating(true);
    }
  };

  return (
    <div>
      {finishedRating ? (
        <p>No chickens left to rate!</p>
      ) : (
        <div>
          <h2>Rate the Chicken</h2>
          <p>Chicken {currentIndex + 1} of {chickens.length}</p>
          <div>
            <p>{chickens[currentIndex]}</p>
            <button onClick={handleUpdoot}>Updoot</button>
            <button onClick={handleDowndoot}>Downdoot</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;

