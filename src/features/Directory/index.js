import { connect } from 'react-redux';

import Directory from './directory';

import { consoleLog } from '../../services/contactService/actions';
import { changeTypeCard } from '../../services/directoryService/actions';

function mapStateToProps(state) {
  return {
    contacts: state.contactReducer.contacts,
    typeCard: state.directoryReducer.typeCard,
  };
}

export default connect(mapStateToProps, {
  consoleLog: () => consoleLog(),
  changeTypeCard: type => changeTypeCard(type),
})(Directory);
