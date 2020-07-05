import React from 'react'

export class Inventary extends React.Component {
    render() {
        let item = this.props.item
        let inv = ''

        switch (item.tip) {
            case 'flowers':
                inv = <h2><span style={item.style}>{item.view}</span> - Flores escarlata</h2>
                break
            case 'wand':
                inv = <h2><span style={item.style}>{item.view}</span> - Varita de fuego</h2>
                break
            case 'iron':
                inv = <h2><span style={item.style}>{item.view}</span> - Barras de hierro</h2>
                break
            case 'lamp':
                inv = <h2><span style={item.style}>{item.view}</span> - Lampara de aceite</h2>
                break
            case 'keyExit':
                inv = <h2><span style={item.style}>{item.view}</span> - Llave dorada</h2>
                break
            case 'sword':
                inv = <h2><span style={item.style}>{item.view}</span> - Espada</h2>
                break
            default: break
        }

        return(
            <div>
                <h1>Inventario:</h1>
                <li>{inv}</li>
            </div>
        )
    }
}