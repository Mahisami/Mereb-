import React, { useState, useEffect } from 'react';
import ActorDetail from './ActorDetail';
import "../style/ActorCard.css";

const ActorCard = () => {
  const [actors, setActors] = useState([]);
  const [selectedActor, setSelectedActor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showComponent, setShowComponent] = useState(true);

  useEffect(() => {
    fetch('https://swapi.dev/api/people')
      .then(response => response.json())
      .then(data => {
        setActors(data.results);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleDetailClick = (actor) => {
    setSelectedActor(actor);
    setShowComponent(false);
  };

  if (loading) {
    return <h1><center>Loading...</center></h1>;
  }

  if (error) {
    return <h1><center>Error: {error}</center></h1>;
  }

  const Card = ({ actor, onDetailClick }) => {
    if (!actor || !showComponent) {
      return null;
    }
    return (
      <div className="actorCard">
        <h2>{actor.name}</h2>
        <p>Height: {actor.height}</p>
        <p>Birth Year: {actor.birth_year}</p>
        <button id="button" onClick={() => onDetailClick(actor)}>Detail</button>
      </div>
    );
  };

  return (
    <div>
      {!selectedActor && <h1 className='title'>List Of Film Actors</h1>}
      
      <div className="actorList">
        {actors.map(actor => (
          <Card
            key={actor.name}
            actor={actor}
            onDetailClick={handleDetailClick}
          />
        ))}
      </div>
      
      {selectedActor && <ActorDetail actor={selectedActor} />}
    </div>
  );
};
export default ActorCard;
