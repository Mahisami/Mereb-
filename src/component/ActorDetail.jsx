import React, { useState, useEffect } from 'react';
import '../style/ActorDetail.css';
import axios from 'axios';


const ActorDetail = ({ actor, handleClose }) => {
  const [actorData, setActorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActorData = async () => {
      try {
        const response = await axios.get(actor.url);
        if (!response.data) {
          throw new Error('Failed to fetch actor data');
        }
        setActorData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    if (actor && actor.url) {
      fetchActorData();
    }
  }, [actor]);

  if (!actor) {
    return <div>No actor selected.</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    homeworld,
    films,
    species,
    vehicles,
    starships,
    created,
    edited,
    url,
  } = actorData;

  return (
    <div className="detail2">

      <h2 className='title'> Detail Of The Actor</h2>
      <h2>{name}</h2>
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
      <p>Hair Color: {hair_color}</p>
      <p>Skin Color: {skin_color}</p>
      <p>Eye Color: {eye_color}</p>
      <p>Date of Birth: {birth_year}</p>
      <p>Gender: {gender}</p>
      <p>Homeworld: {homeworld}</p>
      <p>Films:</p>
      <ul>
        {films.map((film, index) => (
          <li key={index}>{film}</li>
        ))}
      </ul>
      <p>Species:</p>
      <ul>
        {species.map((specie, index) => (
          <li key={index}>{specie}</li>
        ))}
      </ul>
      <p>Vehicles:</p>
      <ul>
        {vehicles.map((vehicle, index) => (
          <li key={index}>{vehicle}</li>
        ))}
      </ul>
      <p>Starships:</p>
      <ul>
        {starships.map((starship, index) => (
          <li key={index}>{starship}</li>
        ))}
      </ul>
      <p>Created: {created}</p>
      <p>Edited: {edited}</p>
      <p>URL: {url}</p>

      <button onClick={handleClose}>Close</button>
    </div>
  );
};

export default ActorDetail;
