import React from 'react';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const data = require('./data.json');
const rootUrl = 'https://api.github.com';
const endPoint = '/users/fullstackreact/events';

const fetchEvents = () => Promise.resolve(data)
                      .then(json => json.slice(0, 4))

class Panel extends React.Component {
  constructor(props) {
   	super(props);

    this.state = {
    	refreshing: false,
    	searchFilter: '',
    	activities: [],
    	filtered: []
    }
  }

  componentWillMount() {
  	this.updateData();
  }

  componentWillReceiveProps(nextProps) {
  	//  Check to see if the requestRefresh prop has changed
  	if (nextProps.requestRefresh !== this.props.requestRefresh) {
  		this.setState({
  			refreshing: true
  		}, this.updateData);
  	}
  }

  updateData() {
  	
  	this.setState({
      	refreshing: false,
      	activities: data
    }, this.updateFiltered);
  }

  //  Method bound to the refresh button
  refresh() {
    this.setState({refreshing: true})
  }

  //  Callback from the 'Content' component
  onComponentRefresh() {
    this.setState({refreshing: false});
  }

  handleSearch(val) {
  	console.log("Handle Search Panel");
  	
  	this.setState({
  		searchFilter: val,
  		refreshing: true
  	}, this.updateData);
  }

  updateFiltered(val) {
	const {activities, searchFilter, filtered} = this.state;

  	if (searchFilter === '') {
  		this.setState({
  			filtered: this.state.activities
  		}, this.onComponentRefresh)
  	} else {
  	  const filtered = activities.filter(a => a.actor && a.actor.login.match(searchFilter))
      this.setState({ 
        filtered: filtered
      }, this.onComponentRefresh)
  	}
  }

  render() {
    const {refreshing, activities, filtered} = this.state;

    return (
        <div className="panel">
          <Header 
          	title="Github Activity"
          	onSearch={this.handleSearch.bind(this)}
          />
          <Content
            onComponentRefresh={this.onComponentRefresh.bind(this)}
            requestRefresh={refreshing}
            fetchData={this.updateData.bind(this)}
            activities={filtered}
          />
          <Footer>
            <button onClick={this.refresh.bind(this)}>
              <i className="fa fa-refresh" />
              Refresh
            </button>
          </Footer>
        </div>
      
    )
  }
}

export default Panel
