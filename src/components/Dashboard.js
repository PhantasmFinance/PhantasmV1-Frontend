import { Box, Image, Heading, Stack, Text, Button, useColorMode, Center,  Flex } from "@chakra-ui/react";
import React from "react";
import { CheckIcon} from "@chakra-ui/icons";

import abi from "../abi/abis.json";
import Web3 from "web3";
import abi2 from "../abi/abis88.json";

export const Dashboard = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const web3 = new Web3("http://127.0.0.1:8545");

  web3.eth.getAccounts().then(console.log);

  let contract = new web3.eth.Contract(abi, "0x42bcde274fbceb42d311741557c73d52a7af087e");
  let newInterest = new web3.utils.BN("50000000000000000000");

  async function closePosition() {
    const coolNumber = await contract.methods.closeInsulatedLongPosition(1, 0, 0, newInterest).send({ from: "0x28C6c06298d514Db089934071355E5743bf21d60" }).then(console.log);
    console.log("wew99");
  }

  return (
    <div>
      <Box p={3} rounded="20px" overflow="hidden" bg={colorMode === "dark" ? "gray.700" : "gray.200"} my={10} mr={5} boxShadow="dark-lg">
        <Heading mb="20px">Current Positions</Heading>
        <Box>
          <Center>
            <Flex>
              <Stack mx="25px">
                <Text  fontSize="xl">
                  Collateralized Asset
                </Text>
                <Center>
                  <Image boxSize="2rem" borderRadius="full" src="https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png"></Image>
                </Center>
              </Stack>

              <Stack mx="25px">
                <Text fontSize="xl">
                  Position
                </Text>
                <Center>
                  <Text>Long</Text>
                </Center>
              </Stack>

              <Stack mx="6px">
                <Text  fontSize="xl">
                  Debt
                </Text>
                <Center>
                  <Text>500</Text>
                </Center>
              </Stack>

              <Stack mx="6px">
                <Text  fontSize="xl">
                  Total Collateral
                </Text>
                <Center>
                  <Text>10000</Text>
                </Center>
              </Stack>

              <Stack mx="5px">
                <Center>
                  <Text  fontSize="xl">
                    Action
                  </Text>
                </Center>
                <Button variant="solid" colorScheme="red" size="sm" mt={5} boxShadow="lg" onClick={closePosition}>
                  Close Position
                </Button>
              </Stack>
              
            </Flex>
          </Center>
        </Box>
      </Box>
    </div>
  );
};
