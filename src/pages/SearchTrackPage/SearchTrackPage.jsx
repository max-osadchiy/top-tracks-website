import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTracks } from '../../api';
import './SearchTrackPage.scss';

const SearchTrackPage = () => {
  const dispatch = useDispatch();

  let {tracks, loading} = useSelector(state => state.tracks);
  
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fetchTracks());
  }, []);

  if (search.length > 0) {
    tracks = tracks.filter(i => {
      return i.name.match(search);
    });
  }

  
  return (
    <div className="searchTrackPage">
      <h1>Search track</h1>
      <input
        value={search}
        placeholder={'Search'}
        onChange={(e) => setSearch(e.target.value)}
      />
      {!loading && tracks.map(item => (
        <TrackDetails key={item.url} track={item} /> 
      ))}
    </div>
  );
}

const TrackDetails = ({ track: { name, artist } = {} }) => (
  <article className="track-container">
    <h3>{name}</h3>

    <div>
      <Link to={`/artist/${artist.name}`}>
        {artist.name}
      </Link>
    </div>
  </article>
);

export default SearchTrackPage;