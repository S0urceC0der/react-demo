
import React from 'react';

import { Card } from 'semantic-ui-react'

class ListComponent extends React.Component {
  constructor(props) {
    console.log('[Module] List Component init');
    super(props);
    this.props = {
      items: this.props.items
    };
    this.state = {
      status: 0
    };
    this.count = 0;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.items.length != this.props.items.length) {
      console.log(`[CHECK] List Component Should Update [Yes] length ${nextProps.items.length}<->${this.props.items.length}`);
      return true;
    }
    // if (nextState.status != this.state.status) {
    //   console.log(`[CHECK] List Component Should Update [Yes] state ${nextState.status}<->${this.state.status}`);
    //   return true;
    // }
    console.log('[CHECK] List Component Should Update [No]');
    return false;
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.items.length != this.props.items.length) {
  //     this.setState({status: this.state.status + 1});
  //     console.log('[CHECK] List Component Update Porps [CHANGED]');
  //   } else {
  //     console.log('[CHECK] List Component Update Porps [NOTHING]');
  //   }
  // }

  render() {
    this.count += 1;
    console.log(`[CHECK] List Component render ${this.count} (${this.props.items.length})`);
    let items = this.props.items;
    return (
      <div className="cards">
        <Card.Group items={items} />
      </div>
    );
  }
}

ListComponent.defaultProps = {
};

export default ListComponent;
