import {
  Box,
  Container,
  CssBaseline,
  Typography,
  useMediaQuery,
} from "@mui/material";
import image from "../assets/home/background-home-mobile.jpg";
import imageTablet from "../assets/home/background-home-tablet.jpg";
import imageDesktop from "../assets/home/background-home-desktop.jpg";
import Navbar from "../components/Navbar";

const HomePageTemplate = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(min-width:600px) and (max-width:960px)");

  const MainSection = () => {
    return (
      <>
        <Typography
          variant={"body1"}
          style={{
            color: "#D0D6F9",
            fontFamily: "Barlow+Condensed",
            marginTop: "2rem",
          }}
          textAlign="center"
        >
          SO, YOU WANT TO TRAVEL TO
        </Typography>
        <Typography
          variant="h1"
          textAlign="center"
          style={{ fontFamily: "Bellefair", color: "white" }}
          letterSpacing={4}
        >
          SPACE
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          style={{
            color: "#D0D6F9",
            fontFamily: "Barlow",
            marginTop: "2rem",
          }}
        >
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </Typography>
      </>
    );
  };

  return (
    <>
      <CssBaseline />
      <Box
        style={{
          backgroundImage: isMobile
            ? `url(${image})`
            : isTablet
            ? `url(${imageTablet})`
            : `url(${imageDesktop})`,
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center", // center the image
        }}
      >
        <Container maxWidth="lg">
          <Navbar></Navbar>
          <MainSection></MainSection>
        </Container>
      </Box>
    </>
  );
};

export default HomePageTemplate;
