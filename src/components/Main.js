require('normalize.css/normalize.css');
require('styles/App.css');

import {autobind} from 'core-decorators'
import React from 'react';
import ListComponent from './list'
import {Container, Divider, Button} from 'semantic-ui-react'

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
    items_data = [
      {
        header: 'Project Report - April',
        description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        meta: 'ROI: 30%'
      },
      {
        header: 'Project Report - May',
        description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
        meta: 'ROI: 34%'
      },
      {
        header: 'Project Report - June',
        description: 'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
        meta: 'ROI: 27%'
      }
    ];

  constructor(state, context) {
    console.log('[Module] Index Component init');
    super(state, context);

    this.state = {
      items: [],
      status: 'loading'
    };
    this.count = 0;
    this.onClickAdd = this.onClickAdd.bind(this);
    this.onClickDecrease = this.onClickDecrease.bind(this);
    this.onClickChange = this.onClickChange.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.items.length == this.state.length) {
      console.log('[CHECK] Index Component Should Update [No]')
      return false;
    } else {
      console.log('[CHECK] Index Component Should Update [Yes]')
      return true;
    }
  }

  render() {
    let items = this.state.items;
    this.count += 1;
    console.log('[CHECK] Index Component render' + this.count);
    return (
      <div className="index">
        <Container fluid>
          <img src={yeomanImage} alt="Yeoman Generator" />
          <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
          <div>
            <Button primary onClick={this.onClickAdd}>Add</Button>
            <Button onClick={this.onClickDecrease}>Decrease</Button>
            <Button onClick={this.onClickChange}>Change</Button>
          </div>
        </Container>
        <Divider />
        <Container fluid>
          <ListComponent items={items.concat([])} />
        </Container>
      </div>
    );
  }

  @autobind
  onClickAdd() {
    let currentCount = this.state.items.length;
    if (currentCount < this.items_data.length) {
      let new_data = this.state.items;
      new_data.push(this.items_data[currentCount]);
      this.setState({items: new_data});
      console.log('[EVENT] click Add [ADDED]');
    } else {
      console.log('[EVENT] click Add [NOTHING]');
    }
  }

  @autobind
  onClickDecrease() {
    let currentCount = this.state.items.length;
    if (currentCount > 0) {
      let new_data = this.state.items;
      new_data.pop()
      this.setState({items: new_data});
      console.log('[EVENT] Click Decrease [DECREASED]');
    } else {
      console.log('[EVENT] Click Decrease [NOTHING]');
    }
  }

  @autobind
  onClickChange() {
    console.log('[EVENT] Click Change');
    this.setState({status: this.state.status + 'a'});
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
