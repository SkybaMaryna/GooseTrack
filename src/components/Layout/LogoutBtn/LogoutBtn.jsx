import { FiLogOut } from "react-icons/fi";
import {Button, IconLogOut} from "./LogoutBtn.styled"

export const ButtonLogOut = () => {
    return  <Button>Log out
          <IconLogOut><FiLogOut/></IconLogOut>
        </Button>
 };