import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { fetchReviews } from 'redux/Reviews/reviewsOperations';
import { selectReviews } from 'redux/Reviews/reviewsSelectors';
import {
  AuthorBox,
  Avatar,
  ButtonSwiperBox,
  RangeStars,
  ReviewAuthor,
  ReviewCard,
  ReviewText,
  SwiperButton,
} from './ReviewsCard.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import {FcButtingIn} from 'react-icons/fc'
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";

const ReviewsCards = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 767px) and (max-width: 1439px)',
  });
  const reviews = useSelector(selectReviews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  return (
    <div>
      {isMobile || isTablet ? (
        <Swiper
          initialSlide={1}
          slidesPerView={1}
          navigation={{ prevEl: '#my-prev-button', nextEl: '#my-next-button' }}
          modules={[Navigation]}
          direction={'horizontal'}
          loop={true}
        >
          {reviews.map(review => (
            <SwiperSlide key={review._id}>
              <ReviewCard>
                <AuthorBox>
                  <Avatar>
                    <FcButtingIn size={48}/>
                  </Avatar>
                  <div>
                    <ReviewAuthor>{review.name}</ReviewAuthor>
                    <RangeStars>
                      <img
                        src={require('../../images/mainPage/stars.png')}
                        alt="five stars"
                        width="110"
                        height="14"
                      />
                    </RangeStars>
                  </div>
                </AuthorBox>
                <ReviewText>{review.comment}</ReviewText>
              </ReviewCard>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Swiper
          initialSlide={1}
          slidesPerView={2}
          navigation={{ prevEl: '#my-prev-button', nextEl: '#my-next-button' }}
          modules={[Navigation]}
          direction={'horizontal'}
          loop={true}
        >
          {reviews.map(review => (
            <SwiperSlide key={review._id}>
              <ReviewCard>
                <AuthorBox>
                  <Avatar>
                    <FcButtingIn size={48} />
                  </Avatar>
                  <div>
                    <ReviewAuthor>{review.name}</ReviewAuthor>
                    <img
                        src={require('../../images/mainPage/stars.png')}
                        alt="five stars"
                        width="110"
                        height="14"
                      />
                  </div>
                </AuthorBox>
                <ReviewText>{review.comment}</ReviewText>
              </ReviewCard>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <ButtonSwiperBox>
        <SwiperButton id="my-prev-button">
          <CgArrowLongLeft size={50} color="grey"/>
            </SwiperButton>
        <SwiperButton id="my-next-button">
          <CgArrowLongRight size={50}  color="grey"/>
        </SwiperButton>
      </ButtonSwiperBox>
    </div>
  );
};

export default ReviewsCards;
