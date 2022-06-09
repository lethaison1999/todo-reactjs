import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {
	state = {
		arrJobs: [
			{ id: 1, title: 'HTML AND CSS', description: 'Học HTML và CSS' },
			{ id: 2, title: 'JavaScript', description: 'Học JavaScript' },
			{ id: 3, title: 'ReactJS', description: 'Học ReactJS' },
		],
	};

	addNewJob = (job) => {
		console.log('check job', job);

		// let currentJob = this.state.arrJobs;
		// currentJob.push(job);

		this.setState({
			arrJobs: [...this.state.arrJobs, job],
			// arrJobs: currentJob,
		});
	};
	handleDeleteJob = (job) => {
		let currentJob = this.state.arrJobs;

		currentJob = currentJob.filter((item) => item.id !== job.id);
		this.setState({
			arrJobs: currentJob,
		});
	};
	componentDidUpdate(prevProps, prevState) {
		console.log(
			'check prestate begin :',
			prevState,
			'prevState new: ',
			this.state
		);
	}
	componentDidMount() {
		console.log('check didMount');
	}
	render() {
		console.log('state render', this.state);
		return (
			<>
				<AddComponent addNewJob={this.addNewJob} />

				<ChildComponent
					arrJobs={this.state.arrJobs}
					handleDeleteJob={this.handleDeleteJob}
				/>
			</>
		);
	}
}
export default MyComponent;
