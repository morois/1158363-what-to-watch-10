/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { FilmTabTitle } from '../../const';
import { Comments } from '../../types/comments';
import { Film } from '../../types/films';
import FilmDetails from '../film-details/film-details';
import FilmOverview from '../film-overview/film-overview';
import FilmReviews from '../film-reviews/film-reviews';


type TabsProps = {
    film: Film;
    comments: Comments;
  }

export default function Tabs ({film, comments}: TabsProps): JSX.Element {
  const [currentTab, setTab] = useState(FilmTabTitle.Overview);

  const renderTab = (tab: FilmTabTitle): JSX.Element => {
    switch (tab) {
      case FilmTabTitle.Details:
        return <FilmDetails film={film}/>;
      case FilmTabTitle.Reviews:
        return <FilmReviews comments={comments}/>;
      default:
        return <FilmOverview film={film}/>;
    }
  };

  return (
    <div className="film-card__wrap film-card__translate-top">
      <div className="film-card__info">
        <div className="film-card__poster film-card__poster--big">
          <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
        </div>

        <div className="film-card__desc">
          <nav className="film-nav film-card__nav">
            <ul className="film-nav__list">
              <li className={`film-nav__item${currentTab === FilmTabTitle.Overview ? ' film-nav__item--active' : ''}`}>
                <a onClick={() => setTab(FilmTabTitle.Overview)} className="film-nav__link" style={{cursor: 'pointer'}}>Overview</a>
              </li>
              <li className={`film-nav__item${currentTab === FilmTabTitle.Details ? ' film-nav__item--active' : ''}`}>
                <a onClick={() => setTab(FilmTabTitle.Details)} className="film-nav__link" style={{cursor: 'pointer'}}>Details</a>
              </li>
              <li className={`film-nav__item${currentTab === FilmTabTitle.Reviews ? ' film-nav__item--active' : ''}`}>
                <a onClick={() => setTab(FilmTabTitle.Reviews)} className="film-nav__link" style={{cursor: 'pointer'}}>Reviews</a>
              </li>
            </ul>
          </nav>

          {renderTab(currentTab)}
        </div>
      </div>
    </div>
  );
}
