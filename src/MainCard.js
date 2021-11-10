import { Box, Image, Stack, Badge, Text, Button, useColorMode, Center, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Flex } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { ChevronRightIcon, ChevronDownIcon, InfoIcon} from "@chakra-ui/icons";
import { PositionOption } from "./components/PositionOption";
import { useMoralisWeb3Api, useWeb3ExecuteFunction, useMoralis, Moralis } from "react-moralis";
import axios from 'axios';
import abi from "./abi/abis.json";
import Web3 from "web3";
import abi2 from "./abi/abis88.json";
import { CollateralInput } from "./components/CollateralInput";
import { LeveragedTokenDropdown } from "./components/LeveragedTokenDropdown";



export const MainCard = ({ _asset, _protocol, _totalTokensLocked, _totalUSDLocked }) => {
	const Web3Api = useMoralisWeb3Api();

	//USE THIS CODE TO EXECUTE FUNCTION WITH MORALIS
	// const ExecuteOpenPositionFunction = () => {
	// 	const { data, error, fetch, isFetching, isLoading } = useWeb3ExecuteFunction({
	// 		abi: abi,
	// 		contractAddress: "0x42bcde274fbceb42d311741557c73d52a7af087e",
	// 		functionName: "openInsulatedLongPositionNFT",
	// 		params: {
	// 			_longToken: { leveragedTokenAddress },
	// 			_borrowFactor: 50,
	// 			_assetAmount: AssetAmount,
	// 			_initialBorrow: initialBorrow,
	// 			_depositId: 1,
	// 			stableFundAmount: AssetinDai,
	// 		},
	// 	});

	//   return (<div>
	//     {error && <ErrorMessage error={error} />}
	//     <button onClick={() => fetch()} disabled={isFetching}>Fetch data</button>
	//     {data && <pre>
	//       {JSON.stringify(data),
	//         null,
	//         2,
	//       )}
	//     </pre>}
	//   </div>)
	// }

	async function getUserBalance() {
		await Web3Api.account.getTokenBalances({ address: { collateralToken } });
	}

	async function changeCollateralToken(event) {
		setCollateralToken(event.currentTarget.value);
		setCollateralLogo(await Web3Api.token.getTokenMetadata({ addresses: event.currentTarget.value }));
	}

	const getCollateralAddress = (collateralToken) => {
		setCollateralTokenAddress(collateralToken.address);
	};

	const getLeveragedAddress = (leveragedToken) => {
		setLeveragedTokenAddress(leveragedToken.address);
	};

	const [positionType, setPosition] = useState("LONG");
	const positionChange = (value) => {
		setPosition(value);
	};



	const [collateralToken, setCollateralToken] = useState("DAI");
	const [leveragedToken, setLeveragedToken] = useState("WETH");


	const [leveragedTokenValue, setLeveragedTokenValue] = useState("0");
	const [collateralTokenValue, setCollateralTokenValue] = useState("0");






	const [collateralLogo, setCollateralLogo] = useState("https://cdn.moralis.io/eth/0x6b175474e89094c44da98b954eedeac495271d0f.png");
	const [collateralTokenAddress, setCollateralTokenAddress] = useState("0x6B175474E89094C44Da98b954EedeAC495271d0F");
	const [amountIn, setAmountIn] = useState("");


	const [leveragedLogo, setLeveragedLogo] = useState("https://cdn.moralis.io/eth/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png");
	const [leveragedTokenAddress, setLeveragedTokenAddress] = useState("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2");







	const compoundColorScheme = "green";
	const aaveColorScheme = "purple";
	const daiViaAavePool = "0x6D97eA6e14D35e10b50df9475e9EFaAd1982065E";
	const daiViaCompoundPool = "0x11B1c87983F881B3686F8b1171628357FAA30038";
	const [pool, setPool] = useState("");

	const { colorMode, toggleColorMode } = useColorMode();
	const [leverageAmount, setLeverageAmount] = useState(1);

	const loanAmount = amountIn * leverageAmount;





	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);
	const [error, setError] = useState(null);
  
	useEffect(() => {
		axios.get("https://api.88mph.app/pools",
		  {
			query:  `{        
			} `
		  }
		  ).then(
			(result) => {
			  setIsLoaded(true);
			  setItems(result.data);
			},
			(error) => {
			  setIsLoaded(true);
			  setError(error);
			}
		  )

	
	  }, [])





	return (
		<div className="app">
			<Box rounded="20px" overflow="hidden" bg={colorMode === "dark" ? "gray.700" : "gray.200"} boxShadow="dark-lg" p={3}>
				<Center>
					<Stack align="center">
						<Image src={collateralLogo} alt="Card Image" boxSize="80px" mt={5}></Image>
						<Badge variant="solid" colorScheme="grey" rounded="full" px={3} py={1} align="center">
							Collateral Asset
							<br />
							{collateralToken}
						</Badge>
					</Stack>
					<ChevronRightIcon w={8} h={8} />
					<Stack align="center">
						<Image src="https://cryptologos.cc/logos/aave-aave-logo.png" alt="Card Image" boxSize="80px" mt={5}></Image>
						<Badge variant="solid" colorMode="light" colorScheme={aaveColorScheme} rounded="full" px={3} py={1} align="center">
							Lending Protocol
							<br />
							AAVE
						</Badge>
					</Stack>
					<ChevronRightIcon w={8} h={8} />
					<Stack align="center">
						<Image src={leveragedLogo} alt="Card Image" boxSize="80px" mt={5}></Image>
						<Badge variant="solid" colorScheme="grey" rounded="full" px={3} py={1} align="center">
							Leveraged Asset
							<br />
							{leveragedToken}
						</Badge>
					</Stack>
				</Center>
				<Box p={5}>
					<PositionOption positionType={positionType} positionChange={positionChange} />
					<Box my={3}>
						<CollateralInput data={items} setItems={setItems} setCollateralTokenValue={setCollateralTokenValue} collateralToken={collateralToken} setCollateralToken={setCollateralToken}  />
					</Box>
					<Center>
						<ChevronDownIcon w={10} h={10} />
					</Center>
					<Box my={3}>
						<LeveragedTokenDropdown data={items} setItems={setItems} leveragedToken={leveragedToken} setLeveragedToken={setLeveragedToken} setLeveragedTokenValue={setLeveragedTokenValue} />
					</Box>
					<Text as="h2" fontWeight="normal" mt={5}>
						Leverage: {leverageAmount}X
					</Text>
					<Slider
						aria-label="card-leverage-slider"
						defaultValue={0}
						min={1}
						max={10}
						step={1}
						mt={2}
						onChange={(val) => {
							const currentLeverageAmount = val;
							setLeverageAmount(currentLeverageAmount);
						}}
					>

						<SliderTrack bg="green.100">
								<Box position="relative" right={10} />
								<SliderFilledTrack bg={aaveColorScheme} />
						</SliderTrack>
						<SliderThumb boxSize={6} />

					</Slider>

					<Center>
						<ChevronDownIcon w={8} h={8} my={4} />
					</Center>
					<Flex mt={5}>
						<InfoIcon mt={1} mr={2} />
						<Text as="h2" fontWeight="bold">
							CONFIRM POSITION
						</Text>
					</Flex>
					<Box border="1px" borderColor="gray.200" borderRadius="md" p={2} bg="gray.800" boxShadow="dark-lg" my={3} fontSize={18}>
						{positionType} {leveragedToken} with {leverageAmount}X Leverage. <br />
						{amountIn}
						{collateralToken} Collateral. <br />
						Loan Amount: {amountIn * leverageAmount} DAI.
					</Box>
					<Center>
						<Button  p={4} variant="solid" colorScheme="green" size="m" mt={5} bgGradient="linear(to-r, #9D8DF1, #B8CDF8, #1CFEBA)" boxShadow="lg" fontSize="15px" borderRadius={20}>
							Enter Position
						</Button>
					</Center>
					<Text>
						Collateral Asset: <br />
						{collateralTokenAddress}
						<br />
						Leveraged Asset: <br />
						{leveragedTokenAddress}
						{leveragedTokenValue}
						<br />
					</Text>
				</Box>
			</Box>
		</div>
	);
};
