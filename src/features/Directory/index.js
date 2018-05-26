import { connect } from 'react-redux';

import Directory from './directory';

import { consoleLog } from '../../services/contactService/actions';

function mapStateToProps(state) {
  return {
    contacts: state.contactReducer.contacts,
  };
}

export default connect(mapStateToProps, {
  consoleLog: () => consoleLog(),
})(Directory);
