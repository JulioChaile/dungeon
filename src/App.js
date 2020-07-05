import React from 'react';
import './App.css';
import {RenderTable} from './components/RenderTable'
import {Inventary} from './components/Inventary'

let wall = {
  tip: 'wall',
  coord: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 19, 20, 22, 23, 24, 25, 27, 28, 29, 30, 37, 39, 40, 42, 43, 44, 45, 50, 52, 55, 56, 57, 59, 60, 62, 65, 69, 70, 72, 73, 75, 76, 77, 79, 85, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99],
  state: true,
  view: ''
}
let keyExit = {
  tip: 'keyExit',
  coord: 14,
  state: true,
  view: 't',
  style: {
    color: 'yellow'
  }
}
let exit = {
  tip: 'exit',
  coord: 49,
  state: true,
  view: ''
}
let best = {
  tip: 'best',
  coord: 13,
  state: true,
  view: '>:v',
  style: {
    color: 'black'
  }
}
let smith = {
  tip: 'smith',
  coord: 38,
  state: true,
  view: 'H',
  style: {
    color: 'black'
  }
}
let fog = {
  tip: 'fog',
  coord: 17,
  state: true,
  view: '~',
  style: {
    color: 'gray'
  }
}
let iron = {
  tip: 'iron',
  coord: 18,
  state: true,
  view: '=',
  style: {
    color: 'gray'
  }
}
let door = {
  tip: 'door',
  coord: 67,
  state: true,
  view: '▥',
  style: {
    color: 'brown'
  }
}
let lamp = {
  tip: 'lamp',
  coord: 66,
  state: true,
  view: '∆',
  style: {
    color: 'yellow'
  }
}
let flowers = {
  tip: 'flowers',
  coord: 86,
  state: true,
  view: '*',
  style: {
    color: 'red'
  }
}
let wizard = {
  tip: 'wizard',
  coord: 53,
  state: true,
  view: '∆',
  style: {
    color: 'blue'
  }
}
let wand = {
  tip: 'wand',
  coord: '',
  state: false,
  view: '/',
  style: {
    color: 'red'
  }
}
let sword = {
  tip: 'sword',
  coord: '',
  state: false,
  view: '!',
  style: {
    color: 'gray'
  }
}

function dirPj(key, dir) {
  switch(true) {
    case key === 'ArrowLeft' && dir !== 'right':
      dir = 'left'
    break
  
    case key === 'ArrowUp' && dir !== 'down':
      dir = 'up'
    break
  
    case key === 'ArrowRight' && dir !== 'left':
      dir= 'right'
    break
  
    case key === 'ArrowDown' && dir !== 'up':
      dir = 'down'
    break

    default: break
  }
  
    return dir
  }

