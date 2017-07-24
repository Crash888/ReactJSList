import React from 'react';
import './timeline.css';

import ActivityItem from './ActivityItem';
import GithubActivityItem from './GithubActivityItem';

class Content extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: false,
			activities: this.props.activities
		}
	}

	componentWillMount() {
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
    		activities: this.state.activities
    	}, this.props.onComponentRefresh)
  	}

	render() {
		
		const {activities, loading} = this.props;
		
		const listActivities = activities.map((activity) => 
			<GithubActivityItem key={activity.timeStamp + activity.id} activity={activity} />
		);

		return (
			<div className="content">
				<div className="line"></div>
				{/* Show loading message if loading */}
        		{loading && <div>Loading</div>}
				{/*  Each Timeline Item */}
				{listActivities}
			</div>
		)
	}
} 

export default Content;
