import { Box} from "@chakra-ui/react"
import { BillInput } from "./BillInput"
import { PeopleNumberInput } from "./PeopleNumberInput"
import { ResetButton } from "./ResetButton"
import { TipAmount } from "./TipAmount"
import { TipSelect } from "./TipSelect"
import { TotalAmount } from "./TotalAmount"

export function SplitterComponent() {
    return <Box width="850px" bgColor="white" display="flex" flexDirection="row" height="400px" p="0" borderRadius="20px">
        <Box width="50%" m="20px" p="20px">
<BillInput/>
<TipSelect/>
<PeopleNumberInput/>
</Box>
<Box bgColor="#00494D" width="50%" m="20px" borderRadius="20px" p="40px" display="flex" flexDirection="column" justifyContent="space-between">
<TipAmount/>
<TotalAmount/>
<ResetButton/>
</Box>
    </Box>
}