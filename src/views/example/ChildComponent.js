import React from 'react';

class ChildComponent extends React.Component {
	state = {
		showJobs: false,
	};
	handleShowHide = () => {
		this.setState({
			showJobs: !this.state.showJobs,
		});
	};
	handleOnclickDelete = (job) => {
		
		this.props.handleDeleteJob(job);
	};
	render() {
		let { arrJobs } = this.props;
		let { showJobs } = this.state;
		let check = showJobs === true ? 'showJobs=true' : 'showJobs=false';
		console.log('showJobs check ', check);
		return (
			<>
				{showJobs === false ? (
					<div>
						<button onClick={() => this.handleShowHide()}>
							Show
						</button>
					</div>
				) : (
					<>
						<div className="Job-list">
							{arrJobs.map((item, index) => {
								return (
									<div key={item.id}>
										{item.title}-{item.description}
										<></>{' '}
										<span
											onClick={() =>
												this.handleOnclickDelete(item)
											}
										>
											x
										</span>
									</div>
								);
							})}
						</div>
						<div>
							<button onClick={() => this.handleShowHide()}>
								Hide
							</button>
						</div>
					</>
				)}
			</>
		);
	}
}
// const ChildComponent = (props) => {
// 	let { arrJobs } = props;
// 	console.log('check props fun', props);

// 	return (
// 		<>
// 			<div className="job-list">
// 				{arrJobs.map((item) => {
// 					return (
// 						<div key={item.id}>
// 							{item.title} - {item.description}
// 						</div>
// 					);
// 				})}
// 			</div>
// 		</>
// 	);
// };

export default ChildComponent;
