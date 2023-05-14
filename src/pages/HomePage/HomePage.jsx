import { useMediaQuery } from 'react-responsive';
import AuthNavigate from 'components/shared/AuthNavigate/AuthNavigate';
import {
  BaseDiv,
  HeroGooseImg,
  HeroTitle,
  Herosection,
  InfoBox,
  InfoBoxP,
  MainInfoBox,
  MainNumber,
  MainSection,
  MainSubTitle,
  MainText,
  MainTitle,
  NavButtonBox,
  ReviewSection,
  ReviewTitle,
  SwiperWraper,
} from './HomePage.styled';
import CalendarButton from 'components/Layout/CalendarButton/CalendarButton';
import { selectIsLoggedIn } from 'redux/Auth/authSelectors';
import { useSelector } from 'react-redux';
import ReviewsCards from './ReviewsCards';

const HomePage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1439px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
  const IsLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <BaseDiv>
      <Herosection>
        {isMobile && (
            <HeroGooseImg
              src={
                isRetina
                ? require('../../images/heroSection/GOOSE_2_mob@2x.png')
                : require('../../images/heroSection/GOOSE_2_mob@1x.png')
              }
              alt="goose welcome"
              width="142"
              height="142"
            />
          )}
          {(isTablet || isDesktop)  && (
            <HeroGooseImg
              src={
                isRetina
                ? require('../../images/heroSection/GOOSE_2_tab@2x.png')
                : require('../../images/heroSection/GOOSE_2_tab@1x.png')
              }
              alt="goose welcome"
              width="150"
              height="149"
            />
          )}
        <HeroTitle>
          <div>
            G<i>oo</i>seTrack
          </div>
        </HeroTitle>
        <NavButtonBox>
          {!IsLoggedIn ? <AuthNavigate /> : <CalendarButton />}
        </NavButtonBox>
      </Herosection>
      <MainSection>
        <MainInfoBox>
          <InfoBox>
            <MainNumber>1.</MainNumber>
            <MainTitle>CALENDAR</MainTitle>
            <MainSubTitle>VIEW</MainSubTitle>
            <MainText>
              GooseTrack's Calendar view provides a comprehensive overview of
              your schedule, displaying all your tasks, events, and appointments
              in a visually appealing and intuitive layout.
            </MainText>
          </InfoBox>
          {isMobile && (
            <img
              src={
                isRetina
                  ? require('../../images/mainPage/image1_mob@2x.png')
                  : require('../../images/mainPage/image1_mob@1x.png')
              }
              alt="few calendars"
              width="335"
              height="457"
            />
          )}
          {isTablet && (
            <img
              src={
                isRetina
                  ? require('../../images/mainPage/image1_tab@2x.png')
                  : require('../../images/mainPage/image1_tab@1x.png')
              }
              alt="few calendars"
              width="704"
              height="700"
            />
          )}
          {isDesktop && (
            <img
              src={
                isRetina
                  ? require('../../images/mainPage/image1_desk@2x.png')
                  : require('../../images/mainPage/image1_desk@1x.png')
              }
              alt="few calendars"
              width="604"
              height="700"
            />
          )}
        </MainInfoBox>
        <MainInfoBox>
          <InfoBoxP>
            <MainNumber>2.</MainNumber>
            <MainSubTitle>SIDEBAR</MainSubTitle>
            <MainText>
              GooseTrack offers easy access to your account settings, calendar,
              and filters. The "My Account" section allows you to manage your
              profile information and preferences, while the calendar provides a
              quick and convenient way to view your upcoming events and tasks.
            </MainText>
          </InfoBoxP>
          {isMobile && (
            <img
              src={
                isRetina
                  ? require('../../images/mainPage/image2_mob@2x-1.png')
                  : require('../../images/mainPage/image2_mob@1x-1.png')
              }
              alt="sidebars"
              width="335"
              height="457"
            />
          )}
          {isTablet && (
            <img
              src={
                isRetina
                  ? require('../../images/mainPage/image2_tab@2x-1.png')
                  : require('../../images/mainPage/image2_tab@1x-1.png')
              }
              alt="sidebars"
              width="704"
              height="700"
            />
          )}
          {isDesktop && (
            <img
              src={
                isRetina
                  ? require('../../images/mainPage/image2_desk@2x-2.png')
                  : require('../../images/mainPage/image2_desk@1x-2.png')
              }
              alt="sidebars"
              width="604"
              height="700"
            />
          )}
        </MainInfoBox>
        <MainInfoBox>
          <InfoBox>
            <MainNumber>3.</MainNumber>
            <MainTitle>All IN</MainTitle>
            <MainSubTitle>ONE</MainSubTitle>
            <MainText>
              GooseTrack is an all-in-one productivity tool that helps you stay
              on top of your tasks, events, and deadlines. Say goodbye to
              scattered to-do lists and hello to streamlined productivity with
              GooseTrack.
            </MainText>
          </InfoBox>
          {isMobile && (
            <img
              src={
                isRetina
                  ? require('../../images/mainPage/image3_mob@2x-2.png')
                  : require('../../images/mainPage/image3_mob@1x-2.png')
              }
              alt="todos"
              width="335"
              height="457"
            />
          )}
          {isTablet && (
            <img
              src={
                isRetina
                  ? require('../../images/mainPage/image3_tab@2x-2.png')
                  : require('../../images/mainPage/image3_tab@1x-2.png')
              }
              alt="todos"
              width="704"
              height="700"
            />
          )}
          {isDesktop && (
            <img
              src={
                isRetina
                  ? require('../../images/mainPage/image3_desk@2x-1.png')
                  : require('../../images/mainPage/image3_desk@1x-1.png')
              }
              alt="todos"
              width="604"
              height="700"
            />
          )}
        </MainInfoBox>
      </MainSection>
      <ReviewSection>
        <ReviewTitle>REVIEWS</ReviewTitle>
        <SwiperWraper>
          <ReviewsCards />
        </SwiperWraper>
      </ReviewSection>
    </BaseDiv>
  );
};

export default HomePage;
