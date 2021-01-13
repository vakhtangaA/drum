import React from "react";
import $ from "jquery";

// jquery

$(document).ready(function () {

  $("div").on("click", function (e) {
    let id = e.target.id;
    $("span").text(id);
  });
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    // handling keyboard

    document.addEventListener("keypress", function onEvent(event) {
      if (event.key === "Q" || event.key === "q") {
        let audio = document.getElementById("Q");
        audio.play();  
      }
      else if (event.key === "W" || event.key === "w") {
        let audio = document.getElementById("W");
        audio.play();
      }
      else if (event.key === "E" || event.key === "e") {
        let audio = document.getElementById("E");
        audio.play();
      } 
      else if (event.key === "A" || event.key === "a") {
        let audio = document.getElementById("A");
        audio.play();
      } 
      else if (event.key === "S" || event.key === "s") {
        let audio = document.getElementById("S");
        audio.play();
      } 
      else if (event.key === "D" || event.key === "d") {
        let audio = document.getElementById("D");
        audio.play();
      } 
      else if (event.key === "Z" || event.key === "z") {
        let audio = document.getElementById("Z");
        audio.play();
      } 
      else if (event.key === "X" || event.key === "x") {
        let audio = document.getElementById("X");
        audio.play();
      } 
      else if (event.key === "C" || event.key === "c") {
        let audio = document.getElementById("C");
        audio.play();
      }
  });

    function playQ() {
      let audio = document.getElementById("Q");
      audio.play();
    }

    function playE() {
      let audio = document.getElementById("E");
      audio.play();
    }

    function playW() {
      let audio = document.getElementById("W");
      audio.play();
    }

    function playA() {
      let audio = document.getElementById("A");
      audio.play();
    }

    function playS() {
      let audio = document.getElementById("S");
      audio.play();
    }

    function playD() {
      let audio = document.getElementById("D");
      audio.play();
    }

    function playZ() {
      let audio = document.getElementById("Z");
      audio.play();
    }

    function playX() {
      let audio = document.getElementById("X");
      audio.play();
    }

    function playC() {
      let audio = document.getElementById("C");
      audio.play();
    }

    return (
      <div>
      <div id="drum" className="drum">
        <a href="#" onClick={playQ}>
          <div className="drum-pad" id="8-bit">
            Q
            <audio
              className="clip"
              id="Q"
              src="https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Basses/689[kb]8bit-sub-fart.wav.mp3"
            ></audio>
          </div>
        </a>
        <a href="#" onClick={playW}>
          <div className="drum-pad" id="acoustic-bass">
            W
            <audio
              className="clip"
              id="W"
              src="https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Basses/220[kb]acoustic_bass_f_sharp.aif.mp3"
            ></audio>
          </div>
        </a>
        <a href="#" onClick={playE}>
          <div className="drum-pad" id="distortobass">
            E
            <audio
              className="clip"
              id="E"
              src="https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Basses/242[kb]ascending-distortobass.aif.mp3"
            ></audio>
          </div>
        </a>
        <br></br>
        <a href="#" onClick={playA}>
          <div className="drum-pad" id="bandpass">
            A
            <audio
              className="clip"
              id="A"
              src="https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Basses/206[kb]bandpass-zap-down.wav.mp3"
            ></audio>
          </div>
        </a>
        <a href="#" onClick={playS}>
          <div className="drum-pad" id="bass-bombdive">
            S
            <audio
              className="clip"
              id="S"
              src="https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Basses/49[kb]bass-bombdive.aif.mp3"
            ></audio>
          </div>
        </a>
        <a href="#" onClick={playD}>
          <div className="drum-pad" id="bass-poweron">
            D
            <audio
              className="clip"
              id="D"
              src="https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Basses/19[kb]bass-poweron.aif.mp3"
            ></audio>
          </div>
        </a>
        <br></br>
        <a href="#" onClick={playZ}>
          <div className="drum-pad" id="bass-synth">
            Z
            <audio
              className="clip"
              id="Z"
              src="https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Basses/63[kb]bass-synth.aif.mp3"
            ></audio>
          </div>
        </a>
        <a href="#" onClick={playX}>
          <div className="drum-pad" id="bow-bass-echo">
            X
            <audio
              className="clip"
              id="X"
              src="https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Basses/480[kb]bow-bass-echo.aif.mp3"
            ></audio>
          </div>
        </a>
        <a href="#" onClick={playC}>
          <div className="drum-pad" id="fatreverb">
            C
            <audio
              className="clip"
              id="C"
              src="https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Basses/45[kb]fatreverb.aif.mp3"
            ></audio>
          </div>
        </a>
      </div>
      <div id="display" class="display">
        <span>8-bit</span>
      </div>
      </div>
    );
  }
}

export default App;