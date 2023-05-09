import { useMediaQuery } from 'react-responsive'
import AuthNavigate from "components/shared/AuthNavigate/AuthNavigate";
import { HeroGooseImg, HeroTitle, Herosection, InfoBox, MainInfoBox, MainNumber, MainSubTitle, MainText, MainTitle, SpanOO } from "./HomePage.styled";

const HomePage = () => {
  // const isMobile = useMediaQuery({ query: '(msx-width: 767px)' })
	// const isTablet = useMediaQuery({
	// 	query: '(min-width: 601px) and (max-width: 768px)',
	// })
	// const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' })
  return <div>
     <Herosection>
      <div>
    <HeroGooseImg
        src={require("../../images/heroSection/GOOSE_2_desk@1x.png")}
        alt="goose welcome"
        width="150"
        height="149"
      />
       </div>
       <HeroTitle><div>G<SpanOO>oo</SpanOO>seTrack</div></HeroTitle>
      
    <AuthNavigate/>
    </Herosection>
    <MainInfoBox>
      <InfoBox>
      <MainNumber>1.      
      </MainNumber>
      <MainTitle>CALENDAR</MainTitle>
      <MainSubTitle>VIEW</MainSubTitle>
      <MainText>GooseTrack's Calendar view provides a comprehensive overview of your schedule, displaying all your tasks, events, and appointments in a visually appealing and intuitive layout.</MainText>
      </InfoBox>
      {/* <picture>
      <source
        media="(min-width: 1440px)"
        srcSet="../../images/mainPage/image1_desk@1x.png, ../../images/mainPage/image1_desk@2x.png 2x"
        type="image/png"
      />
      <source
        media="(min-width: 768px)"
        srcSet="../../images/mainPage/image1_tab@1x.png, ../../images/mainPage/image1_tab@2x.png 2x"
        type="image/png"
      />

      <source
        media="(max-width: 767px)"
        srcSet="../../images/mainPage/image1_mob@1x.png, ../../images/mainPage/image1_mob@2x.png 2x"
        type="image/png"
      />
      <img
        src=" ../../images/mainPage/image1_desk@1x.png"
        alt="goose welcome"
        width="604"
        height="700"
      />
    </picture> */}
    {/* {isMobile && <img
        src={require("../../images/mainPage/image1_mob@1x.png")}
        srcset="../../images/mainPage/image1_mob@1x.png, ../../images/mainPage/image1_mob@2x.png 2x"
        alt="goose welcome"
        // width="335"
        // height="457"
      />
      }
      {isTablet && <img
        src={require("../../images/mainPage/image1_tab@1x.png")}
        srcset="../../images/mainPage/image1_tab@1x.png, ../../images/mainPage/image1_tab@2x.png 2x"
        alt="goose welcome"
        // width="704"
        // height="700"
      />}
      {isDesktop && <img
        src={require("../../images/mainPage/image1_desk@1x.png")}
        srcset="../../images/mainPage/image1_desk@1x.png, ../../images/mainPage/image1_desk@2x.png 2x"
        alt="goose welcome"
        // width="604"
        // height="700"
      />} */}
    </MainInfoBox>
    </div>
};

export default HomePage;