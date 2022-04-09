import { Box, Container, CssBaseline, useMediaQuery } from "@mui/material";
import image from "../assets/home/background-home-mobile.jpg";
import imageTablet from "../assets/home/background-home-tablet.jpg";
import imageDesktop from "../assets/home/background-home-desktop.jpg";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(min-width:600px) and (max-width:960px)");
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
          {children}
        </Container>
      </Box>
    </>
  );
};

export default Layout;
