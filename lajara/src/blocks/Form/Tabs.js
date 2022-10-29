const Tabs = ({ children, active }) => {

    return children.map((child, i) => (
        <>{(i == active || child.type != 'section') && child}</>

    ))
}
export default Tabs;