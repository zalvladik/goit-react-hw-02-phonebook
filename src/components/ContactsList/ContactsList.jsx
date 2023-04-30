import {UlContacts,LiContacts,LiButton} from './ContactsListStyled'
import PropTypes from 'prop-types'

const ContactsList = ({events,deleteName}) => {
    
    return(
        <UlContacts>
            {events.map(event =>(
                <LiContacts key={event.id}>{event.name}: {event.number}
                <LiButton id={event.id} onClick={deleteName}>Delete</LiButton>
                </LiContacts>
                
            ))}
        </UlContacts>
    )
}

ContactsList.propTypes = {
    events:PropTypes.arrayOf(
        PropTypes.exact({
            id:PropTypes.string.isRequired,
            name:PropTypes.string.isRequired,
            number:PropTypes.string.isRequired,
        })
    )
}


export default ContactsList