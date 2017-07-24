import React from 'react';
import PropTypes from 'prop-types';
import Formatter from './Formatter';

import './clock.css';

class Clock extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentTime: new Date()
		};

		this.setTimer();
	}

	setTimer() {
		setTimeout(this.updateClock.bind(this), 1000);
	}

	updateClock() {
		this.setState ({
			  currentTime: new Date()
		}, this.setTimer);
	}

	render() {
		const { currentTime } = this.state
    	const hour = currentTime.getHours();
    	const minute = currentTime.getMinutes();
    	const second = currentTime.getSeconds();

    	return (
			<div className='clock'>
        		<Formatter
          			{...this.props}
          			state={this.state}
          			hours={hour}
          			minutes={minute}
          			seconds={second}
        		/>
      		</div>
		)
	}
}

Clock.propTypes = {
	format: PropTypes.string.isRequired
}

export default Clock;
