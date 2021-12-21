import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  Select,
  Stack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

function App() {
  return (
    <Stack overflowX="hidden" spacing={5}>
      <Flex
        id="splash"
        as="section"
        direction="column"
        maxWidth="100vw"
        aria-label="Health for Life Splash Image"
      >
        <Image
          width="30vw"
          mb="-10.8vw"
          alignSelf="flex-end"
          zIndex={10}
          alt="Health for Life"
          src="/logo.svg"
        />
        <Image
          boxShadow="0.5em 0.75em 1.2em 0 rgba(0, 0, 0, 0.4)"
          width="100%"
          maxHeight="600px"
          maxWidth="1240px"
          alt="silhouettes of children jumping against a sunset background"
          src="/splash.jpg"
        />
      </Flex>
      <HStack
        id="ceo-message"
        as="section"
        direction="row"
        align="center"
        spacing={1}
      >
        <Image
          borderRadius="full"
          borderWidth="0.3em"
          borderStyle="solid"
          borderColor="brand.900"
          mr={3}
          width="30vw"
          maxWidth="400px"
          alt="Health for Life CEO"
          src="/ceo.png"
        />
        <Flex direction="column">
          <Text size="md" variant="quotation">
            Here at Health for Life, we care about both your health{" "}
            <Text as="span" variant="emphasis">
              and
            </Text>{" "}
            your life.
          </Text>
          <Text alignSelf="flex-end">- Sandra Williams, CEO</Text>
        </Flex>
      </HStack>
      <Box as="section" id="network-stats" bg="brand.900" color="brand.200">
        <Heading>Our Network</Heading>
        <Flex direction="column" align="center">
          <Text>
            <Text as="span" size="xl">
              120
            </Text>{" "}
            doctors
          </Text>
          <Text>
            <Text as="span" size="xl">
              3
            </Text>{" "}
            campuses
          </Text>
          <Text>
            over{" "}
            <Text as="span" size="xl">
              120,000
            </Text>{" "}
            patients
          </Text>
        </Flex>
      </Box>
      <Box as="section" id="testimonials">
        <Heading>Testimonials</Heading>
        <VStack
          divider={<StackDivider borderColor="brand.600" aria-hidden="true" />}
          alignItems="flex-start"
        >
          <Text variant="quotation">
            I appreciate the concern for my life, in addition to my health.
          </Text>
          <Text variant="quotation">
            Undoubtedly one of the top 50 healthcare networks I&apos;ve ever
            used!
          </Text>
          <Text variant="quotation">
            I have never once cried while visiting any of my doctors.
          </Text>
        </VStack>
      </Box>
      <Box as="section" id="join-us">
        <Heading>Join Us!</Heading>
        <Stack direction="column" spacing={3}>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="full-name">
            <FormLabel>Full Name</FormLabel>
            <Input />
          </FormControl>
          <FormControl id="region">
            <FormLabel>Region</FormLabel>
            <Select id="region" name="region">
              <option>Africa</option>
              <option>Asia</option>
              <option>Australia</option>
              <option>Europe</option>
              <option>North America</option>
              <option>South America</option>
            </Select>
          </FormControl>
        </Stack>
        <Button colorScheme="brand" bg="black" color="white">
          Sign Up for Mailing List
        </Button>
      </Box>
    </Stack>
  );
}

export default App;
