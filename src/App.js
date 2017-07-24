import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Clock from './Clock';
import Footer from './Footer';
import './index.css';
import './clock.css';

const data = require('./data.json');
const fetchEvents = () => Promise.resolve(data)
                      .then(json => json.slice(0, 4))

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {refreshing: false}
  }

  //  Method bound to the refresh button
  refresh() {
    this.setState({refreshing: true})
  }

  //  Claccback from the 'Content' component
  onComponentRefresh() {
    this.setState({refreshing: false});
  }

  render() {
    const {refreshing} = this.state;

    return (
      <div className="notificationsFrame">
        <div className="panel">
          <Header title="Githib Activity" />
          <Content
            onComponentRefresh={this.onComponentRefresh.bind(this)}
            requestRefresh={refreshing}
            fetchData={fetchEvents}
          />
          <Footer>
            <button onClick={this.refresh.bind(this)}>
              <i className="fa fa-refresh" />
              Refresh
            </button>
          </Footer>
        </div>
        <Clock />
      </div>
        /*  
        <div className="notificationsFrame">
        <div className="panel">
          <Header title="TimeLine" />
          Passing in the activities
          <Content activities={activities} />
        </div>
        <Clock />
      </div> 
      */
    )
  }
}

const activities = [
  {
    timeStamp: new Date().getTime(),
    text: "Ate Lunch",
    user: {
      id: 1,
      name: 'Nate',
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [{ from: 'Ari', text: 'Me too!' }]
  },
  {
    timeStamp: new Date().getTime(),
    text: "Woke up early for a beautiful run",
    user: {
      id: 2,
      name: 'Ari',
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
  },
    comments: [{ from: 'Nate', text: 'I am so jealous' }]
  },
]

export default App;
