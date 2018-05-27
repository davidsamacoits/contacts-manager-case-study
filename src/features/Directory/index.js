import { connect } from 'react-redux';

import Directory from './directory';

import { changeTypeCard, changeOrder } from '../../services/directoryService/actions';
import { contactDeleteRequest } from '../../services/contactService/actions';

function mapStateToProps(state) {
  return {
    contacts: state.contactReducer.contacts,
    order: state.directoryReducer.order,
    typeCard: state.directoryReducer.typeCard,
  };
}

export default connect(mapStateToProps, {
  changeTypeCard: type => changeTypeCard(type),
  changeOrder: order => changeOrder(order),
  contactDeleteRequest: id => contactDeleteRequest(id),
})(Directory);
