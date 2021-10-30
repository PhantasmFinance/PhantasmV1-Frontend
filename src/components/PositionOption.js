import { Radio, RadioGroup,  Stack, Center } from "@chakra-ui/react";
import React from "react";

export const PositionOption = ({ positionChange }) => {
  return (
    <Center mt={3}>
      <RadioGroup defaultValue="long">
        <Stack spacing={4} direction="row">
          <Radio value="long" colorScheme="green" onClick={() => positionChange("LONG")} defaultChecked>
            Long
          </Radio>
          <Radio value="short" colorScheme="green" onClick={() => positionChange("SHORT")}>
            Short
          </Radio>
        </Stack>
      </RadioGroup>
    </Center>
  );
};
