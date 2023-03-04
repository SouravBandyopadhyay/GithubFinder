import {
  Box,
  Text,
  Link,
  VStack,
  Tag,
  HStack,
  Flex,
  Tooltip,
  Icon,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BiGitRepoForked, BiStar } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
const Repo = () => {
  const [data, setData] = useState([]);
  const getAPI = () => {
    fetch(
      "https://private-anon-a3fc9d4883-githubtrendingapi.apiary-mock.com/repositories"
    )
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  };
  // console.log("repo", data);
  useEffect(() => {
    getAPI();
  }, []);
  return (
    <>
      <Text as="h1" fontWeight="600" fontSize={["xl", "2xl", "3xl"]}>
        Trending Repo
      </Text>
      <Box
        width="70%"
        display="grid"
        gridTemplateColumns={["1fr", "1fr 1fr"]}
        p={1}
        margin="auto"
        gap="3"
      >
        {data &&
          data.map((el, index) => (
            <Box
              py={6}
              key={index}
              size="xl"
              px={[2, 4]}
              mt={2}
              rounded="xl"
              borderWidth="1px"
              _hover={{
                shadow: "lg",
                textDecoration: "none",
              }}
            >
              <VStack overflow="hidden" align="start" spacing={1}>
                <VStack spacing={1} align="start" w="100%">
                  <Flex justifyContent="space-between" width="100%">
                    <Tooltip hasArrow label="Github link" placement="top">
                      <Link href={el.url} isExternal>
                        <HStack cursor="pointer">
                          <Icon as={FiGithub} boxSize="2em" mt="1px" />
                          <Text
                            fontSize="sm"
                            noOfLines={1}
                            fontWeight="600"
                            align="left"
                          >
                            {el.name}
                          </Text>
                        </HStack>
                      </Link>
                    </Tooltip>

                    <HStack cursor="pointer">
                      {el.forks && (
                        <Link href={el.url} isExternal>
                          <Flex
                            _hover={{ color: "blue.500" }}
                            alignItems="center"
                          >
                            <Icon
                              as={BiGitRepoForked}
                              boxSize="0.9em"
                              mt="1px"
                            />

                            <Box as="span" ml="1" fontSize="sm">
                              {el.forks}
                            </Box>
                          </Flex>
                        </Link>
                      )}
                      <Link href={el.url} isExternal>
                        <Flex
                          alignItems="center"
                          _hover={{ color: "blue.500" }}
                        >
                          <Icon as={BiStar} boxSize="0.9em" mt="1px" />

                          <Box as="span" ml="1" fontSize="sm">
                            {el.stars}
                          </Box>
                        </Flex>
                      </Link>
                    </HStack>
                  </Flex>
                  {el.language && (
                    <Flex justifyContent="space-between" width="100%">
                      <Box>
                        <HStack spacing="1">
                          <Tag size="sm" colorScheme="blue">
                            <Text fontSize={["0.55rem", "inherit", "inherit"]}>
                              {el.language}
                            </Text>
                          </Tag>
                        </HStack>
                      </Box>
                    </Flex>
                  )}
                </VStack>
                <Box>
                  <Text
                    color="gray.500"
                    fontSize="sm"
                    noOfLines={2}
                    textAlign="left"
                  >
                    {el.description}
                  </Text>
                </Box>
              </VStack>
            </Box>
          ))}
      </Box>
    </>
  );
};
export default Repo;
