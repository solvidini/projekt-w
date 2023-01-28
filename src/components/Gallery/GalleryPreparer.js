import React, { useContext } from 'react';
import { useNavigate, useParams, useMatch } from 'react-router-dom';
import { LanguageContext } from '../../context';
import Gallery from './Gallery';

const GalleryPreparer = ({ creationsArray, to }) => {
  const match = useMatch(to);
  const navigate = useNavigate();
  const context = useContext(LanguageContext);
  const params = useParams();

  const id = params.id - 1;
  if (!creationsArray[id]) return navigate('/');

  return (
    <Gallery
      url={match.pathname}
      images={creationsArray[id].images}
      name={context.language === 'pl' ? creationsArray[id].name : creationsArray[id].enName}
      reference={creationsArray[id]?.reference}
    />
  );
};

export default GalleryPreparer;
