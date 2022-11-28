import { Box, Heading, Container, Text, Button, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "5xl" }}
            lineHeight={"110%"}
            fontFamily="monospace"
          >
            Looking for Github Profile
            <br />
            <Text as={"span"} color={"gray.400"}>
              <span aria-label="img" role="img">
                use Github Finder
                <span aria-label="search" role="img">
                  🔍
                </span>
              </span>
            </Text>
          </Heading>
          <Text color={"gray.600"} fontSize={["sm", "md", "lg"]}>
            <strong>Github Finder</strong> is a React project to provide a
            github user details in just short span of time with their stats
            <strong> Finder Section </strong>.
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              colorScheme={"gray"}
              bg={"gray.200"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "gray.400"
              }}
            >
              <Link to="/finder">Get Started</Link>
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
