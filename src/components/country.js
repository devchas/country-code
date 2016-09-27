import React, { Component } from 'react';
import CodeCoverter from '../helpers/code-converter';

export default class Country extends Component {
	constructor(props) {
		super(props);
		this.state = {
			code: '',
			country: '', 
		}
	}

	handleSubmit(e) {
		e.preventDefault();

		var country = CodeCoverter.getCode(this.state.code);

		this.setState({
			code: '',
			country: country,
		});
	}

	handleChange(e) {
		this.setState({ code: e.target.value });
	}

	render() {
		return(
			<div>
				<br />
				<form onSubmit={this.handleSubmit.bind(this)}>
					<input
						value={this.state.code}
						onChange={this.handleChange.bind(this)}
						placeholder="Enter Country Code" />
					<button action="submit">Submit</button>
				</form>
				<br />
				<div><b>{this.state.country}</b></div>
			</div>
		);
	}
}