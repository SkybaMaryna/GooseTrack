import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { fetchReviews } from 'redux/Reviews/reviewsOperations';
import { selectReviews } from 'redux/Reviews/reviewsSelectors';
import { FiUser } from 'react-icons/fi';
import {
  AuthorBox,
  Avatar,
  ButtonSwiperBox,
  RangeStars,
  ReviewAuthor,
  ReviewCard,
  ReviewText,
  SwiperNext,
  SwiperPrev,
} from './ReviewsCard.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from 'react-icons/hi';

const ReviewsCards = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 767px) and (max-width: 1439px)',
  });
  // const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const reviews = useSelector(selectReviews);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  return <div>
    {isMobile || isTablet ?
    <Swiper
          initialSlide={1}
          slidesPerView={1}
          navigation={{ prevEl: "#my-prev-button", nextEl: '#my-next-button' }}
          modules={[Navigation]}
          direction={'horizontal'}
          loop={true}
        >
           {reviews.map(review => (
          <SwiperSlide key={review.id}>
    <ReviewCard>
      <AuthorBox>
        <Avatar>
          <FiUser size={48} />
        </Avatar>
        <div>
          <ReviewAuthor>{review.name}</ReviewAuthor>
          <RangeStars color=''>⭐⭐⭐⭐⭐</RangeStars>
        </div>
      </AuthorBox>
      <ReviewText>{review.comment}</ReviewText>
    </ReviewCard>
    </SwiperSlide>))}
    </Swiper> :
    <Swiper
           initialSlide={1}
        // {isMobile || isTablet ? slidesPerView={1} : slidesPerView={2}}
          slidesPerView={2}
          navigation={{ prevEl: 'SwiperPrev', nextEl: 'SwiperNext' }}
          modules={[Navigation]}
          direction={'horizontal'}
          loop={true}
        >
          {reviews.map(review => (
          <SwiperSlide key={review.id}>
    <ReviewCard>
      <AuthorBox>
        <Avatar>
          <FiUser size={48} />
        </Avatar>
        <div>
          <ReviewAuthor>{review.name}</ReviewAuthor>
          <RangeStars>⭐⭐⭐⭐⭐</RangeStars>
        </div>
      </AuthorBox>
      <ReviewText>{review.comment}</ReviewText>
    </ReviewCard>
    </SwiperSlide>))}
    </Swiper>}
    <ButtonSwiperBox>
  <SwiperPrev id="my-prev-button">
  <HiOutlineArrowNarrowLeft size={50}/>
       </SwiperPrev>
      <SwiperNext id="my-next-button">
        <HiOutlineArrowNarrowRight size={50}/>
       </SwiperNext></ButtonSwiperBox>
       </div>
};

export default ReviewsCards;
