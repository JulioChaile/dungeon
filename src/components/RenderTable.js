import React from 'react'
import {RenderSquare} from './RenderSquare'

//Renderiza cada cuadro del tablero
export class RenderTable extends React.Component {
  render() {
    let pj = this.props.pj

    let coords = this.props.coords

    return(
    <div>
    <div className="board-row">
      <RenderSquare pj={pj} coords={coords} i={0} />
      <RenderSquare pj={pj} coords={coords} i={1} />
      <RenderSquare pj={pj} coords={coords} i={2} />
      <RenderSquare pj={pj} coords={coords} i={3} />
      <RenderSquare pj={pj} coords={coords} i={4} />
      <RenderSquare pj={pj} coords={coords} i={5} />
      <RenderSquare pj={pj} coords={coords} i={6} />
      <RenderSquare pj={pj} coords={coords} i={7} />
      <RenderSquare pj={pj} coords={coords} i={8} />
      <RenderSquare pj={pj} coords={coords} i={9} />
    </div>
    <div className="board-row">
      <RenderSquare pj={pj} coords={coords} i={10} />
      <RenderSquare pj={pj} coords={coords} i={11} />
      <RenderSquare pj={pj} coords={coords} i={12} />
      <RenderSquare pj={pj} coords={coords} i={13} />
      <RenderSquare pj={pj} coords={coords} i={14} />
      <RenderSquare pj={pj} coords={coords} i={15} />
      <RenderSquare pj={pj} coords={coords} i={16} />
      <RenderSquare pj={pj} coords={coords} i={17} />
      <RenderSquare pj={pj} coords={coords} i={18} />
      <RenderSquare pj={pj} coords={coords} i={19} />
    </div>
    <div className="board-row">
      <RenderSquare pj={pj} coords={coords} i={20} />
      <RenderSquare pj={pj} coords={coords} i={21} />
      <RenderSquare pj={pj} coords={coords} i={22} />
      <RenderSquare pj={pj} coords={coords} i={23} />
      <RenderSquare pj={pj} coords={coords} i={24} />
      <RenderSquare pj={pj} coords={coords} i={25} />
      <RenderSquare pj={pj} coords={coords} i={26} />
      <RenderSquare pj={pj} coords={coords} i={27} />
      <RenderSquare pj={pj} coords={coords} i={28} />
      <RenderSquare pj={pj} coords={coords} i={29} />
    </div>
    <div className="board-row">
      <RenderSquare pj={pj} coords={coords} i={30} />
      <RenderSquare pj={pj} coords={coords} i={31} />
      <RenderSquare pj={pj} coords={coords} i={32} />
      <RenderSquare pj={pj} coords={coords} i={33} />
      <RenderSquare pj={pj} coords={coords} i={34} />
      <RenderSquare pj={pj} coords={coords} i={35} />
      <RenderSquare pj={pj} coords={coords} i={36} />
      <RenderSquare pj={pj} coords={coords} i={37} />
      <RenderSquare pj={pj} coords={coords} i={38} />
      <RenderSquare pj={pj} coords={coords} i={39} />
    </div>
    <div className="board-row">
      <RenderSquare pj={pj} coords={coords} i={40} />
      <RenderSquare pj={pj} coords={coords} i={41} />
      <RenderSquare pj={pj} coords={coords} i={42} />
      <RenderSquare pj={pj} coords={coords} i={43} />
      <RenderSquare pj={pj} coords={coords} i={44} />
      <RenderSquare pj={pj} coords={coords} i={45} />
      <RenderSquare pj={pj} coords={coords} i={46} />
      <RenderSquare pj={pj} coords={coords} i={47} />
      <RenderSquare pj={pj} coords={coords} i={48} />
      <RenderSquare pj={pj} coords={coords} i={49} />
    </div>
    <div className="board-row">
      <RenderSquare pj={pj} coords={coords} i={50} />
      <RenderSquare pj={pj} coords={coords} i={51} />
      <RenderSquare pj={pj} coords={coords} i={52} />
      <RenderSquare pj={pj} coords={coords} i={53} />
      <RenderSquare pj={pj} coords={coords} i={54} />
      <RenderSquare pj={pj} coords={coords} i={55} />
      <RenderSquare pj={pj} coords={coords} i={56} />
      <RenderSquare pj={pj} coords={coords} i={57} />
      <RenderSquare pj={pj} coords={coords} i={58} />
      <RenderSquare pj={pj} coords={coords} i={59} />
    </div>
    <div className="board-row">
      <RenderSquare pj={pj} coords={coords} i={60} />
      <RenderSquare pj={pj} coords={coords} i={61} />
      <RenderSquare pj={pj} coords={coords} i={62} />
      <RenderSquare pj={pj} coords={coords} i={63} />
      <RenderSquare pj={pj} coords={coords} i={64} />
      <RenderSquare pj={pj} coords={coords} i={65} />
      <RenderSquare pj={pj} coords={coords} i={66} />
      <RenderSquare pj={pj} coords={coords} i={67} />
      <RenderSquare pj={pj} coords={coords} i={68} />
      <RenderSquare pj={pj} coords={coords} i={69} />
    </div>
    <div className="board-row">
      <RenderSquare pj={pj} coords={coords} i={70} />
      <RenderSquare pj={pj} coords={coords} i={71} />
      <RenderSquare pj={pj} coords={coords} i={72} />
      <RenderSquare pj={pj} coords={coords} i={73} />
      <RenderSquare pj={pj} coords={coords} i={74} />
      <RenderSquare pj={pj} coords={coords} i={75} />
      <RenderSquare pj={pj} coords={coords} i={76} />
      <RenderSquare pj={pj} coords={coords} i={77} />
      <RenderSquare pj={pj} coords={coords} i={78} />
      <RenderSquare pj={pj} coords={coords} i={79} />
    </div>
    <div className="board-row">
      <RenderSquare pj={pj} coords={coords} i={80} />
      <RenderSquare pj={pj} coords={coords} i={81} />
      <RenderSquare pj={pj} coords={coords} i={82} />
      <RenderSquare pj={pj} coords={coords} i={83} />
      <RenderSquare pj={pj} coords={coords} i={84} />
      <RenderSquare pj={pj} coords={coords} i={85} />
      <RenderSquare pj={pj} coords={coords} i={86} />
      <RenderSquare pj={pj} coords={coords} i={87} />
      <RenderSquare pj={pj} coords={coords} i={88} />
      <RenderSquare pj={pj} coords={coords} i={89} />
    </div>
    <div className="board-row">
      <RenderSquare pj={pj} coords={coords} i={90} />
      <RenderSquare pj={pj} coords={coords} i={91} />
      <RenderSquare pj={pj} coords={coords} i={92} />
      <RenderSquare pj={pj} coords={coords} i={93} />
      <RenderSquare pj={pj} coords={coords} i={94} />
      <RenderSquare pj={pj} coords={coords} i={95} />
      <RenderSquare pj={pj} coords={coords} i={96} />
      <RenderSquare pj={pj} coords={coords} i={97} />
      <RenderSquare pj={pj} coords={coords} i={98} />
      <RenderSquare pj={pj} coords={coords} i={99} />
    </div>
    </div>
    )
  }
}