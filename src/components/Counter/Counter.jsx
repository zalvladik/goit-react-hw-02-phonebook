import React from 'react'
import {Container,Form,Title,Button,Text,InputText,UlContacts,LiContacts,LiButton} from './CounterStyled';

const PhoneBookContainer =({addNewName,currentName,events,deleteName,filterName}) =>{ 
    return (
        <Container>
        <Title>Phonebook</Title>
        <Form onSubmit={addNewName}>
        <Text>Name</Text>
        <InputText
        onChange={currentName}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        ></InputText>
        <Text>Number</Text>
        <InputText
        onChange={currentName}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        ></InputText>
        <Button type='submit'>Add contact</Button>
        </Form>
        <Title>Contacts</Title>
        <Text>Find contacts by name</Text>
        <InputText
        onChange={filterName}
        name="filter"
        >
        </InputText>
        <UlContacts>
            {events.map(event =>(
                <LiContacts key={event.id}>{event.name}: {event.number}
                <LiButton id={event.id} onClick={deleteName}>Delete</LiButton>
                </LiContacts>
                
            ))}
        </UlContacts>
        </Container>
    ) 
};

export default PhoneBookContainer
