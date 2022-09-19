import { Container, Box} from "@chakra-ui/react"
import { BillInput } from "./BillInput"
import { PeopleNumberInput } from "./PeopleNumberInput"
import { ResetButton } from "./ResetButton"
import { TipAmount } from "./TipAmount"
import { TipSelect } from "./TipSelect"
import { TotalAmount } from "./TotalAmount"

export function SplitterComponent() {
    return <Container bgColor="white" display="flex" flexDirection="row" height="400px" width="800px" p="0" borderRadius="20px">
        <Box width="50%" m="20px" p="20px">
<BillInput/>
<TipSelect/>
<PeopleNumberInput/>
</Box>
<Box bgColor="#00494D" width="50%" m="20px" borderRadius="20px" p="20px">
<TipAmount/>
<TotalAmount/>
<ResetButton/>
</Box>
    </Container>
}