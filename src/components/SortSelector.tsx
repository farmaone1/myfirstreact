import { Button, MenuContent, MenuItem, MenuRoot, MenuTrigger } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

const SortSelector = () => {
  return (
      <MenuRoot>
          <MenuTrigger asChild marginX={'10px'} marginBottom={5}>
              <Button variant="outline" size="sm">
                 <BsChevronDown /> Order by: Relevance
              </Button>
        </MenuTrigger>
        <MenuContent marginX={'147px'} position={'absolute'}>
           <MenuItem value="">Relevance</MenuItem>
           <MenuItem value="">Date added</MenuItem>
           <MenuItem value="">Name</MenuItem>
           <MenuItem value="">Release day</MenuItem>
           <MenuItem value="">Popularity</MenuItem>
           <MenuItem value="">Average rating</MenuItem>
        </MenuContent>
      </MenuRoot>
    );
}

export default SortSelector