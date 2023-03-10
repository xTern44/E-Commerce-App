// Components
import FeaturesProducts from "../../components/featuredProducts/FeaturesProducts";
import Categories from "../../components/categories/Categories";
import Contact from "../../components/contact/Contact";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";

// @mui
import { Box, Stack } from "@mui/material";
import Carousel from "react-bootstrap/Carousel";
import styled from "@emotion/styled";

const Home = () => {
  const images = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  return (
    <HomeContainer direction='column' spacing={3}>
      <ScrollToTop />
      <Carousel className='carousel'>
        {images?.map((item) => (
          <Carousel.Item key={item} className='carousel--item'>
            <img className='d-block w-100' src={item} alt='' />
          </Carousel.Item>
        ))}
      </Carousel>
      <FeaturesProducts type={"Featured"} />
      <Categories />
      <FeaturesProducts type={"Trending"} />
      <Contact />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  display: "flex",
  flexDirection: "column",
  minHeight: "calc(100vh - 4rem)",
}));
