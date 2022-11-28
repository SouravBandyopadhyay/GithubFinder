import React from "react";
import Lottie from "lottie-web";
import { useRef, useEffect } from "react";
import { Box } from "@chakra-ui/react";
const Githubicon = () => {
  const container = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./illustration/blackgithub.json")
    });
  }, []);
  return (
    <Box w="sm" margin="auto">
      <Box className="container" ref={container} p={2} />
    </Box>
  );
};

export default Githubicon;
