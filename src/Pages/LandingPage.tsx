import Item from "../components/Item";
import SwiperItemContainer from "../components/SwiperItemContainer";

function LandingPage() {
  const landingPageHeadline = ["Popular", "Top Games"];
  return (
    <div className={"bg-amber-300 container mx-auto"}>
      <SwiperItemContainer headline={landingPageHeadline[0]} />
      <SwiperItemContainer headline={landingPageHeadline[1]} />
    </div>
  );
}

export default LandingPage;
