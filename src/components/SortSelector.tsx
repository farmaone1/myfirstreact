import { Button, MenuContent, MenuItem, MenuRoot, MenuTrigger } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    sortOrder: string;
}

const SortSelector = ({onSelectSortOrder, sortOrder}: Props) => {

    const sortOrders = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Data added' },
        { value: 'name', label: 'Name' },
        { value: '-released', label: 'Release date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average rating' },
    ]

    const currentSortOrder = sortOrders.find(order => order.value === sortOrder)
  return (
      <MenuRoot>
          <MenuTrigger asChild marginX={'10px'} marginBottom={5}>
              <Button variant="outline" size="sm">
                 <BsChevronDown /> Order by: {currentSortOrder?.label || 'Relevance'}
              </Button>
        </MenuTrigger>
        <MenuContent marginX={'147px'} position={'absolute'}>
           {sortOrders.map(order => <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.label}>{order.label}</MenuItem>)}
        </MenuContent>
      </MenuRoot>
    );
}

export default SortSelector