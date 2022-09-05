import {ChangeEvent, FormEvent, Fragment, useState} from 'react';
import {useAppDispatch} from '../../hooks';
import {submitReview} from '../../store/api-actions';
import {useParams} from 'react-router-dom';
import { REVIEW_TEXT_MAX, REVIEW_TEXT_MIN } from '../../const';

export default function AddNewReview() : JSX.Element {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const dispatch = useAppDispatch();
  const {id: filmId} = useParams();

  const fieldChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setText(evt.target.value);
  };

  const ratingInputClickHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(evt.target.value));
  };

  const starsButtonList = Array.from({length: 10}, (_, i) => {
    const key = 10 - i;
    return (
      <Fragment key={key}>
        <input
          className="rating__input"
          id={`star-${key}`}
          type="radio"
          name="rating"
          value={`${key}`}
          onChange={ratingInputClickHandler}
          checked={rating === key}
        />
        <label className="rating__label" htmlFor={`star-${key}`}>{`Rating ${key}`}</label>
      </Fragment>
    );
  });

  const isValid = () => {
    if (text.length < REVIEW_TEXT_MAX ||
        text.length > REVIEW_TEXT_MIN
    ) {
      return true;
    } else {
      setSubmitDisabled(true);
    }
  };

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    // воооооооо тут
    if (isValid()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      dispatch(submitReview({ text, rating, filmId: filmId! }));
    }
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={onFormSubmit}>
        <div className="rating">
          <div className="rating__stars" onChange={ratingInputClickHandler}>
            {starsButtonList}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            onChange={fieldChangeHandler}
            className="add-review__textarea"
            name="reviewText"
            id="review-text"
            placeholder="Review text"
            value={text}
            minLength={REVIEW_TEXT_MIN}
            maxLength={REVIEW_TEXT_MAX}
          />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={submitDisabled} >Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}


