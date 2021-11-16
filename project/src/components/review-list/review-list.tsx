import { Review } from '../../types/review';
import Comment from '../review-item/review-item';

type CommentListProps = {
    reviews: Review[];
}

export default function CommentList({reviews}: CommentListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => <Comment key={review.id} review={review}/>)}
    </ul>
  );
}
