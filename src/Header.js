import React from 'react';
import './timeline.css';

class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			searchVisible: false
		}
	}

	//  Toggle search box visibility
	showSearch() {
		this.setState({
			searchVisible: !this.state.searchVisible
		})
	}

	render() {
		//  Classes for the <input /> element
		//  The standard one
		let searchInputClasses = ["searchInput"];

		//  Add this one if it is supposed to be visible
		if (this.state.searchVisible) {
			searchInputClasses.push("active");
		}

		return (
			<div className="header">
				<div className="menuIcon">
          			<div className="dashTop"></div>
          			<div className="dashBottom"></div>
          			<div className="circle"></div>
        		</div>
        		<span className="title">
					{this.props.title}
				</span>
				<input
					type="text"
					className={searchInputClasses.join(' ')}
					placeholder="Search ..." />
		    	
		    	{/*  Onclick handler will toggle the searchVisible field */}
		    	<div 
		    		onClick={this.showSearch.bind(this)}
		    		className="fa fa-search searchIcon">
		    	</div>	
    		</div>
		)
	}
}

export default Header;
