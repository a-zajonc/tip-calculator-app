import { ChakraProvider, Box } from "@chakra-ui/react";
import { SplitterComponent } from "./Components";
import { AppHeader } from "./Components/AppHeader";
import { theme } from ".";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        bgColor="#C5E4E7"
        height="100vh"
        display="flex"
        justifyContent={{ base: "space-around", lg: "space-evenly" }}
        alignItems="center"
        flexDirection="column"
      >
        <AppHeader />
        <SplitterComponent />
      </Box>
    </ChakraProvider>
  );
}

export default App;
