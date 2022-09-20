import { ChakraProvider, Box} from '@chakra-ui/react';
import { SplitterComponent } from './Components';
import { AppHeader } from './Components/AppHeader';

function App() {
  return <ChakraProvider>
<Box bgColor="#C5E4E7" height="100vh" display="flex" justifyContent="space-evenly" alignItems="center" flexDirection="column">
  <AppHeader/>
  <SplitterComponent/>
</Box>
  </ChakraProvider>
}

export default App;
