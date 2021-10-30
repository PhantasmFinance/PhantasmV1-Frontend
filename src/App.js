import { Container, Flex, Heading, Spacer, Menu, Box,  MenuList, MenuItem, Image } from "@chakra-ui/react";
import { useState } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Home } from "./Home";
import { Profile } from "./components/Profile";
import logo from "../src/assets/ghost.png";


function App() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);

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
									<Heading bgGradient="linear(to-r, #9D8DF1, #B8CDF8, #1CFEBA)" bgClip="text">
										Create Position
									</Heading>
								</Link>
							</Box>
							<Box mr="14">
								<Link to="/profile" exact>
									<Heading bgGradient="linear(to-r, #9D8DF1, #B8CDF8, #1CFEBA)" bgClip="text">
										My Positions
									</Heading>
								</Link>
							</Box>
							<Menu>
								<MenuList>
									<MenuItem>
										<Link to="/profile" exact>
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
						<Home />
					</Route>
					<Route path="/profile" exact>
						<Profile />
					</Route>
				</Switch>
		</Container>
	);
}

export default App;
