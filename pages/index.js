import { AspectRatio, Box, Button, Container, Flex, Heading, Input, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";
import Image from 'next/image'
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

const VideoSearch = ({ handleSearch }) => {
  const handleKeyPress = event => {
    if (event.key === 'Enter' && event.target.value) {
      handleSearch(event.target.value)
    }
  }
  return (
    <Flex
      width='100%'
      border='1px solid #DEDEDF'
      borderRadius='4px'
      flexDirection='column'
      padding={3}
      shadow='md'
    >
      <label>Video Search</label>
      <Input
        size='sm'
        marginTop={2}
        onKeyPress={handleKeyPress}
      />
    </Flex>
  )
}

const Sidebar = ({ videos }) => {
  return (
    <Flex
      marginLeft={4}
      flexDirection='column'
      justifyContent='space-between'
      alignItems='stretch'
      flex={1}
    >
      {videos && videos.map(video => {
        return (
          <Flex
            key={video.id}
            justifyContent='space-evenly'
            alignItems='center'
            paddingBottom={4}
            borderBottom='1px solid #DEDEDF'
          >
            <Image
              src={video.thumbnails.high.url}
              width='160px'
              height='90px'
              flex={1}
            />
            <Text flex={2} size='1px' marginLeft={2}>{video.title}</Text>
          </Flex>
        )
      })}



    </Flex>
  )
}

const VideoDescription = ({ title, description }) => {
  return (
    <Box
      border='1px solid #DEDEDF'
      borderRadius='4px'
      marginTop={4}
      padding={2}
    >
      <Heading p={2} marginBottom={2} size='lg'>{title}</Heading>
      <Text p={2} marginBottom={2}>{description}</Text>
    </Box>
  )
}


const VideoPlayer = ({ videoInfo }) => {
  return (
    <Box flex={2}>
      <AspectRatio maxWidth='1600px' ratio={16 / 9}>
        <iframe
          src={`https://www.youtube.com/embed/${videoInfo?.id}`}
        />
      </AspectRatio>
      <VideoDescription title={videoInfo?.title} description={videoInfo?.description} />
    </Box>

  )
}

export default function Home() {
  const [keyword, setKeyword] = useState('beatles')

  useEffect(() => {
    refetch()
  }, [keyword])

  const handleSearch = async () => {
    return await axios({
      method: 'get',
      url: '/api/search',
      params: {
        keyword: keyword
      }
    })
  }

  const { isLoading, error, data, refetch } = useQuery('videos', handleSearch)
  return (
    <Container centerContent maxWidth='120ch' height='100%'>
      <VideoSearch handleSearch={(text) => setKeyword(text)} />
      {isLoading ? <Spinner /> :
        <Flex marginTop={4} width='100%'>
          <VideoPlayer videoInfo={data?.data.currentPage[0]} />
          <Sidebar videos={data?.data.currentPage.slice(1,)} />
        </Flex>
      }
    </Container >
  )
}
