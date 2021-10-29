import { Box, Image, Stack, Badge, Text, Button, useColorMode, Center, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Flex, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { ChevronRightIcon, ChevronDownIcon, InfoIcon, TriangleDownIcon } from "@chakra-ui/icons";
import { PositionOption } from "./PositionOption";
import { CollateralDropdown } from "./CollateralDropdown";
import { BorrowDropdown } from "./BorrowDropdown";
import { useMoralisWeb3Api, useWeb3ExecuteFunction, useMoralis, Moralis } from "react-moralis";
import abi from "./abi/abis.json";
import Web3 from "web3";
import abi2 from "./abi/abis88.json";
import { CollateralInput } from "./CollateralInput";
import { LeveragedTokenDropdown } from "./LeveragedTokenDropdown";

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

	const [collateralLogo, setCollateralLogo] = useState("https://cdn.moralis.io/eth/0x6b175474e89094c44da98b954eedeac495271d0f.png");
	const [collateralTokenAddress, setCollateralTokenAddress] = useState("0x6B175474E89094C44Da98b954EedeAC495271d0F");
	const [amountIn, setAmountIn] = useState("");
	const logoChange = (collateralToken) => {
		setCollateralLogo(collateralToken.logo);
	};

	const [leveragedLogo, setLeveragedLogo] = useState("https://cdn.moralis.io/eth/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png");
	const [leveragedTokenAddress, setLeveragedTokenAddress] = useState("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2");
	const [leverageIn, setLeverageIn] = useState("");
	const leveragedLogoChange = (leveragedToken) => {
		setLeveragedLogo(leveragedToken.logo);
	};

	const compoundColorScheme = "green";
	const aaveColorScheme = "purple";
	const daiViaAavePool = "0x6D97eA6e14D35e10b50df9475e9EFaAd1982065E";
	const daiViaCompoundPool = "0x11B1c87983F881B3686F8b1171628357FAA30038";
	const [pool, setPool] = useState("");

	const handlePoolChange = (value) => {
		setPool(value);
	};
	const { colorMode, toggleColorMode } = useColorMode();
	const [leverageAmount, setLeverageAmount] = useState(1);

	const loanAmount = amountIn * leverageAmount;

	const state = {
		name: "",
	};
	const handleCallback = (childData) => {
		this.setState({ name: childData });
	};

	const web3 = new Web3("http://127.0.0.1:8545");

	web3.eth.getAccounts().then(console.log);

	let AssetAmount = new web3.utils.BN("11000000000000000000000");

	let initialBorrow = new web3.utils.BN("50000000000000000000");

	let maxApproval = new web3.utils.BN("99999999999999999999999999999999999999999");

	let newInterest = new web3.utils.BN("50000000000000000000");

	let AssetinDai = new web3.utils.BN("306364830000000000000000");

	let AssetAmountEE = new web3.utils.BN("11000000000000000");

	let initialBorrowEE = new web3.utils.BN("500000000000");

	const contract = new web3.eth.Contract(abi, "0x42bcde274fbceb42d311741557c73d52a7af087e");
	const contract88 = new web3.eth.Contract(abi2, "0x42bcde274fbceb42d311741557c73d52a7af087e");

	async function openPosition() {
		if (positionType === "LONG") {
			const coolNumber = await contract.methods.openInsulatedLongPositionNFT({ leveragedTokenAddress }, 50, AssetAmount, initialBorrow, 1, AssetinDai).send({ from: "0x0A9903B08c7cCb1E25e5488E1001e2ADED1cD92D" }).then(console.log);
		}
		if (positionType === "SHORT") {
			// Do Short
		}
		console.log("Neither Exist");
	}

	async function makedeposit() {
		const coolNumber = await contract88.methods.makeDeposit("0x6D97eA6e14D35e10b50df9475e9EFaAd1982065E", maxApproval, newInterest).send({ from: "0x42bcde274fbceb42d311741557c73d52a7af087e" }).then(console.log);
		console.log("wew99");
	}

	async function closelong() {
		const coolNumber = await contract.methods.closeLongPosition(1, 0, newInterest).send({ from: "0x42bcde274fbceb42d311741557c73d52a7af087e" }).then(console.log);
		console.log("wew99");
	}

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
						<CollateralInput collateralToken={collateralToken} collateralLogo={collateralLogo} amountIn={amountIn} logoChange={logoChange} setCollateralLogo={setCollateralLogo} setCollateralToken={setCollateralToken} setAmountIn={setAmountIn} getCollateralAddress={getCollateralAddress} />
					</Box>
					<Center>
						<ChevronDownIcon w={10} h={10} />
					</Center>
					<Box my={3}>
						<LeveragedTokenDropdown leveragedToken={leveragedToken} setLeveragedToken={setLeveragedToken} leveragedLogo={leveragedLogo} setLeveragedLogo={setLeveragedLogo} leveragedLogoChange={leveragedLogoChange} getLeveragedAddress={getLeveragedAddress} />
					</Box>
					<Text as="h2" fontWeight="normal" mt={5}>
						Leverage: {leverageAmount}X
					</Text>
					<Slider
						aria-label="card-leverage-slider"
						defaultValue={0}
						min={1}
						max={10}
						step={0.05}
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
						<Button onClick={openPosition} p={4} variant="solid" colorScheme="green" size="m" mt={5} bgGradient="linear(to-r, #9D8DF1, #B8CDF8, #1CFEBA)" boxShadow="lg" fontSize="22px" borderRadius={20}>
							Enter Position
						</Button>
					</Center>
					<Text>
						Collateral Asset: <br />
						{collateralTokenAddress}
						<br />
						Leveraged Asset: <br />
						{leveragedTokenAddress}
						<br />
					</Text>
				</Box>
			</Box>
		</div>
	);
};
