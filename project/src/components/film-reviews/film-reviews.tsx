import { Comments } from '../../types/comments';
import FilmReview from '../film-review/film-review';


type FilmReviewsProps = {
    comments: Comments;
  };

export default function FilmReviews ({comments}: FilmReviewsProps): JSX.Element {
  const firstColumnComments = comments.slice(0, 3);
  const secondColumnComments = comments.slice(3,6);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {firstColumnComments.map((comment) => (<FilmReview key={comment.user.id} comment={comment}/>))}
      </div>
      <div className="film-card__reviews-col">
        {secondColumnComments.map((comment) => (<FilmReview key={comment.user.id} comment={comment}/>))}
      </div>
    </div>
  );
}
