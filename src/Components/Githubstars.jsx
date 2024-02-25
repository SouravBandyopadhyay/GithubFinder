import { useEffect, useState } from "react";
import {
  Box,
  Stack,
  Text,
  Image,
  Flex,
  Button,
  Heading,
  useColorModeValue,
  Center,
  Avatar,
  Link,
} from "@chakra-ui/react";

const Githubstars = () => {
  const [posts, setPosts] = useState([]);
  const [noofElements, setnoofElements] = useState(4);
  const getAPI = async () => {
    let res = await fetch(
      "https://github-stars-b92y.onrender.com/github_stars"
    );
    let data = res.json();
    data
      .then((res) => {
        setPosts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAPI();
  }, []);

  const slice = posts.slice(0, noofElements);
  const loadMore = () => {
    setnoofElements(noofElements + noofElements);
  };
  const x1 = useColorModeValue("white", "gray.800");
  const x2 = useColorModeValue("#151f21", "gray.900");
  return (
    <>
      <Text as="h1" fontWeight="600" fontSize={["xl", "2xl", "3xl"]}>
        Github Stars
      </Text>
      <Box
        w="95%"
        margin="auto"
        display="grid"
        gridTemplateColumns={["1fr", "1fr 1fr"]}
        p={2}
      >
        {slice.map((el, index) => (
          <Center py={6} key={index}>
            <Box
              maxW={"450px"}
              w={"full"}
              bg={x1}
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
            >
              <Image
                h={"120px"}
                w={"full"}
                src={
                  "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                }
                objectFit={"cover"}
              />
              <Flex justify={"center"} mt={-12}>
                <Avatar
                  size={"xl"}
                  src={el.avatar}
                  alt={"Author"}
                  css={{
                    border: "2px solid white",
                  }}
                />
              </Flex>

              <Box p={6}>
                <Stack spacing={0} align={"center"} mb={5}>
                  <Heading
                    fontSize={"2xl"}
                    fontWeight={500}
                    fontFamily={"body"}
                  >
                    {el.name}
                  </Heading>
                  <Text color={"gray.500"}>username:{el.username}</Text>
                </Stack>
                <Box>
                  <Image
                    align="center"
                    src={`https://github-readme-stats.vercel.app/api/top-langs?username=${el.username}&show_icons=true&hide_border=true&langs_count=6&locale=en&layout=compact`}
                    alt="githubstats"
                  />
                  <Image
                    align="center"
                    src={`https://github-readme-stats.vercel.app/api?username=${el.username}&show_icons=true&hide_border=true&locale=en`}
                    alt="githubstats"
                  />
                </Box>
                <Button
                  w={"full"}
                  mt={8}
                  bg={x2}
                  color={"white"}
                  rounded={"md"}
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                  }}
                >
                  <Link href={el.url} isExternal>
                    Checkout Profile
                  </Link>
                </Button>
              </Box>
            </Box>
          </Center>
        ))}
      </Box>
      <Button
        margin="auto"
        alignItems="center"
        onClick={() => loadMore()}
        p={4}
      >
        Load More
      </Button>
    </>
  );
};
export default Githubstars;
