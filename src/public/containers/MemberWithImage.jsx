import ListItemWIthImage from "../components/ListItemWIthImage"
import { connect } from 'react-redux'
import {changeAboutTeamNumber} from "../reducers/StoreAndReducers"

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.id === state.AboutTeamNumber
    }
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: (id)=>
        {
            dispatch(changeAboutTeamNumber(id))
        }

    }
};
const MemberWithImage = connect(mapStateToProps, mapDispatchToProps)(ListItemWIthImage);
export default MemberWithImage