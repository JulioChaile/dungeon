import React from 'react'


export class RenderSquare extends React.Component {
  render() {
    let obj = ''
    let wall = false
    let exit = false
    let coords = this.props.coords
    let style = []
    const i = this.props.i
    
    if (this.props.pj === i) {
      obj = '🔵'
    } else {
      coords.forEach(c => {
        switch (c.tip) {
          case 'wall':
            if (c.coord.includes(i)) {
              wall = true
            }
            break
          case 'exit':
            if (c.coord === i && c.state) {
              exit = true
            }
            break
          case 'keyExit':
            if (c.coord === i && c.state) {
              obj = c.view
              style = c.style
            }
            break
          case 'best':
            if (c.coord === i && c.state) {
              obj = c.view
              style = c.style
            }
            break
          case 'smith':
            if (c.coord === i && c.state) {
              obj = c.view
              style = c.style
            }
            break
          case 'fog':
            if (c.coord === i && c.state) {
              obj = c.view
              style = c.style
            }
            break
          case 'iron':
            if (c.coord === i && c.state) {
              obj = c.view
              style = c.style
            }
            break
          case 'door':
            if (c.coord === i && c.state) {
              obj = c.view
              style = c.style
            }
            break
          case 'lamp':
            if (c.coord === i && c.state) {
              obj = c.view
              style = c.style
            }
            break
          case 'flowers':
            if (c.coord === i && c.state) {
              obj = c.view
              style = c.style
            }
            break
          case 'wizard':
            if (c.coord === i && c.state) {
              obj = c.view
              style = c.style
            }
            break
          case 'wand':
            if (c.coord === i && c.state) {
              obj = c.view
              style = c.style
            }
            break
          case 'sword':
            if (c.coord === i && c.state) {
              obj = c.view
              style = c.style
            }
            break
          default:
            break;
        }
      })
    }
    
    if (wall === true) {
      return(
        <div className="squareWall">
        </div>
        )
    }

    if (exit === true) {
      return(
        <div className="squareExit">
        </div>
        )
    }

    return(
    <div 
      className="square"
    >
        <h1 style={style}>{obj}</h1>
    </div>
    )
}
}
