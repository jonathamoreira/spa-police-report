import { NavBar } from "../../Components/NavBar/NavBar";
import { Footer } from "../../Components/Footer/Footer";
import Carousel from "../../Components/Body/Carousel";
import Articles from "../../Components/Body/Articles";
import { Container, ContentWrapper, Left, Right } from "./HomeStyle";
const Home = () => {
  return (
    <>
      <NavBar />
      <Container>
        <ContentWrapper>
          <Left>
            <Carousel />
          </Left>
          <Right>
            <Articles />
          </Right>
        </ContentWrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
