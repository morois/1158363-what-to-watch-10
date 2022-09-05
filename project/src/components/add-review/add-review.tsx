import { ChangeEvent, Fragment, useRef } from 'react';

export default function AddNewReview () : JSX.Element {
  const textFieldRef = useRef('');
  const starsFieldRef = useRef('');

  const fieldChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = (evt.target);
    textFieldRef.current = value;
  };

  const ratingInputClickHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const {value} = (evt.target);
    starsFieldRef.current = value;
  };

  const starsButtonList = Array.from({length: 10}, (_, i) => {
    const key = String(10 - i);
    return (
      <Fragment key={key}>
        <input className="rating__input" id={`star-${key}`} type="radio" name="rating" value={`${key}`} onChange={ratingInputClickHandler}/>
        <label className="rating__label" htmlFor={`star-${key}`}>{`Rating ${key}`}</label>
      </Fragment>);
  });


  return (
    <div className="add-review">
      <form action="#" className="add-review__form" >
        <div className="rating">
          <div className="rating__stars" onChange={ratingInputClickHandler}>
            {starsButtonList}
          </div>
        </div>

        <div className="add-review__text">
          <textarea onChange={fieldChangeHandler} className="add-review__textarea" name="reviewText" id="review-text" placeholder="Review text"></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}


