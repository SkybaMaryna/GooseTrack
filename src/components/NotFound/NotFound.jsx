import { NavLink } from "react-router-dom";
import { MainSubTitle, NotFoundBox, Text } from "./NotFound.styled";
import { AiOutlineRobot } from "react-icons/ai";

const NotFound = () => {
  return <NotFoundBox>
     <MainSubTitle>Oops! 404 Page not found! <AiOutlineRobot size={60}/></MainSubTitle>
      <Text>Here is helpful link:</Text>
      <NavLink to="/">Home</NavLink>
  </NotFoundBox>;
};

export default NotFound;
