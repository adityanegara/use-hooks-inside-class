import { withHooksHOC } from "./withHooksHOC";
import React from "react";

class HooksHOC extends React.Component {
    render() {
        return <p style={{ fontSize: '48px' }}>width: {this.props.width}</p>
    }
}

export default withHooksHOC(HooksHOC);