function movPj(key, mov) {
  switch(key) {
    case 'right':
      mov += 1
      break

    case 'left':
      mov -= 1
      break

    case 'up':
      mov -= 10
      break

    case 'down':
      mov += 10
      break

    default: break
  }

  return mov
}

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pj: 80,
      coords: [],
      items: ''
    }
    this.onKeyDownHandle = this.onKeyDownHandle.bind(this)
  }

  componentWillMount() {
    this.setState({
      coords: [wall, keyExit, exit, best, smith, fog, iron, door, lamp, flowers, wizard, wand, sword]
    })
  }

  componentDidMount() {
    document.getElementById('game').focus()
  }

  onKeyDownHandle(event) {
    const keys = ['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown']
    const key = event.key
    const coord = this.state.coords
    let item = this.state.items
    let check = false
    let it = ''

    if(!keys.includes(key)){return}

    let dir = dirPj(key, this.state.pj)
    let mov = movPj(dir, this.state.pj)

    if (wall.coord.includes(mov) || mov > 100 || mov <0){return}

    coord.forEach(c => {
      if (c.coord === mov) {
        switch (c.tip) {
          case 'exit':
            if (item.tip === 'keyExit') {
              alert('Nooooooooooo wacho sos re groso terminaste el juego re piola capo')
              window.location.reload()
              return
            } else {
              alert('Una gran puerta impide el paso.')
              check = true
            }
            break
          case 'keyExit':
            if(!c.state){return}
            item = c
            c.state = false
            alert('Encontraste una llave dorada.')
            this.setState({
              items: item
            })
            break
          case 'best':
            if(!c.state){return}
            if (item.tip === 'sword') {
              alert('Luego de una ardua lucha la bestia cae agonizante, en sus ojos se refleja una suplica de piedad pero tu espada es certera y su cabeza cae rodando por el suelo.')
              c.state = false
              item = ''
              this.setState({
                items: item
              })
            } else {
              alert('Una feroz bestia custodia algo de valor, sientes el temor de la muerte al pensar en avanzar.')
              check = true
            }
            break
          case 'smith':
            it = coord.find(t => t.tip === 'iron')
            if (item.tip === 'keyExit') {
              alert('- ¡La has coneguido!')
              check = true
              return
            }
            if (it.state === true) {
              alert('Un herrero se encuentra sentado descansando \n - Es imposible, no soy un luchador, hay una bestia protegiendo la llave que abre la salida, si tuviera hierro podria forjarte una espada para matar a la bestia.')
            } else {
              if (item.tip === 'iron') {
                alert('- ¡Hierro! Gracias aventurero, ahora mismo te forjate una espada y por fin podremos salir de la mazmorra.')
                item = sword
                item.state = true
                this.setState({
                  items: item
                })
              } else {
                alert('- Vamos aventurero, consigue la llave y escapemos.')
              }
            }
            check = true
            break
          case 'fog':
            if(!c.state){return}
            if (item.tip === 'lamp') {
              alert('La niebla se desvanece con la luz de tu lampara.')
              c.state = false
              item = ''
              this.setState({
                items: item
              })
            } else {
              alert('La niebla es demasiado espesa para avanzar.')
              check = true
            }
            break
          case 'iron':
            if(!c.state){return}
            item = c
            c.state = false
            alert('Encontraste unas barras de hierro.')
            this.setState({
              items: item
            })
            break
          case 'door':
            if(!c.state){return}
            if (item.tip === 'wand') {
              alert('La puerta de madera se quema totalmente al usar tu varita.')
              c.state = false
              item = ''
              this.setState({
                items: item
              })
            } else {
              alert('Una puerta de madera bloquea el paso.')
              check = true
            }
            break
          case 'lamp':
            if(!c.state){return}
            item = c
            c.state = false
            alert('Encontraste una lampara de aceite.')
            this.setState({
              items: item
            })
            break
          case 'flowers':
            if(!c.state){return}
            item = c
            c.state = false
            alert('Encontraste unas flores escarlata, normalmente son usadas en pociones.')
            this.setState({
              items: item
            })
            break
          case 'wizard':
            it = coord.find(t => t.tip === 'flowers')
            if (item.tip === 'keyExit') {
              alert('- Increible, ciertamente no te tenia la fe, felicidades aventurero.')
              check = true
              return
            }
            if (it.state === true) {
              alert('Ves a un mago trabajando en un caldero, este voltea hacia ti \n - Otro aventurero mas que se pierde en la mazmorra, creo que puedo aryudarte, traeme unas flores escarlata y vere que puedo darte')
            } else {
              if (item.tip === 'flowers') {
                alert('Oh, veo que las has encontrado, gracias por tu ayuda, en agradecimiento toma esta vieja varita, aun le queda algo de magia.')
                item = wand
                item.state = true
                this.setState({
                  items: item
                })
              } else {
                alert('Ya deja de molestar viajero')
              }
            }
            check = true
            break
          default:
            break;
        }
      }
    });

    if(check){return}

    this.setState({
      pj: mov,
      coords: coord
    })
  }

  render() {
    return(
      <div
        id='game' 
        onKeyDown={this.onKeyDownHandle} 
        tabIndex="0"
      >
        <RenderTable 
          coords={this.state.coords}
          pj={this.state.pj}
        />
        <Inventary 
          item={this.state.items}
        />
      </div>
    )
  }
}

export default Game;
