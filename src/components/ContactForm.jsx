import { Component } from "react";
import PropTypes from "prop-types";

export class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }

    onInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <form className="">
                <label htmlFor="id-name" className=""></label>
                <input
                    onChange={this.onInputChange}
                    id="id-name"
                    value={this.state.name}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <label htmlFor="id-number" className=""></label>
                <input
                    onChange={this.onInputChange}
                    id="id-number"
                    value={this.state.number}
                    name="number"
                    type="tel"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                <input type="submit" title="Submit"></input>
            </form>
        )
    }
}

ContactForm.propTypes = {
}

export default ContactForm