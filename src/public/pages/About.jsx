import React from "react";
import {connect} from "react-redux"
import {changeActivePage, changeActiveMenuButton} from "../reducers/StoreAndReducers";

import Projects from "../components/Projects";
import Team from "../components/Team";
import SendMessage from "../components/SendMessage";

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(changeActivePage(true));
        this.props.dispatch(changeActiveMenuButton("aboutUs"));
    }

    componentWillUnmount() {
        this.props.dispatch(changeActivePage(false));
    }


    render() {
        return (
            <div>
                <header id="aboutUs">
                    <div className="container">
                        <h1 className="headerTitle">Welcome to S.W.A.</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque consectetur dicta dolor dolorum earum eius est fugit maxime odit perspiciatis quae quo, rerum similique, sit sunt ut. Aliquid at blanditiis corporis dolorem excepturi facilis harum nemo, numquam odit pariatur provident quia quis, recusandae unde velit. Deleniti earum eius et officia soluta. Ad adipisci dicta dolorem fuga hic illum libero magnam modi nesciunt numquam odit quam qui quis recusandae sapiente sit tenetur ullam vel voluptates, voluptatibus. At commodi cumque eligendi, eos esse excepturi fugit harum illum minus mollitia, nihil nostrum qui quod rerum soluta tempora voluptates. Deleniti doloremque eaque esse expedita hic illo labore laboriosam magni nihil non omnis quis, quos soluta ullam unde veniam voluptatibus voluptatum. Atque blanditiis consectetur deserunt eaque et, eum ipsum laboriosam natus odio optio pariatur perferendis quia quisquam ratione sit suscipit voluptas? Corporis fugiat perspiciatis reiciendis repellendus sequi. Debitis officia placeat quasi, totam veritatis voluptates?
                        </p>
                        <p><a className="btn btn-primary btn-lg more">Learn more »</a></p>
                    </div>
                </header>

                <Projects/>

                <Team/>

                <section id="contactUs">
                    <div className="container">
                        <h1 className="headerTitle">Contact Us</h1>
                        <SendMessage/>
                    </div>
                </section>
            </div>
        )
    };
}
;

export default connect()(About)