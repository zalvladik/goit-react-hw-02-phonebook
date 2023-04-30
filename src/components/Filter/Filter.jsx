import {Text,InputText} from './FilterStyled'

const Filter = ({filterName})=>{
    return(
        <>
        
        <Text>Find contacts by name</Text>
        <InputText
        onChange={filterName}
        name="filter"
        />
        </>
    )
}

export default Filter