import AuthNavigate from "components/shared/AuthNavigate/AuthNavigate";

const HomePage = () => {
  return <section>
    <div>
    {/* <picture>
      <source
        media="(min-width: 1280px)"
        srcset="../../images/heroSection/GOOSE 2_desk@1x.png, ../../images/heroSection/GOOSE 2_desk@2x.png 2x"
        type="image/png"
      />

      <source
        media="(min-width: 768px)"
        srcset="../../images/heroSection/GOOSE 2_tab@1x.png, ../../images/heroSection/GOOSE 2_tab@2x.png 2x"
        type="image/png"
      />

      <source
        media="(max-width: 767px)"
        srcset="../../images/heroSection/GOOSE 2_mob@1x.png, ../../images/heroSection/GOOSE 2_mob@2x.png 2x"
        type="image/png"
      />
      <img
        src=" ../../images/heroSection/GOOSE 2_desk@1x.png"
        alt="goose welcome"
        width="150"
        height="149"
      />
    </picture> */}
    <img
        src=" ../../images/heroSection/GOOSE_2_desk@1x.png"
        alt="goose welcome"
        width="150"
        height="149"
      />
    <h1>GooseTrack</h1>
    <AuthNavigate/>
    </div>
    <div>
      <h1>1.      
      </h1>
      <h2><div>CALENDAR</div></h2>
      <h3>VIEW</h3>
      <p>GooseTrack's Calendar view provides a comprehensive overview of your schedule, displaying all your tasks, events, and appointments in a visually appealing and intuitive layout.</p>
      <picture>
      <source
        media="(min-width: 1280px)"
        srcset="../../images/heroSection/GOOSE 2_desk@1x.png, ../../images/heroSection/GOOSE 2_desk@2x.png 2x"
        type="image/png"
      />

      <source
        media="(min-width: 768px)"
        srcset="../../images/heroSection/GOOSE 2_tab@1x.png, ../../images/heroSection/GOOSE 2_tab@2x.png 2x"
        type="image/png"
      />

      <source
        media="(max-width: 767px)"
        srcset="../../images/heroSection/GOOSE 2_mob@1x.png, ../../images/heroSection/GOOSE 2_mob@2x.png 2x"
        type="image/png"
      />
      <img
        src=" ../../images/heroSection/GOOSE 2_desk@1x.png"
        alt="goose welcome"
        width="150"
        height="149"
      />
    </picture>
    </div>
    </section>;

};

export default HomePage;
