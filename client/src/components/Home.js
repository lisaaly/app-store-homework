import React, { Component } from 'react';
import { Header, Image, Card} from 'semantic-ui-react';
import axios from 'axios';
import { connect } from 'react-redux';
import { link } from 'react-router-dom';
import { setHeaders } from '../actions/headers';

class Home extends Component {
  state = { apps: [] }

  componentDidMount() {
    axios.get('/api/apps')
      .then( res => {
        this.props.dispatch(setHeaders(res.headers))
        this.setState({ apps: res.data }) 
      });
  }


render () {
  return (
    <div>
        { this.state.apps.map( app =>
          <Card>
    <Image src={app.logo} />
    <Card.Content>
      <Card.Header>
        {app.name}
      </Card.Header>
      <Card.Meta>
        {app.category}
      </Card.Meta>
      <Card.Meta>
        {app.price}
      </Card.Meta>
      <Card.Meta>
        {app.version}
      </Card.Meta>
      <Card.Description>
        {app.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      {app.author}
    </Card.Content>
  </Card>
       )
      }
      </div>
    )
  } 
}

export default connect()(Home);


