import { Platform } from '@/hooks/useGames'
import {  HStack } from '@chakra-ui/react';
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';

interface Props {
    platforms : Platform[];
}



const PlatformIconsList = ({ platforms }: Props) => {

  const iconsMap = {
    "pc": <FaWindows/>,
    "playstation": <FaPlaystation/>,
    "xbox": <FaXbox/>,
    "nintendo": <SiNintendo/>,
    "mac": <FaApple/>,
    "linux": < FaLinux/>,
    "android": <FaAndroid/>,
    "iphone": <MdPhoneIphone/>,
    "web": <BsGlobe/>
  }
  return (
    <HStack marginY={'10px'} color={"gray.500"}>
        {platforms.map((platform) => {
            return <>{iconsMap[platform.slug as keyof typeof iconsMap]}</>;
        })}  
    </HStack> 
  )
}

export default PlatformIconsList