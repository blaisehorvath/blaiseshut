import {connect} from 'react-redux'
import React from 'react'
import {switchActiveTag} from '../reducers/StoreAndReducers'

const mapStateToProps = (state, ownProps) => {
    return {
        active: false
        //active: (state.ActiveTags.indexOf(ownProps.tag) > -1)
    }
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        scrollToHeader: () => {
            $('html, body').stop().animate({
                scrollTop: ownProps.header.top - 50
            }, 625, 'easeInOutQuart');
            event.preventDefault();
        }

    }
};


const BlogPostHeader = ({active,header,scrollToHeader})=> {return (
        <a className={`postHeader ${active ? "active" : ""}`}
           onClick={()=> {
               scrollToHeader();
           }}>
            {header.title}<br/>
        </a>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostHeader);