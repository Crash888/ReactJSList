import React from 'react';
import './timeline.css';

import ActivityItem from './ActivityItem';
import GithubActivityItem from './GithubActivityItem';

const data = require('./data.json').slice(0, 4)

class Content extends React.Component {
	constructor(props) {
		super(props);
		console.log("In constructor" + data);

		this.state = {
			activities: []
		}
	}

    

	componentDidMount() {
    	this.updateData();
  	}

  	componentWillReceiveProps(nextProps) {
    	// Check to see if the requestRefresh prop has changed
    	if (nextProps.requestRefresh !== this.props.requestRefresh) {
      	this.setState({loading: true}, this.updateData);
    	}
  	}

  	// Call out to github data and refresh directory
  	updateData() {
    	this.setState({
      		loading: false,
      		activities: data
          	.sort(() => 0.5 - Math.random()).slice(0, 4)
    	}, this.props.onComponentRefresh);
  	}

	render() {
		const {activities} = this.state;
		const listActivities = activities.map((activity) => 
			<GithubActivityItem key={activity.timeStamp + activity.id} activity={activity} />
		);

		return (
			<div className="content">
				<div className="line"></div>
				{/*  Each Timeline Item */}
				{listActivities}
			</div>
		)
	}
} 

export default Content;
