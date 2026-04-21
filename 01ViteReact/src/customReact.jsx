const mainContainer = document.querySelector("#root");
function customRender(customReactElement, mainContainer) {
  /*const DOMelement = document.createElement(customReactElement.type)
  DOMelement.setAttribute('href', customReactElement.props.href)
  DOMelement.setAttribute('target', customReactElement.props.target)
  DOMelement.innerHTML = customReactElement.Children
  mainContainer.appendChild(DOMelement);*/

  const DOMelement = document.createElement(customReactElement.type);
  DOMelement.innerHTML = customReactElement.Children;
  for (const prop in customReactElement.props) {
    if(prop === 'children') continue;
    DOMelement.set
    DOMelement.setAttribute(prop, customReactElement.props.prop)
    }
    mainContainer.appendChild(DOMelement)
  }

const customReactElement = {
  type: "a",
  props: {
    href: "http//:google.com",
    target: "_blank",
  },
  Children: "click to visit google",
};

customRender(customReactElement, mainContainer);
