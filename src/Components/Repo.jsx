import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Link
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Repo = () => {
  const x1 = useColorModeValue("white", "gray.900");
  const x2 = useColorModeValue("gray.700", "white");
  const [data, setData] = useState([]);
  const getAPI = () => {
    fetch("https://gtrend.yapie.me/")
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  };
  console.log("repo", data);
  useEffect(() => {
    getAPI();
  }, []);
  return (
    <>
      <Text as="h1" fontWeight="600" fontSize={["xl", "2xl", "3xl"]}>
        Trending Repo
      </Text>
      <Box
        // border="2px solid orange"
        display="grid"
        gridTemplateColumns={["1fr", "1fr 1fr"]}
        p={1}
      >
        {data &&
          data.map((el, index) => (
            <Center py={6} key={index}>
              <Box
                maxW={"550px"}
                w={"full"}
                bg={x1}
                boxShadow={"2xl"}
                rounded={"md"}
                p={6}
                overflow={"hidden"}
                _hover={{
                  transform: "translateY(-3px)",
                  fontWeight: 700,
                  border: "1px solid teal"
                }}
              >
                <Stack>
                  <Heading
                    color={x2}
                    fontSize={"2xl"}
                    fontFamily={"body"}
                    letterSpacing={1.1}
                  >
                    <Link href={el.url} isExternal>
                      {el.name}
                    </Link>
                  </Heading>
                  <Text color={"gray.600"} fontSize={["sm", "md"]}>
                    {el.description}
                  </Text>
                  <Box>
                    <Avatar src={el.avatar} alt={"Author"} boxSize="8em" />
                  </Box>
                </Stack>
                <Stack
                  // border="2px solid green"
                  mt={6}
                  direction={"row"}
                  spacing={4}
                  p={2}
                  align={"center"}
                  justifyContent="space-between"
                >
                  <Box
                    // border="2px solid red"
                    display="inline-flex"
                    gap={2}
                    justifyContent="center"
                  >
                    {el.builtBy.map((elem) => (
                      <Avatar src={elem.avatar} margin="auto" />
                    ))}
                  </Box>
                  <Stack
                    direction={"column"}
                    spacing={1}
                    fontSize={["sm", "md"]}
                    // border="2px solid red"
                  >
                    <Text fontWeight={600}>Author:{el.author}</Text>
                    <Text color={el.languageColor} fontWeight="600">
                      <strong>{el.language}</strong>
                    </Text>
                    <Text>
                      <strong>Stars:{el.stars}</strong>{" "}
                    </Text>
                    <Text>
                      <strong>forks:{el.forks}</strong>{" "}
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            </Center>
          ))}
      </Box>
    </>
  );
};
export default Repo;
