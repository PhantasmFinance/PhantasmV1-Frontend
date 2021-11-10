import { Container, Flex, Heading, Spacer, Menu, Box,  MenuList, MenuItem, Image } from "@chakra-ui/react";
import { Route, Switch, Link } from "react-router-dom";
import { Home } from "./Home";
import { Dashboard } from "./components/Dashboard";
import logo from "../src/assets/images/ghost.png";
 

function App() {




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
						<Home />
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
