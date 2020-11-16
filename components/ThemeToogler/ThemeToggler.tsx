import { Switch, useColorMode } from "@chakra-ui/react";
import { ReactElement } from "react";

const ThemeToggler = (): ReactElement => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Switch isChecked={colorMode === "light"} onChange={toggleColorMode} />
  );
};

export default ThemeToggler;
