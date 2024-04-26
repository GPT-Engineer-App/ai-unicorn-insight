import { Box, Button, Container, Flex, Heading, Input, Text, VStack, Image, useToast } from "@chakra-ui/react";
import { FaCalculator, FaNewspaper, FaDollarSign } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleSubscribe = () => {
    toast({
      title: "Subscription Successful",
      description: "You've successfully subscribed to AI Unicorns Newsletter!",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  const handleCalculatePotential = () => {
    toast({
      title: "Calculation Complete",
      description: "Based on the provided metrics, your startup has high potential to be an AI Unicorn!",
      status: "info",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} bg="black" color="white">
        <Heading as="h1" size="2xl" color="white">
          AI Unicorns
        </Heading>
        <Text fontSize="xl" color="white">
          Discover the potential of AI startups and learn from the success stories of AI unicorns.
        </Text>
        <Image src="https://example.com/new-unicorn-image.jpg" alt="AI Unicorn" boxSize="200px" />

        <Flex w="full" justify="space-between" align="center">
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Heading fontSize="xl">Subscribe to our Newsletter</Heading>
            <Text mt={4}>Get exclusive insights and case studies right to your inbox.</Text>
            <Input placeholder="Enter your email" mt={4} />
            <Button leftIcon={<FaNewspaper />} colorScheme="purple" mt={4} onClick={handleSubscribe}>
              Subscribe
            </Button>
          </Box>

          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md" ml={10}>
            <Heading fontSize="xl" color="white">
              AI Unicorn Potential Calculator
            </Heading>
            <Text mt={4} color="white">
              Enter your startup's metrics to see if you could be the next AI Unicorn. Include factors like market size, technology innovation, and team expertise.
            </Text>
            <Input placeholder="Customer Acquisition Cost (CAC)" mt={4} />
            <Text fontSize="sm" color="gray.400" mt={2}>
              Typical CAC values for AI Unicorns range from $20 to $100 per customer.
            </Text>
            <Input placeholder="Monthly Recurring Revenue (MRR)" mt={4} />
            <Input placeholder="Market Size" mt={4} />
            <Input placeholder="Technology Innovation Level" mt={4} />
            <Input placeholder="Team Expertise" mt={4} />
            <Button leftIcon={<FaCalculator />} colorScheme="teal" mt={4} onClick={handleCalculatePotential}>
              Evaluate Unicorn Potential
            </Button>
          </Box>
        </Flex>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl">Why AI Unicorns?</Heading>
          <Text mt={4}>AI Unicorns are startups valued at over $1 billion. These companies are not just successful financially; they are also innovators in applying artificial intelligence to solve real-world problems.</Text>
          <Button leftIcon={<FaDollarSign />} colorScheme="orange" mt={4}>
            Learn More
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
