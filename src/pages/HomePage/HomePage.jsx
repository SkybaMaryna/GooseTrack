import { useMediaQuery } from 'react-responsive'
import AuthNavigate from "components/shared/AuthNavigate/AuthNavigate";
import { HeroGooseImg, HeroTitle, Herosection, InfoBox, MainInfoBox, MainNumber, MainSubTitle, MainText, MainTitle, SpanOO } from "./HomePage.styled";

const HomePage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' }) 
  const isTablet = useMediaQuery({ query: '(min-width: 767px) and (max-width: 1439px)' }) 
  const isDesktop = useMediaQuery({query: '(min-width: 1440px)' }) 

  return <div>
     <Herosection>
    <HeroGooseImg
        src={require("../../images/heroSection/GOOSE_2_desk@1x.png")}
        alt="goose welcome"
        width="150"
        height="149"
      />
       <HeroTitle><div>G<SpanOO>oo</SpanOO>seTrack</div></HeroTitle>
      
    <AuthNavigate/>
    </Herosection>
    <section>
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

    {isMobile && <img
        src={require("../../images/mainPage/image1_mob@1x.png")}
        // srcset="../../images/mainPage/image1_mob@1x.png, ../../images/mainPage/image1_mob@2x.png 2x"
        alt="few calendars"
        width="335"
        height="457"
      />
      }
      {isTablet && <img
        src={require("../../images/mainPage/image1_tab@1x.png")}
        // srcset="../../images/mainPage/image1_tab@1x.png, ../../images/mainPage/image1_tab@2x.png 2x"
        alt="few calendars"
        width="704"
        height="700"
      />}
      {isDesktop && <img
        src={require("../../images/mainPage/image1_desk@1x.png")}
        // srcset="../../images/mainPage/image1_desk@1x.png, ../../images/mainPage/image1_desk@2x.png 2x"
        alt="few calendars"
        width="604"
        height="700"
      />}
    </MainInfoBox>
    <MainInfoBox>
      <InfoBox>
      <MainNumber>2.      
      </MainNumber>
       <MainSubTitle>SIDEBAR</MainSubTitle>
      <MainText>GooseTrack offers easy access to your account settings, calendar, and filters. The "My Account" section allows you to manage your profile information and preferences, while the calendar provides a quick and convenient way to view your upcoming events and tasks.</MainText>
      </InfoBox>
    {isMobile && <img
        src={require("../../images/mainPage/image2_mob@1x-1.png")}
        // srcset="../../images/mainPage/image2_mob@1x-1.png, ../../images/mainPage/image2_mob@2x-1.png 2x"
        alt="sidebars"
        width="335"
        height="457"
      />
      }
      {isTablet && <img
        src={require("../../images/mainPage/image2_tab@1x-1.png")}
        // srcset="../../images/mainPage/image2_tab@1x-1.png, ../../images/mainPage/image2_tab@2x-1.png 2x"
        alt="fsidebars"
        width="704"
        height="700"
      />}
      {isDesktop && <img
        src={require("../../images/mainPage/image2_desk@1x-2.png")}
        // srcset="../../images/mainPage/image2_desk@1x-2.png, ../../images/mainPage/image2_desk@2x-2.png 2x"
        alt="sidebars"
        width="604"
        height="700"
      />}
    </MainInfoBox>
    <MainInfoBox>
      <InfoBox>
      <MainNumber>3.      
      </MainNumber>
      <MainTitle>All IN</MainTitle>
       <MainSubTitle>ONE</MainSubTitle>
      <MainText>GooseTrack is an all-in-one productivity tool that helps you stay on top of your tasks, events, and deadlines. Say goodbye to scattered to-do lists and hello to streamlined productivity with GooseTrack.</MainText>
      </InfoBox>
    {isMobile && <img
        src={require("../../images/mainPage/image3_mob@1x-2.png")}
        // srcset="../../images/mainPage/image3_mob@1x-2.png, ../../images/mainPage/image3_mob@2x-3.png 2x"
        alt="todos"
        width="335"
        height="457"
      />
      }
      {isTablet && <img
        src={require("../../images/mainPage/image3_tab@1x-2.png")}
        // srcset="../../images/mainPage/image3_tab@1x-3.png, ../../images/mainPage/image3_tab@2x-3.png 2x"
        alt="todos"
        width="704"
        height="700"
      />}
      {isDesktop && <img
        src={require("../../images/mainPage/image3_desk@1x-1.png")}
        // srcset="../../images/mainPage/image3_desk@1x-1.png, ../../images/mainPage/image23_desk@2x-1.png 2x"
        alt="todos"
        width="604"
        height="700"
      />}
    </MainInfoBox>
    </section>
    </div>
};


export default HomePage;