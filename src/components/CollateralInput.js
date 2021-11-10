	
	import { Menu, MenuButton, MenuList, MenuItem, Box,Input, Button, Text, Stack,  Flex } from "@chakra-ui/react";
	import React, { useState } from "react";
	import { ChevronDownIcon } from "@chakra-ui/icons";
	import {useMoralisWeb3Api } from "react-moralis";
	import { HStack} from "@chakra-ui/react"
	import "./CollateralInput.css";
	
	export const CollateralInput = ({ data, setitems , collateralToken, setCollateralToken, setCollateralTokenValue }) => {
	
		//const { Moralis } = useMoralisWeb3Api();
	

	
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
						<Input placeholder="Value" p={5} minHeight={16} h={30} w="70%" />
	
						<MenuButton as={Button} w="30%" rightIcon={<ChevronDownIcon />}   colorScheme="blue" bgGradient="linear(to-r, #9D8DF1, #B8CDF8, #1CFEBA)" p={5} minHeight={16} h={30} >
							<p>{collateralToken}</p>
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
						<em>Total Balance: 0.00 {collateralToken}</em>
					</Text>
				</Box>
			</Box>
		);
	};
	