import { connect } from 'react-redux';
import { 
  hideNavigator, 
  showNavigator 
} from '../../../../../services/redux/actions/navigation'
import RequestConfirmationScene from './scene'

function mapStateToProps(state) {
  return {
    isNavigatorVisible: state.navigation.isNavigatorVisible
  }
}

function mapDispatchToProps(dispatch) {
  return {
    hideNavigator: () => dispatch(hideNavigator()),
    showNavigator: () => dispatch(showNavigator())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestConfirmationScene)