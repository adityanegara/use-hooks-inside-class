import useScreenWidth from "../../hooks/useScreenWidth";

export const withHooksHOC = (Component) => {
    return (props) => {
        const screenWidth = useScreenWidth();
        return <Component width={screenWidth} {...props} />
    }
}