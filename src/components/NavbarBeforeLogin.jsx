import React from "react";
// import {Box,Heading} from "@chakra-ui/react"
import style from "./NavbarBeforeLogin.module.css";
import {

  Box,
  Spacer,
  Image,
  Text,
  HStack,

  Drawer,
  DrawerBody,

  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { NavLink, Link } from "react-router-dom";
import clipnex_logo from "../images/clipnex_logo_blue.png";

const NavbarBeforeLogin = () => {
  const [size, setSize] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  return (
    <div className={style.mainDiv} >
      <div className={style.navbar_container}>
        <HStack alignItems="center">
          <Box>
            <Link to={`/`}>
              <Image
                className={style.logo}
                src={clipnex_logo}
              />
            </Link>
          </Box>
          <Spacer />
          <Box className={style.large_screen_menu}>
            <NavLink
              to={`/`}
              style={({ isActive }) => ({ color: isActive ? '#000080' : 'inherit' })}
            >
              <Text>Home</Text>
            </NavLink>
            <NavLink
              to={`/pricing`}
              style={({ isActive }) => ({ color: isActive ? '#000080' : 'inherit' })}
            >
              <Text>Pricing</Text>
            </NavLink>
            <NavLink
              to={`/service`}
              style={({ isActive }) => ({ color: isActive ? '#000080' : 'inherit' })}
            >
              <Text>Service</Text>
            </NavLink>
            <NavLink
              to={`/products`}
              style={({ isActive }) => ({ color: isActive ? '#000080' : 'inherit' })}
            >
              <Text>Products</Text>
            </NavLink>
            <NavLink
              to={`/about`}
              style={({ isActive }) => ({ color: isActive ? '#000080' : 'inherit' })}
            >
              <Text>About</Text>
            </NavLink>

            <button className={style.signupbtn}>
              <a href='https://wa.me/+2348108439416' target="_blank" rel="noopener noreferrer">
                Contact us
              </a>
            </button>
          </Box>
          <Box className={style.hamburger} onClick={() => handleClick("xs")}>
          <i style={{ fontSize: "25px", color: "#000080" }} className="fa-solid fa-bars" />
            <Drawer onClose={onClose} isOpen={isOpen} size={size}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>
                  <Link to={`/`}>
                    {" "}
                    <Image
                      src={clipnex_logo}
                      h="70px"
                      w="120px"
                    />
                  </Link>
                </DrawerHeader>
                <DrawerBody>
                  <VStack>
                    <Box >
                      <NavLink
                        to={`/`}
                        style={({ isActive }) => ({ color: isActive ? '#000080' : 'inherit' })}
                      >
                        <Text>Home</Text>
                      </NavLink>
                      <NavLink
                        to={`/pricing`}
                        style={({ isActive }) => ({ color: isActive ? '#000080' : 'inherit' })}
                      >
                        <Text>Pricing</Text>
                      </NavLink>
                      <NavLink
                        to={`/service`}
                        style={({ isActive }) => ({ color: isActive ? '#000080' : 'inherit' })}
                      >
                        <Text>Service</Text>
                      </NavLink>
                      <NavLink
                        to={`/products`}
                        style={({ isActive }) => ({ color: isActive ? '#000080' : 'inherit' })}
                      >
                        <Text>Products</Text>
                      </NavLink>
                      <NavLink
                        to={`/about`}
                        style={({ isActive }) => ({ color: isActive ? '#000080' : 'inherit' })}
                      >
                        <Text>About</Text>
                      </NavLink>

                      <button>
                        <a href='https://wa.me/+2348108439416' target="_blank" rel="noopener noreferrer">
                          Contact us
                        </a>
                      </button>
                    </Box>
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>
        </HStack>
      </div>
    </div>
  );
};

export default NavbarBeforeLogin;
