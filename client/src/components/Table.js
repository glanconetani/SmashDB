import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
class Table extends Component {
  render() {
    return (
      <div>
        <table class="table table-hover" style={{ width: 1000, borderColor: 'red', border: 'solid' }}>
          <div class="row">
            <div class="col" style={{ color: 'white' }}><a href="characters/mario.html">Mario</a></div>
            <div class="col" style={{ color: 'white' }}><a href="characters/donkeykong.html">Donkey Kong</a></div>
            <div class="col" style={{ color: 'white' }}><a href="characters/link.html">Link</a></div>
          </div>
          <div class="row">
            <div class="col" style={{ color: 'white' }}><a href="characters/kirby.html">Kirby</a></div>
            <div class="col" style={{ color: 'white' }}><a href="characters/fox.html">Fox</a></div>
            <div class="col" style={{ color: 'white' }}><a href="characters/pikachu.html">Pikachu</a></div>
          </div>
          <div class="row">
            <div class="col" style={{ color: 'white' }}><a href="characters/luigi.html">Luigi</a></div>
            <div class="col" style={{ color: 'white' }}><a href="characters/ness.html">Ness</a></div>
            <div class="col" style={{ color: 'white' }}><a href="characters/captainfalcon.html">Captain Falcon</a></div>
          </div>
          <div class="row">
            <div class="col" style={{ color: 'white' }}><a href="characters/jigglypuff.html">Jigglypuff</a></div>
            <div class="col" style={{ color: 'white' }}><a href="characters/Peach.html">Peach</a></div>
            <div class="col" style={{ color: 'white' }}><a href="characters/Daisy.html">Daisy</a></div>
          </div>
          <div class="row">
            <div class="col" style={{ color: 'white' }}><a href="characters/mario.html">Zelda</a></div>
            <div class="col" style={{ color: 'white' }}><a href="characters/mario.html">Dr. Mari</a></div>
            <div class="col" style={{ color: 'white' }}><a href="characters/mario.html">Pichu</a></div>
          </div>
          <div class="row">
            <div class="col" style={{ color: 'white' }}><a href="characters/Falco.html">Falco</a></div>
            <div class="col" style={{ color: 'white' }}><a href="characters/marth.html">Marth</a></div>
            <div class="col" style={{ color: 'white' }}><a href="characters/Lucina.html">Lucina</a></div>
          </div>
          <div class="row">
            <div class="col" style={{ color: 'white' }}><a href="characters/zerosuitsamus.html">Zero Suit Samus</a></div>
            <div class="col" style={{ color: 'white' }}><a href="characters/wario.html">Wario</a></div>
            <div class="col" style={{ color: 'white' }}><a href="characters/snake.html">Snake</a></div>
          </div>
        </table>
      </div>
    )
  }
}
export default Table
