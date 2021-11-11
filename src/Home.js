import { Box} from "@chakra-ui/layout";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import { MainCard } from "./MainCard";
import "./Home.css";


export const Home = ({collateralToken, collateralTokenAddress, collateralTokenValue, leveragedToken, leveragedTokenAddress, leveragedTokenValue,  setLeveragedToken, setLeveragedTokenValue, setCollateralToken, setCollateralTokenAddress, setLeveragedTokenAddress, setCollateralTokenValue }) => {
  return (
    <div>
    <box class="flexbox-container">
      <div class="main">
        <Box w="500px" maxWidth="100ch">
          <MainCard 
              class="main" 
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
        </Box>
      </div>
      <div class="trading">
      </div>
    </box>



    </div>
  );
};
