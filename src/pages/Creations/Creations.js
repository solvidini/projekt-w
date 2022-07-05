import React, { useContext } from 'react';
import { useMatch } from 'react-router-dom';

import Creation from '../../components/Creation/Creation';
import './Creations.scss';
import { LanguageContext } from '../../context';

const Creations = ({ creationsArray, title, to }) => {
  const context = useContext(LanguageContext);
  const match = useMatch(to);

  return (
    <section className='section-creations'>
      <h1 className='section-title'>{title}</h1>
      <div className='creations'>
        {creationsArray.length ? (
          creationsArray.map((creation, index) => (
            <Creation
              key={creation.name + index}
              to={match.pathname + '/' + (index + 1)}
              name={
                context.language === 'pl' ? creation.name : context.language === 'en' ? creation.enName : creation.name
              }
              source={creation.exhibit}
            />
          ))
        ) : (
          <div className='no-creations'>{context.dictionary.noProjects}</div>
        )}
      </div>
    </section>
  );
};

export default Creations;
