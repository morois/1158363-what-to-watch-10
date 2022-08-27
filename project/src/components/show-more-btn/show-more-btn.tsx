import {memo} from 'react';

const ShowMoreBtn = () : JSX.Element => (
  <div className="catalog__more">
    <button className="catalog__button" type="button">Show more</button>
  </div>
);

export default memo(ShowMoreBtn);
