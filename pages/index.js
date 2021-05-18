import { AspectRatio, Box, Container, Flex, Heading, Input, Text } from "@chakra-ui/react";
import Image from 'next/image'

export default function Home() {
  return (
    <Container centerContent maxWidth='120ch' height='100%'>
      <Flex
        width='100%'
        border='1px solid #DEDEDF'
        borderRadius='4px'
        flexDirection='column'
        padding={3}
        shadow='md'

      >

        <label>Video Search</label>
        <Input size='sm' marginTop={2} />
      </Flex>
      <Flex marginTop={4} width='100%'>
        <Box flex={2}>
          <AspectRatio maxWidth='1600px' ratio={16 / 9}>
            <iframe
              src='https://www.youtube.com/embed/NCtzkaL2t_Y'
            />
          </AspectRatio>
          <Box
            border='1px solid #DEDEDF'
            borderRadius='4px'
            shadow='md'
            marginTop={4}
            padding={2}
          >
            <Heading p={2} marginBottom={2} size='lg'>Video Title</Heading>
            <Text p={2} marginBottom={2}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis officia illum repellendus minus dicta laboriosam at reiciendis adipisci totam quas error maxime dolorem vero, quo, nam fugit nulla? Veritatis, quaerat?</Text>
          </Box>
        </Box>

        <Flex
          marginLeft={4}
          flexDirection='column'
          justifyContent='space-between'
          alignItems='stretch'
          flex={1}
        >
          <Flex
            justifyContent='space-between'
            alignItems='center'
            paddingBottom={4}
          >
            <Image
              src='https://images.unsplash.com/photo-1619579719466-03d5847f92ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
              width='450px'
              height='280px'
            />
            <Heading size='xs' marginLeft={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, eligendi!</Heading>
          </Flex>
          <Flex
            justifyContent='space-between'
            alignItems='center'
            paddingBottom={4}
          >
            <Image
              src='https://images.unsplash.com/photo-1619579719466-03d5847f92ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
              width='450px'
              height='280px'
            />
            <Heading size='xs' marginLeft={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, eligendi!</Heading>
          </Flex>
          <Flex
            justifyContent='space-between'
            alignItems='center'
            paddingBottom={4}
          >
            <Image
              src='https://images.unsplash.com/photo-1619579719466-03d5847f92ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
              width='450px'
              height='280px'
            />
            <Heading size='xs' marginLeft={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, eligendi!</Heading>
          </Flex>
          <Flex
            justifyContent='space-between'
            alignItems='center'
            paddingBottom={4}
          >
            <Image
              src='https://images.unsplash.com/photo-1619579719466-03d5847f92ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
              width='450px'
              height='280px'
            />
            <Heading size='xs' marginLeft={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, eligendi!</Heading>
          </Flex>
          <Flex
            justifyContent='space-between'
            alignItems='center'
            paddingBottom={4}
          >
            <Image
              src='https://images.unsplash.com/photo-1619579719466-03d5847f92ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
              width='450px'
              height='280px'
            />
            <Heading size='xs' marginLeft={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, eligendi!</Heading>
          </Flex>

        </Flex>

      </Flex>
    </Container >
  )
}
