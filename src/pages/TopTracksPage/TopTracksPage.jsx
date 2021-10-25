import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTracks } from '../../api';
import './TopTracksPage.scss';

const TopTracksPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTracks());
  }, []);

  const {tracks, loading} = useSelector(state => state.tracks);

  
  return (
    <div className="topTracksPage">
      <div className="header">
        <h1>Top tracks</h1>
        <Link to={`/search`}>
          <h1>Search</h1>
        </Link>
      </div>
      {!loading && tracks.map(item => (
        <TrackDetails key={item.url} track={item} /> 
      ))}
    </div>
  );
}

const TrackDetails = ({ track: { name, artist, image: images = [] } = {} }) => {
  const image = images.find(img => img.size === 'large');
  
  return (
    <article className="track-container">
      <div>
        <img src={image['#text']}/>
      </div>

      <section>
        <h3>{name}</h3>

        <div>
          <Link to={`/artist/${artist.name}`}>
            {artist.name}
          </Link>
        </div>
        
        <div>
          <a href={artist.url} style={{color: 'white'}} class="button">Ссылка на исполнителя</a>
        </div>
      </section>
    </article>
  );
};

export default TopTracksPage;