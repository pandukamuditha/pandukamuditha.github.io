import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  GridItem,
  Center,
  Container,
  Flex,
  Image,
  Heading,
  Divider,
  Stack
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex
      bg="#1B2430"
      w="100vw"
      h="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        direction={["column", "row"]}
      >
        <Image
          w="20rem"
          borderRadius='full'
          src='images/dp.png'
          alt='Panduka Liyanathanthri'
        />
        <Divider orientation="vertical" w='2rem'/>
        <Stack
          direction="column"
        >
          <Flex
            h='50%'
            direction="column"
            justifyContent="flex-end"
          >
            <Heading color="white" size="xl" as='h1'>Panduka Liyanathanthri</Heading>
            <Text color="white" fontSize='lg' as='h2'>Software Developer</Text>
          </Flex>
        </Stack>
      </Stack>
      {/* <Grid
        w="calc(40vw)"
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(5, 1fr)'
        gap={4}
        margin="auto"
      >
        <GridItem colSpan={2} rowSpan={2}>
          <Flex
            w="100%"
            h="100%"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Stack direction='row' h='100%'>
              <Flex alignItems="center" gap={2}>
                <Image
                  w="100%"
                  borderRadius='full'
                  src='images/dp.png'
                  alt='Panduka Liyanathanthri'
                />
                <Divider orientation='vertical' height="70%" position="relative" />
              </Flex>
            </Stack>
          </Flex>
        </GridItem>
        <GridItem colSpan={3}>
          <Flex
            h="100%"
            direction="column"
            justifyContent="flex-end"
          >
            <Heading color="white" size="xl">Panduka Liyanathanthri</Heading>
            <Text color="white" fontSize='lg'>Software Developer</Text>
          </Flex>
        </GridItem>
        <GridItem colSpan={2}>

        </GridItem>
      </Grid> */}
    </Flex>
  </ChakraProvider>
)
