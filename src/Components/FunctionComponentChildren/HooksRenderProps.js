import React from "react";
import ScreenWidth from "./ScreenWidth";

class HooksRenderProps extends React.Component {
    render() {
        return (
            <ScreenWidth>
                {(width) => <p >width: {width}</p>}
            </ScreenWidth>
        )
    }
}

export default HooksRenderProps