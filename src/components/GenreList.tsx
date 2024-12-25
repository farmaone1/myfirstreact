import useGenres, { Genre } from '@/hooks/useGenres'
import getCroppedImageUrl from '@/services/image-url';
import { Button, HStack, Image, List, Spinner  } from '@chakra-ui/react';

interface Props {
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({onSelectGenre}: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner/>;

  return (
    <List.Root>
        {data.map(genre => (
        <List.Item key={genre.id} paddingY={'5px'} listStyle="none">
            <HStack>
                <Image boxSize={'32px'} src={getCroppedImageUrl(genre.image_background)} borderRadius={8}/>
                <Button fontSize={'lg'} variant='ghost' onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
            </HStack> 
        </List.Item>))}
    </List.Root> 
  ) 
}

export default GenreList