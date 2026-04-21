import React from 'react'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Demo from './demo.jsx'

// const customReactElement = {
//   type: "a",
//   props: {
//     href: "http//:google.com",
//     target: "_blank",
//   },
//   Children: "click to visit google",
// };

// let myElement = (
//     <a href="http//:google.com" target= "_blank">vist google</a> 
// )

let anotherUserName = "bhavishya"
//elements according to react
const reactElement = React.createElement( 
    'a',
    {href: 'https://google.com', target: '_blank'},
    'aaja bhai google',
    // injecting variable..only final evaluated output
    anotherUserName
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    reactElement
    <App />
    </>
)
