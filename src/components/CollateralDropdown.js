import { Menu, MenuButton, MenuList, MenuItem, Box, Button, Text, Stack, Input, Center, Flex } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const tokenSymbols = ["USDC", "yCRV", "DAI", "UNI", "CRV:oBTC", "CRV:HUSD", "aLINK v1", "crvRenWSBTC"];
const onTrigger = (event) => {
	this.props.parentCallback(event.target.myname.value);
	event.preventDefault();
};

export const CollateralDropdown = () => {
	const Web3Api = useMoralisWeb3Api();


	const [collateralToken, setCollateralToken] = useState("");
	const [amountIn, setAmountIn] = useState("");
	const [tokenAddress, setTokenAddress] = useState("");
	const [tokenBalance, setTokenBalance] = useState("");
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);

	useEffect(() => {
		const result = axios
			.get("https://api.88mph.app/pools", {
				query: `{        
        } `,
			})
			.then(
				(result) => {
					setIsLoaded(true);
					setItems(result.data);
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			);
	}, []);

	const getTokenBalance = async (_address) => {
		const tokenBalances = await Web3Api.account.getTokenBalances();
		for (let i = 0; i < tokenBalances.length; i++) {
			if (tokenBalances[i].token_address == _address) {
				return tokenBalances.balance;
			}
		}
	};

	return (
		<Box>
			<Text as="h2" fontWeight="bold">
				SUPPLY
			</Text>
			<Box border="1px" borderColor="gray.200" borderRadius="md" p={2} bg="gray.800" boxShadow="dark-lg">
				<Flex>
					<Menu>
						<MenuButton as={Button} w="120px" rightIcon={<ChevronDownIcon />} colorScheme="blue" bgGradient="linear(to-r, #9D8DF1, #B8CDF8, #1CFEBA)">
							{collateralToken}
						</MenuButton>

						<MenuList>
							{items.map((item) => (
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
					<Input value={amountIn} placeholder="0.0" border="none" alignSelf="right" onChange={(event) => setAmountIn(event.currentTarget.value)} />
				</Flex>
				<Text fontSize="xs" onClick={(event) => setAmountIn({ tokenBalance })}>
					<em>
						Balance: {tokenBalance}
						{collateralToken}
					</em>
				</Text>
			</Box>

			<Center>
				<ChevronDownIcon w={16} h={16} />
			</Center>
		</Box>
	);
};
