import { ChakraProvider, Box, Container} from '@chakra-ui/react';

function App() {
  return <ChakraProvider>
<Box bgColor="#C5E4E7" height="100vh" display="flex" justifyContent="center" alignItems="center">
  <Container bgColor="white">
  </Container>
</Box>
  </ChakraProvider>
}

export default App;
