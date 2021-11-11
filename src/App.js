import { Container, Flex, Heading, Spacer, Menu, Box,  MenuList, MenuItem, Image } from "@chakra-ui/react";
import { Route, Switch, Link } from "react-router-dom";
import { Home } from "./Home";
import { Dashboard } from "./components/Dashboard";
import logo from "../src/assets/images/ghost.png";
import React, { useState, useEffect } from "react";


function App() {

	const [collateralToken, setCollateralToken] = useState("DAI");
	const [leveragedToken, setLeveragedToken] = useState("WETH");


	const [leveragedTokenValue, setLeveragedTokenValue] = useState("0");
	const [collateralTokenValue, setCollateralTokenValue] = useState("0");

	const [collateralTokenAddress, setCollateralTokenAddress] = useState("0x6B175474E89094C44Da98b954EedeAC495271d0F");
	const [leveragedTokenAddress, setLeveragedTokenAddress] = useState("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2");







	return (
		<Container w="1200px" maxWidth="150ch">
			<Flex my={10}>
				<Link to="/" exact>
					<Image src={logo} boxSize="60px"></Image>
				</Link>
				<Spacer />
					<Box>
						<Flex>
							<Box mr="14">
								<Link to="/" exact>
									<Heading bgGradient="linear(to-r, #9D8DF1, #B8CDF8, #1CFEBA)" bgClip="text" fontSize="1.75em">
										Market
									</Heading>
								</Link>
							</Box>
							<Box mr="14">
								<Link to="/dashboard" exact>
									<Heading bgGradient="linear(to-r, #9D8DF1, #B8CDF8, #1CFEBA)" bgClip="text" fontSize="1.75em">
										Dashboard
									</Heading>
								</Link>
							</Box>
							<Menu>
								<MenuList>
									<MenuItem>
										<Link to="/dashboard" exact>
											Current Positions
										</Link>
									</MenuItem>

								</MenuList>
							</Menu>
						</Flex>
					</Box>
			</Flex>

				<Switch>
					<Route path="/" exact>
						<Home 
							collateralToken={collateralToken} 
							setCollateralToken={setCollateralToken}
							setCollateralTokenAddress={setCollateralTokenAddress}
							setCollateralTokenValue={setCollateralTokenValue}
							collateralTokenAddress={collateralTokenAddress}
							collateralTokenValue={collateralTokenValue}
							leveragedToken={leveragedToken}
							leveragedTokenValue={leveragedTokenValue}
							leveragedTokenAddress={leveragedTokenAddress}
							setLeveragedToken={setLeveragedToken}
							setLeveragedTokenAddress={setLeveragedTokenAddress}
							setLeveragedTokenValue={setLeveragedTokenValue}
						 />
					</Route>
					<Route path="/dashboard" exact>
						<Dashboard />
					</Route>
				</Switch>


	 <footer class="site-footer">
           <div className="footer-copyright">&copy; 2021 Phantasm Finance</div>
      </footer>

		</Container>
	);
}

export default App;
