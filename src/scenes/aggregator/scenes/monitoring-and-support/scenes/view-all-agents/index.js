import { 
  hideNavigator,
  showNavigator
} from '../../../../../../services/redux/actions/navigation'
import { connect } from 'react-redux'
import ViewAllAgentsScene from "./scene";

function mapStateToProps(state) {
  return {
    isNavigatorVisible: state.navigation.isNavigatorVisible,
    // pendingUrl: state.navigation.pendingUrl
  }
}

function mapDispatchToProps(dispatch) {
  return {
    hideNavigator: () => dispatch(hideNavigator()),
    showNavigator: () => dispatch(showNavigator())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewAllAgentsScene)