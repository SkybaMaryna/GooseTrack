import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useMediaQuery } from 'react-responsive';
import { fetchReviews } from 'redux/Reviews/reviewsOperations';
import { selectReviews } from 'redux/Reviews/reviewsSelectors';
import { FiUser } from 'react-icons/fi';
import {
  AuthorBox,
  Avatar,
  RangeStars,
  ReviewAuthor,
  ReviewCard,
  ReviewText,
} from './ReviewsCard.styled';

const ReviewsCard = () => {
  // const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  // const isTablet = useMediaQuery({
  //   query: '(min-width: 767px) and (max-width: 1439px)',
  // });
  // const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const reviews = useSelector(selectReviews);
  console.log(reviews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  return reviews.map(review => (
    <ReviewCard>
      <AuthorBox>
        <Avatar>
          <FiUser size={50} />
        </Avatar>
        <div>
          <ReviewAuthor>{review.name}</ReviewAuthor>
          <RangeStars>⭐⭐⭐⭐⭐</RangeStars>
        </div>
      </AuthorBox>
      <ReviewText>{review.comment}</ReviewText>
    </ReviewCard>
  ));
};

// return   <StyledBox>
//       {contacts && contacts.map(contact => {
//         return (
//           <li key={contact.id}>
//             <Contact contact={contact} />
//           </li>
//         );
//       })}
//     </StyledBox>

export default ReviewsCard;
