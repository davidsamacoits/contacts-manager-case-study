import { connect } from 'react-redux';

import ContactForm from './contactForm';

import { updateFieldContact } from '../../../services/contactDetailService/actions';
import { contactSubmitted } from '../../../services/contactService/actions';

function mapStateToProps(state) {
  return {
    contact: state.contactDetailReducer.contact,
  };
}

export default connect(mapStateToProps, {
  updateFieldContact: (field, value) => updateFieldContact(field, value),
  contactSubmitted: () => contactSubmitted(),
})(ContactForm);
