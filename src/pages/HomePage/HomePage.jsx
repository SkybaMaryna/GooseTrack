
import AuthNavigate from "components/shared/AuthNavigate/AuthNavigate";
import { HeroGooseImg, HeroTitle, Herosection, InfoBox, MainInfoBox, MainNumber, MainSubTitle, MainText, MainTitle, SpanOO } from "./HomePage.styled";

const HomePage = () => {
  return <div>
     <Herosection>
      <div>
   <picture>
      <source
        media="(min-width: 1440px)"
        srcSet="../../images/heroSection/GOOSE_2_desk@1x.png, ../../images/heroSection/GOOSE_2_desk@2x.png 2x"
        type="image/png"
      />
      <source
        media="(min-width: 768px)"
        srcSet="../../images/heroSection/GOOSE_2_tab@1x.png, ../../images/heroSection/GOOSE_2_tab@2x.png 2x"
        type="image/png"
      />
      <source
        media="(max-width: 767px)"
        srcSet="../../images/heroSection/GOOSE_2_mob@1x.png, ../../images/heroSection/GOOSE_2_mob@2x.png 2x"
        type="image/png"
      />
      <img
        src={require("../../images/heroSection/GOOSE_2_desk@1x.png")}
        alt="goose welcome"
        width="150"
        height="149"
      />
    </picture> 
    
    {/* <HeroGooseImg
        src={require("../../images/heroSection/GOOSE_2_desk@1x.png")}
        alt="goose welcome"
        width="150"
        height="149"
      /> */}
       </div>
    <HeroTitle>G<SpanOO>oo</SpanOO>seTrack</HeroTitle>
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
      <picture>
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
    </picture>
    </MainInfoBox>
    </div>
};

export default HomePage;