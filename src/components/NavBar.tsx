import { HStack, Image, Text } from '@chakra-ui/react'
import logo from "../assets/logo.webp"
import { ColorModeButton } from "@/components/ui/color-mode"
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'} padding={'10px'}>
        <Image src={logo} boxSize={"60px"} m={"10px"}/>
        {/* <ColorModeButton /> */}
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar