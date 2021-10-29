import { Button, Stack, Input, Text, Image, Center, Heading, Flex, Box } from "@chakra-ui/react";
import { useState } from "react";
import { useMoralis } from "react-moralis";
import { ErrorBox } from "./Error";
import logo from "./assets/ghost.png";
import metamask from "./assets/images/metamask-fox.svg";
import { ChevronDownIcon } from "@chakra-ui/icons";

export const Auth = () => {
	const { authenticate, isAuthenticating, authError } = useMoralis();

	return (
		<Stack spacing={6}>
			{authError && <ErrorBox title="Authentication Has Failed!" message={authError.message} />}
			<Center>
				<Heading as="h1" size="3xl">
					Phantasm Finance
				</Heading>
			</Center>
			<Center>
				<Image src={logo} boxSize="160px" />
			</Center>
			<Center mb="60px">
				<Heading>Defi Doesn't Have To Be Scary</Heading>
			</Center>
			<Center>
				<Button isLoading={isAuthenticating} onClick={() => authenticate()} bgGradient="linear(to-r, #9D8DF1, #B8CDF8, #1CFEBA)" boxShadow="lg" size="l" p={3} colorScheme="blue" fontSize="26px" fontWeight="bold" w="400px" maxWidth="40ch" borderRadius={30}>
					<Image src={metamask} boxSize={24} mr="16px" />
					Click To Enter
				</Button>
			</Center>
			<Center>
				<Flex>
					<ChevronDownIcon boxSize={20} />
					<Heading mt={4}>WTF is Phantasm Finance?</Heading>
					<ChevronDownIcon boxSize={20} />
				</Flex>
			</Center>
			<Box backgroundColor="gray.700" p={5} borderRadius={20}>
				<Text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in sem consectetur massa cursus auctor. Etiam ipsum velit, euismod at metus vel, congue condimentum arcu. Aliquam erat volutpat. Aliquam erat volutpat. Nullam vestibulum enim in mauris suscipit vulputate. Cras nisl lorem, auctor non massa vitae, pretium iaculis lectus. In aliquet lacus magna, at egestas leo mollis eget. Nunc ullamcorper mattis purus a pellentesque. Praesent consequat, erat et ultricies congue, metus turpis dictum augue, sit amet bibendum risus ligula ut odio. Praesent auctor eleifend enim eget feugiat. Nulla facilisi. Cras venenatis nunc eget viverra pharetra. Praesent enim lacus, euismod eu cursus sit amet, cursus vel magna. Curabitur ullamcorper ex sed lacus fermentum pellentesque. Mauris sit amet
					<br /> <br />
					lorem vitae sapien efficitur consectetur. Quisque sodales ultrices lacinia. Sed maximus, ligula quis rhoncus tincidunt, justo massa lobortis lorem, sed eleifend nulla dui non nisl. Nam iaculis erat vel sem eleifend malesuada. Quisque fringilla sapien libero, ut sagittis ipsum accumsan vel. Proin sed libero diam. Cras laoreet lectus quis neque convallis porta. Quisque eros erat, interdum sit amet leo sed, convallis ullamcorper mauris. Ut eget libero gravida, congue sem et, elementum dolor. Sed fringilla sed sem sed dapibus. Vestibulum efficitur, turpis et fermentum varius, velit libero eleifend ex, tincidunt accumsan mi est vel ligula. Nullam porta tortor turpis, eget eleifend augue egestas eget. Pellentesque porttitor eros vitae neque malesuada, quis placerat arcu blandit. Nullam
					<br /> <br />
					vulputate aliquam sodales. Vivamus accumsan elementum eleifend. Fusce sagittis massa ac tempor commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam leo mauris, varius id imperdiet non, aliquet eget sapien. Fusce aliquam et libero ut laoreet. Integer sodales, arcu non dictum sagittis, urna nunc egestas mi, at molestie purus urna vel lectus. Proin tempus nibh tempor lectus dictum volutpat. Donec et pulvinar sem. Aenean accumsan est vitae mauris lacinia convallis. Curabitur at massa elementum purus mattis fringilla. Duis in neque felis. Nulla rutrum, nunc ac feugiat vulputate, augue neque accumsan elit, ac dignissim neque neque ut lectus. Phasellus efficitur metus felis, at interdum sapien aliquet at. Proin vehicula massa id mi
					<br /> <br />
					imperdiet porta. Fusce sollicitudin elit et vestibulum mattis. Praesent venenatis libero vel vulputate vestibulum. Sed lacinia, eros vel ultrices hendrerit, ipsum purus ullamcorper libero, placerat pharetra ante lorem et mauris. Donec id luctus massa. Mauris posuere felis sed nibh luctus rhoncus. Sed cursus enim vitae nunc volutpat sodales. Suspendisse potenti. Maecenas nec diam non metus egestas feugiat. Donec orci augue, laoreet quis massa ut, tristique sagittis sapien. Vestibulum elementum nisl a metus varius, eget aliquam lectus rutrum. Etiam commodo pulvinar turpis vitae laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris urna sapien, mattis ut sem vitae, laoreet feugiat elit. Donec posuere turpis ac nulla pharetra mattis. Proin a facilisis odio. Nunc
					<br /> <br />
					porttitor eros nec lorem aliquam, sagittis sagittis mauris euismod. Nam at porta est. Proin ultricies elit eget est posuere, nec viverra arcu elementum. In mattis dapibus urna in lobortis. Suspendisse sed eros ante.
				</Text>
			</Box>
		</Stack>
	);
};
