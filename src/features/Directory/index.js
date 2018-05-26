import { connect } from 'react-redux';

import Directory from './directory';

import { changeTypeCard } from '../../services/directoryService/actions';

function mapStateToProps(state) {
  return {
    contacts: state.contactReducer.contacts,
    typeCard: state.directoryReducer.typeCard,
  };
}

export default connect(mapStateToProps, {
  changeTypeCard: type => changeTypeCard(type),
})(Directory);
