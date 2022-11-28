import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import DisplayCard from "./DisplayCard";
import Searchingillust from "./Searchingillust";
const Finder = () => {
  const [user, setUser] = useState("");
  //managing the fetch data
  const [data, setData] = useState([]);
  const [disabled, setDisabled] = useState(true);
  //Loading funtionality
  const [loading, setLoading] = useState(false);

  //Limit
  const [limit, setLimit] = useState(100);
  //Handling OnChange
  const onchangeHandle = (e) => {
    // console.log(e.target.value);
    setUser(e.target.value);
    if (e.target.value.trim().length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const onSubmitHandle = (e) => {
    fetch(
      `https://api.github.com/search/users?q=${user}&page=1&per_page=${limit}&order=asc`
    )
      .then((res) => {
        return res.json();
      })
      .then((value) => {
        // console.log("data-", value.items);
        setData(value.items);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Text as="h1" fontWeight="600" fontSize={["xl", "2xl", "3xl"]}>
        Search and Find User
      </Text>
      <Box w="90%" m="auto" onChange={onchangeHandle}>
        <InputGroup w="50%" m="auto">
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon boxSize={6} color="black.300" />}
          />
          <Input type="tel" placeholder="Search User" />
        </InputGroup>
        <Box p={5}>
          <Button
            onClick={onSubmitHandle}
            colorScheme="facebook"
            variant="outline"
          >
            Search
          </Button>
        </Box>
      </Box>
      {/* ================== */}
      <Box w="95%" m="auto" gap={4}>
        {loading ? <DisplayCard data={data} /> : <Searchingillust />}
      </Box>
    </>
  );
};
export default Finder;
