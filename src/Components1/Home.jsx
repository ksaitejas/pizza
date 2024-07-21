import Header from "./Header";
import HomePageScroller from "./HomepageScroller";
import GenrePizza from "./GenrePizza";
import Drawer from "./Drawer";
import Login from "./LoginPage";
import SignUp from './SignUp';
import CarouselDemo from "./HomeCarousel";
import Pizza1 from './Genres/Pizza1';
const Home = () => {
  return (
    <div>
      <Header />
      <CarouselDemo/>
      <HomePageScroller />
      <GenrePizza />
      <Drawer />
      {/* <Login/> */}
      {/* <Pizza1/> */}
    </div>
  );
};

export default Home;
