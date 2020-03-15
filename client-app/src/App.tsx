import React, { Component } from 'react';
import { Header, List, Segment } from 'semantic-ui-react'
import './App.css';
import axios from 'axios'

class App extends Component {

  state = {
    values: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/values')
      .then((response) => {
        this.setState({
          values: response.data
        })
      })
    
  }
  
  render() {
    return (
      <div>
          <Header as='h2' icon='users' content='Reactivities' />
          <Segment inverted>
            <List divided inverted relaxed>
              
              {this.state.values.map((value: any) => (
                <List.Item key={value.id}>
                  <List.Content>
                    <List.Header>{value.name}</List.Header>
                  </List.Content>
                </List.Item>
              ))}
            </List>
          </Segment>
      </div>
    );
  }
}

export default App;
