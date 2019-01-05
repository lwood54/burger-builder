// just a basic JS component, we receive props and return props.children
// this acts as a basic wrapping div that will not be rendered as an additional
// html element, like a <div></div>
// QUESTION: Is <></> the same? I have seen that elsewhere...is that new to React 16.6 + ?
const aux = props => props.children;

export default aux;
