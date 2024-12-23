import { Platform } from '@/hooks/useGames'
import { HStack, Icon, Text } from '@chakra-ui/react';
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons';
import React from 'react';

interface Props {
    platforms : Platform[];
}



const PlatformIconsList = ({ platforms }: Props) => {

  const iconsMap : {[key:string] : any} = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux:  FaLinux,
    android: FaAndroid,
    iphone: MdPhoneIphone,
    web: BsGlobe
  }
  return (
    <HStack marginY={'10px'}>
        
        {platforms.map((platform) => {
            return <Icon color="gray.500"><FaWindows/></Icon>
        })}  
    </HStack> 
  )
}

export default PlatformIconsList