import { Comment } from '../../types/comments';

type FilmReviewProps = {
  comment: Comment;
}

export default function FilmReview({comment}: FilmReviewProps): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{comment.user.name}</cite>
          <time className="review__date" dateTime="2016-12-24">{comment.date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{comment.rating}</div>
    </div>
  );
}
