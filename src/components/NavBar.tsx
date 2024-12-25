import { HStack, Image } from '@chakra-ui/react'
import logo from "../assets/logo.webp"
// import { ColorModeButton } from "@/components/ui/color-mode"
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch}: Props) => {
  return (
    <HStack justifyContent={'space-between'} padding={'10px'}>
        <Image src={logo} boxSize={"60px"} m={"10px"}/>
        <SearchInput onSearch={onSearch}/>
        {/* <ColorModeButton /> */}
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar