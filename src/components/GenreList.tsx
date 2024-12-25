import useGenres, { Genre } from '@/hooks/useGenres'
import getCroppedImageUrl from '@/services/image-url';
import { Button, Heading, HStack, Image, List, Spinner  } from '@chakra-ui/react';

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({selectedGenre, onSelectGenre}: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner/>;

  return (
    <>
        <Heading fontSize={'2xl'} marginBottom={2}>Genres</Heading>
        <List.Root>
            {data.map(genre => (
            <List.Item key={genre.id} paddingY={'5px'} listStyle="none" overflow={'hidden'}>
                <HStack>
                    <Image objectFit={'cover'} boxSize={'32px'} src={getCroppedImageUrl(genre.image_background)} borderRadius={8}/>
                    <Button whiteSpace={'normal'} background={genre.id === selectedGenre?.id ? 'border' : 'normal' } fontSize={'lg'} variant='ghost' onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
                </HStack> 
            </List.Item>))}
        </List.Root> 
    </>
  ) 
}

export default GenreList