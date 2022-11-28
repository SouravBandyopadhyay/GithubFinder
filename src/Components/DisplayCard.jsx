import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Stack,
  Image,
  Button,
  Link,
  Avatar,
  Text
} from "@chakra-ui/react";
const DisplayCard = ({ data }) => {
  let x1 = useColorModeValue("white", "gray.900");
  return (
    <Stack
      direction="row"
      justifyContent="space-evenly"
      display="grid"
      gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr", "1fr 1fr 1fr"]}
    >
      {!data
        ? "Not Found"
        : data.map((el) => (
            <Center py={6} key={el.id}>
              <Box
                maxW={"400px"}
                w={"full"}
                bg={x1}
                boxShadow={"xl"}
                rounded={"lg"}
                p={6}
                textAlign={"center"}
                _hover={{
                  transform: "translateY(-2px)",
                  border: "1px solid teal"
                }}
              >
                <Avatar
                  size={"2xl"}
                  src={el.avatar_url}
                  alt={"Avatar Alt"}
                  mb={4}
                  pos={"relative"}
                />
                <Heading fontSize={"2xl"} fontFamily={"body"}>
                  {el.login}
                </Heading>
                <Text fontWeight={600} color={"gray.500"} mb={4}>
                  {el.id}
                </Text>
                <Box>
                  <Image
                    align="center"
                    src={`https://github-readme-stats.vercel.app/api?username=${el.login}&show_icons=true&hide_border=true&locale=en`}
                    alt="githubstats"
                  />
                </Box>
                <Stack mt={8} direction={"row"} spacing={4}>
                  <Button
                    flex={1}
                    fontSize={"sm"}
                    rounded={"full"}
                    _focus={{
                      bg: "gray.200"
                    }}
                  >
                    <Link
                      href={`https://github.com/${el.login}?tab=repositories`}
                      isExternal
                    >
                      Check Repos
                    </Link>
                  </Button>
                  <Button
                    flex={1}
                    fontSize={"sm"}
                    rounded={"full"}
                    bg={"blue.400"}
                    color={"white"}
                    boxShadow={
                      "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                    }
                    _hover={{
                      bg: "blue.200"
                    }}
                    _focus={{
                      bg: "blue.500"
                    }}
                  >
                    <Link href={el.html_url} isExternal>
                      Github
                    </Link>
                  </Button>
                </Stack>
              </Box>
            </Center>
          ))}
    </Stack>
  );
};
export default DisplayCard;
