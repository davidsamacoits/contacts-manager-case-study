import { connect } from 'react-redux';

import Directory from './directory';

import { changeTypeCard, changeOrder, tooglePanel, searchContact } from '../../services/directoryService/actions';
import { contactDeleteRequest } from '../../services/contactService/actions';
import { contactDetailLoadRequest } from '../../services/contactDetailService/actions';

function mapStateToProps(state) {
  return {
    contacts: state.contactReducer.contacts,
    order: state.directoryReducer.order,
    typeCard: state.directoryReducer.typeCard,
    panelStatus: state.directoryReducer.panelStatus,
    search: state.directoryReducer.search,
  };
}

export default connect(mapStateToProps, {
  changeTypeCard: type => changeTypeCard(type),
  changeOrder: order => changeOrder(order),
  contactDeleteRequest: id => contactDeleteRequest(id),
  tooglePanel: () => tooglePanel(),
  searchContact: search => searchContact(search),
  contactDetailLoadRequest: id => contactDetailLoadRequest(id),
})(Directory);
