import React, { Component } from 'react';
import { render } from 'react-dom';
import { Animation, Entity, Scene } from 'aframe-react';

class App extends Component {
  render() {
    return (
      <Scene>
        <a-assets>
          <a-asset-item id="miku-obj" src="/assets/miku.obj"></a-asset-item>
          <a-asset-item id="miku-mtl" src="/assets/miku.mtl"></a-asset-item>
        </a-assets>
        <Entity geometry={{primitive: 'box'}} material="color: red" position={[0, 0, -5]}>
          <Animation attribute="rotation" dur="5000" repeat="indefinite" to={[0, 360, 360]}/>
        </Entity>
        <a-obj-model src="#miku-obj" mtl="#miku-mtl"></a-obj-model>
      </Scene>
    );
  }
}

render(<App/>, document.getElementById("app"));
