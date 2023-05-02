import {Text,InputText} from './FilterStyled'
import PropTypes from 'prop-types'

const Filter = ({filterName,filterValue}) => {
     return(
            <>
            
            <Text>Find contacts by name</Text>
            <InputText
            onChange={filterName}
            name="filter"
            value={filterValue}
            />
            </>
        )
}

Filter.propTypes = {
    filterName:PropTypes.func.isRequired,
    filterValue:PropTypes.string.isRequired,
}

export default Filter

// class Filter extends React.Component {
//     state = {
//         filter: ''
//     }
    
//         render(){
//         return(
//             <>
            
//             <Text>Find contacts by name</Text>
//             <InputText
//             onChange={this.props.filterName}
//             name="filter"
//             value={this.state.filter}
//             />
//             </>
//         )
//     }
// }

// Filter.propTypes = {

// }