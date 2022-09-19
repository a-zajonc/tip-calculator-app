import { Container, Box} from "@chakra-ui/react"
import { BillInput } from "./BillInput"
import { PeopleNumberInput } from "./PeopleNumberInput"
import { ResetButton } from "./ResetButton"
import { TipAmount } from "./TipAmount"
import { TipSelect } from "./TipSelect"
import { TotalAmount } from "./TotalAmount"

export function SplitterComponent() {
    return <Container bgColor="white">
        <Box>
<BillInput/>
<TipSelect/>
<PeopleNumberInput/>
</Box>
<Box>
<TipAmount/>
<TotalAmount/>
<ResetButton/>
</Box>
    </Container>
}