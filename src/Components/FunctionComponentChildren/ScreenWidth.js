import { FunctionComponent } from "react";
import useScreenWidth from "../../hooks/useScreenWidth";

const ScreenWidth = ({ children }) => {
    const screenWidth = useScreenWidth();
    return children(screenWidth)
}

export default ScreenWidth;