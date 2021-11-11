import { Menu, MenuButton, MenuList, MenuItem,  Input, Box, Button, Text, Stack,  Flex,} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import {useMoralisWeb3Api } from "react-moralis";

export const LeveragedTokenDropdown = ({ data,  leveragedToken, setLeveragedToken, setLeveragedTokenValue , leveragedTokenValue}) => {


	const Web3Api = useMoralisWeb3Api();




  const [value, setValue] = useState('');
  const onChange = (event) => {
    setValue(event.target.value);
  };





	return (
		<Box>
			<Text as="h2" fontWeight="bold" mb={2}>
				LEVERAGED ASSET
			</Text>
			<Flex>
				<Menu>
					<Input placeholder="Value" p={5} minHeight={16} h={30} w="70%"   onChange={e => setLeveragedTokenValue(e.target.value)}/>
										
					<MenuButton as={Button} w="30%" rightIcon={<ChevronDownIcon />} colorScheme="blue" bgGradient="linear(to-r, #9D8DF1, #B8CDF8, #1CFEBA)" p={5} minHeight={16} h={30} defaultValue="DAI">
					      {leveragedToken}
					</MenuButton>				

					<MenuList>
						{data.map((item) =>(
							<MenuItem
								minH="40px"
								value={item.tokenSymbol}
								onClick={(event) => {
								const selectedToken = event.currentTarget.value;
								setLeveragedToken(selectedToken);
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
		</Box>
	);
};
