import ListItem from "../components/ListItem"
import { connect } from 'react-redux'
import {addImgNum} from "../reducers/StoreAndReducers"
const mapStateToProps_Project = (state, ownProps)=> {
    return {
        active: ownProps.id == state.aboutImgSelectorState
    }
}
const mapDispatchToProps_Project = (dispatch, ownProps)=> {
    return {
        onProjectClick: (id) => {
            dispatch(addImgNum(id));
        }
    }
}

const ProjectListItem = connect(mapStateToProps_Project, mapDispatchToProps_Project)(ListItem)
export default ProjectListItem