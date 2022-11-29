import { NavLink } from "react-router-dom";
import { Box, Button, Stack } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
const links = [
  { id: "1", title: "Home", path: "/" },
  { id: "2", title: "Finder ", path: "/finder" },
  { id: "3", title: "Github Stars", path: "/githubstars" },
  { id: "4", title: "Trending Repo", path: "/repo" },
  { id: "5", title: "About Project", path: "/about" },
];

function Navbar() {
  return (
    <div>
      <Stack
        direction="row"
        spacing={4}
        align="center"
        justifyContent="space-around"
        p={4}
      >
        <Box display="inline-flex">
          <FaGithub size="3rem" />
        </Box>
        <Box fontSize={["22px", "25px", "32px"]}>
          {links.map((link) => (
            <NavLink key={link.path} to={link.path} end>
              <Button
                colorScheme="dark"
                variant="ghost"
                fontSize={["sm", "md", "lg"]}
              >
                {link.title}
              </Button>
            </NavLink>
          ))}
        </Box>
      </Stack>
    </div>
  );
}

export default Navbar;
