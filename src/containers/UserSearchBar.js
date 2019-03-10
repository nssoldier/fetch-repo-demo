import UsernameInput from "../components/UsernameInput";
import { connect } from "react-redux";
import { search } from "../store/repos.slice";

export default connect(
  null,
  dispatch => ({
    onUsernameEnter: username => dispatch(search(username))
  })
)(UsernameInput);
