import React, { Component } from 'react';
import { render } from 'react-dom';
import { Animation, Entity, Scene } from 'aframe-react';

class App extends Component {
  render() {
    return (
      <Scene>
        <Entity geometry={{primitive: 'box'}} material="color: red" position={[0, 0, -5]}>
          <Animation attribute="rotation" dur="5000" repeat="indefinite" to={[0, 360, 360]}/>
        </Entity>
      </Scene>
    );
  }
}

render(<App/>, document.getElementById("app"));
