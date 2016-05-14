import ImageHolder from "../components/ImageHolder"
import { connect } from 'react-redux'

const mapStateToProps_ProjectImage = (state, ownProps) => {
    return {
        imageSrc: ownProps.projectsWithImages[state.aboutImgSelectorState].picture,
        width: "300px",
        height: "300px"
    }
}
const mapDispatchToProps_ProjectImage = (dispatch, ownProps) => {
    return {}
}
const ProjectImage = connect(mapStateToProps_ProjectImage, mapDispatchToProps_ProjectImage)(ImageHolder);
export default ProjectImage