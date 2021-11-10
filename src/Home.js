import { Box} from "@chakra-ui/layout";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import { MainCard } from "./MainCard";
import "./Home.css";


console.log("fick")
export const Home = () => {
  return (
    <div>
    <box class="flexbox-container">
      <div class="main">
        <Box w="500px" maxWidth="100ch">
          <MainCard class="main" />
        </Box>
      </div>
      <div class="trading">
      </div>
    </box>



    </div>
  );
};
