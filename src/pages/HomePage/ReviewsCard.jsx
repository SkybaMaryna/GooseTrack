import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useMediaQuery } from 'react-responsive';
import { fetchReviews } from 'redux/Reviews/reviewsOperations';
import { selectReviews } from 'redux/Reviews/reviewsSelectors';
import { FiUser } from "react-icons/fi";
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from "react-icons/hi";

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

    return  <div>
    {reviews && reviews.map(review => {
    return (
       <FiUser/>
      <h1>{review.name}</h1>
      <div></div>
      </div>
        <p>{review.comment}</p>
        <div><HiOutlineArrowNarrowLeft/></div>
        <div><HiOutlineArrowNarrowRight/></div>
         )}
)}
</div> }

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

