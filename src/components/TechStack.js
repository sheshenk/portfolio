import { Wrap, WrapItem } from "@chakra-ui/react"
import TechIcon from "./TechIcon"

const TechStack = ({stack, size}) => {

    console.log(stack)

    const stackElem = stack.map(tech => {
        return (
            <WrapItem>
                <TechIcon tech={tech} size={size}/>
            </WrapItem>
        )
    })

    return (
        <Wrap spacing={Math.floor(size / 2)}>
            {stackElem}
        </Wrap>
    )

}
export default TechStack