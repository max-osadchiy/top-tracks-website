import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArtist } from '../../api';
import ContentArtist from '../../components/ContentArtist';
import { useParams } from 'react-router-dom';
import './ArtistPage.scss';

const ArtistPage = () => {
  const dispatch = useDispatch();
  const { artistName } = useParams();

  useEffect(() => {
    dispatch(fetchArtist(artistName))
  }, [artistName])


  const {artist, loading} = useSelector(state => state.artist);
  
  return (
    <div className="artistPage">
      {!loading && (
        <>
          <h1>{artist.name}</h1>
          <img src={artist.image[2]['#text']}/>
          <div className="tagsContainer">
            {artist.tags.tag.map((tag, index) => (
              <p key={index} className="tagText">{tag.name}</p>
            ))}
          </div>
          <ContentArtist label={'Summary'} text={artist.bio.content} />
        </>
      )}
    </div>
  );
}

export default ArtistPage;