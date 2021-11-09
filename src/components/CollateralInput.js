import { Menu, MenuButton, MenuList, MenuItem, Box, Button, Text, Stack,  Flex } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { Link } from "react-router-dom";

export const CollateralInput = ({ data, setitems , leverageToken }) => {

	//const { Moralis } = useMoralisWeb3Api();

	const [collateralToken, setCollateralToken] = useState("UNI");

	const Web3Api = useMoralisWeb3Api();

	const getBalances = async () => {
		const userBalance = await Web3Api.account.getTokenBalances();
	};

	return (
		<Box>
			<Text as="h2" fontWeight="bold" mb={2}>
				COLLATERAL
			</Text>
			<Box border="1px" borderColor="gray.200" borderRadius="md" p={2} bg="gray.800" boxShadow="dark-lg">
				<Flex>
				<Menu>
					<MenuButton as={Button} w="100%" rightIcon={<ChevronDownIcon />} colorScheme="blue" bgGradient="linear(to-r, #9D8DF1, #B8CDF8, #1CFEBA)" p={5} minHeight={16} h={30} defaultValue="DAI">
						{collateralToken}
						</MenuButton>				
					<MenuList>
						{data.map((item) =>(
							<MenuItem
								minH="40px"
								value={item.tokenSymbol}
								onClick={(event) => {
								const selectedToken = event.currentTarget.value;
								setCollateralToken(selectedToken);
								}}
							>
									<Stack>
										<span>{item.tokenSymbol}</span>
									</Stack>

							</MenuItem>

						))}

					</MenuList> 
				</Menu>
				
				</Flex>
				<Text fontSize="xs" >
					{console.log({ getBalances })}
					<em>Balance: 0.00 {collateralToken}</em>
				</Text>
			</Box>
		</Box>
	);
};
