import React from 'react'
import ReactDOM from 'react'
import './styles.css'

function sun(a,b){
    return a + b
}

function primeiroJSX(){
    return(
        <div className="teste">
            Meu nome
        </div>
    )
}

const App = () => {
    return (
        <div className="App">
            Hello World
            {primeiroJSX()}
            <h1>Soma: {sun(10,20)}</h1>
        </div>
    )
}
//foi pegada a <div> pelo Id= root
const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)