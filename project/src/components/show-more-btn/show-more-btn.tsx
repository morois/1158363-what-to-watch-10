
import {memo} from 'react';

interface ShowMoreBtnProps {
  onClick: () => void;
}

const ShowMoreBtn = ({ onClick }: ShowMoreBtnProps) : JSX.Element => (

  <div className="catalog__more">
    <button
      className="catalog__button"
      type="button"
      onClick={onClick}
    >
      Show more
    </button>
  </div>
);

export default memo(ShowMoreBtn);
