import React from 'react';

class ActivityItem extends React.Component {
	render() {
		const {activity} = this.props;
		console.log('In ActivityItem');
		
		const time = new Date(activity.timeStamp);
		const hours = time.getHours();
		const minutes = time.getMinutes();

		return (
			<div className="item">
				<div className="avatar">
					<img src={activity.user.avatar} alt="Loading..."/>
					{activity.user.name}
				</div>
				<span className="time">
					{hours + " : " + minutes}
				</span>
				<p>{activity.text}</p>
				<div className="commentCount">
					{activity.comments.length}
				</div>
			</div>
		)
	}
}

export default ActivityItem;
