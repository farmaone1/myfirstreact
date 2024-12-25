import { Platform } from '@/hooks/useGames';
import usePlatforms from '@/hooks/usePlatforms'
import { Button, MenuContent, MenuItem, MenuRoot, MenuTrigger } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}


const PlatformSelector = ({onSelectPlatform, selectedPlatform}: Props) => {

  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <MenuRoot>
        <MenuTrigger asChild marginX={'10px'}>
            <Button variant="outline" size="sm">
               <BsChevronDown /> {selectedPlatform?.name || 'Platforms'} 
            </Button>
      </MenuTrigger>
      <MenuContent position={'absolute'} marginX={'10px'}>
        {data.map(platform => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id} value={platform.name}>{platform.name}</MenuItem>)}
      </MenuContent>
    </MenuRoot>
  )
}

export default PlatformSelector