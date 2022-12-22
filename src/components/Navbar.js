import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  StatusBar,
  Text,
} from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { tabsFun } from "../redux/slice/tabs";
import {
  account,
  cart,
  downArrow,
  homeIcon,
  users,
  addIcon,
  Rewards,
} from "../../assets";
import Home from "./Home";
import Users from "./Users";
import Deposit from "./Deposit";
import Cart from "./Cart";
import Account from "./Account";
import AppRoutes from "../appRoutes/AppRoutes";
import MyStatusBar from "./MyStatusBar";

const TABS_DATA = [
  {
    id: 1,
    pathName: "home",
    icon: homeIcon,
    component: <Home />,
    label: "Home",
  },
  {
    id: 2,
    pathName: "users",
    icon: users,
    component: <Users />,
    label: "Community",
  },
  {
    id: 3,
    pathName: "deposit",
    // component: <Deposit />
    component: <AppRoutes />,
    icon: addIcon,
  },
  {
    id: 4,
    pathName: "cart",
    icon: Rewards,
    component: <Cart />,
    label: "Rewards",
  },
  {
    id: 5,
    pathName: "account",
    icon: account,
    component: <Account />,
    label: "Profile",
  },
];

function AppBar() {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.message.currentTab);

  return (
    <>
      {/* <StatusBar bg="#18191B" barStyle="light-content" /> */}
      {/* <Box safeAreaTop bg="red.500" /> */}
      <HStack
        bg="#18191B"
        h="80px"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        maxW="100%"
        borderTopLeftRadius={"40px"}
        borderTopRightRadius={"40px"}
        style={{ overflow: "hidden", borderRadiusTopLeft: 40 }}
      >
        <HStack>
          {TABS_DATA.map((item, idx) => {
            return (
              <Button
                key={item.id}
                onPress={() => dispatch(tabsFun(item?.pathName))}
                bg={`${
                  activeTab === item.pathName ? "#FDA618" : "transparent"
                }`}
                rounded={0}
                h="80px"
                w="20%"
                p="0"
              >
                <Image
                  source={item.icon}
                  alt={item.pathName}
                  width={idx === 2 ? "48px" : "30px"}
                  h={idx === 2 ? "48px" : "30px"}
                  mt={idx === 2 ? "7" : "3"}
                  mx={"auto"}
                />
                <Text color={"#fff"} fontSize="12" mt="1">
                  {item.label}
                </Text>
              </Button>
            );
          })}
        </HStack>
      </HStack>
    </>
  );
}

export default function Example() {
  const currentTab = useSelector((state) => state.message.currentTab);
  console.log(currentTab);
  return (
    <Center>
      {TABS_DATA.map((tab) => {
        if (currentTab === tab.pathName) {
          return (
            <Box
              key={tab.pathName}
              style={{
                position: "relative",
                height: "100%",
                width: "100%",
                flexDirection: "row",
                backgroundColor: "#F5F5F5",
              }}
            >
              <HStack alignItems="center" justifyContent="center">
                <Box
                  textAlign="center"
                  marginX="auto"
                  width="100%"
                  fontSize="32px"
                  height={'100%'}
                  textTransform="uppercase"
                >
                  <MyStatusBar />
                  {tab.component}
                </Box>
              </HStack>
              <Box position="absolute" bottom={0} left={0} right={0}>
                <AppBar />
              </Box>
            </Box>
          );
        }
      })}
    </Center>
  );
}
