import React from 'react';

const ContentArtist = ({label, text}) => (
  <div>
    <h1>{label}</h1>
    <p dangerouslySetInnerHTML={{__html: text}}/>
  </div>
);

export default ContentArtist;