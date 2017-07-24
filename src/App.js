import React from 'react';
import Panel from './Panel';
import Clock from './Clock';
//import Header from './Header';
//import Content from './Content';
//import Clock from './Clock';
//import Footer from './Footer';
import './index.css';
import './clock.css';

class App extends React.Component {
  
  render() {
    return (
      <div className="notificationsFrame">
        <Panel />
        <Clock />
      </div>
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
