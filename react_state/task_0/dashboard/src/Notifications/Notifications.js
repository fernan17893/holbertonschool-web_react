import React, { Component, Fragment } from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite';

class Notifications extends Component {
	constructor(props) {
		super(props);
		this.markAsRead = this.markAsRead.bind(this);
	};

	shouldComponentUpdate(nextProps) {
		if (
			this.props.listNotifications.length < nextProps.listNotifications.length ||
			this.props.displayDrawer !== nextProps.displayDrawer
		) {
			return true;
		}
		return false;
	};

	markAsRead(id) {
		console.log(`Notification ${id} has been marked as read`);
	};


	render() {
		let {
			displayDrawer,
			listNotifications,
			handleDisplayDrawer,
			handleHideDrawer,
		} = this.props;

		return (
			<div className="NotificationsComponent">
				<div className={`menuItem ${css(style.menuItem)}`}
					onClick={() => handleDisplayDrawer()}
				>
					Your notifications
				</div>
				{
					displayDrawer &&
					<div className={css(style.Notifications)}>
						<button
							style={{
								color: '#3a3a3a',
								fontWeight: 'bold',
								background: 'none',
								border: 'none',
								fontSize: '15px',
								position: 'absolute',
								right: '3px',
								top: '3px',
								cursor: 'pointer',
								outline: 'none',
							}}
							aria-label="Close"
							onClick={(e) => {
								handleHideDrawer();
							}}
						>
							<img
								src={closeIcon}
								alt="close icon"
							/>
						</button>
						{
							listNotifications.length === 0 &&
							<p>No new notification for now</p>
						}
						{
							listNotifications.length > 0 &&
							<Fragment>
								<p>Here is the list of notifications</p>
								<ul>
									{
										listNotifications.map((notification) => {
											return (
												<NotificationItem
													key={notification.id}
													type={notification.type}
													value={notification.value}
													html={notification.html}
													markAsRead={this.markAsRead}
												/>
											)
										})
									}
									</ul>
								</Fragment>
				}
			</div>
	}
	</div>
		);
	};
};

const opacityKeyframes = {
	'0%': {
		opacity: .5,
	},
	'50%': {
		opacity: .75,
	},
	'100%': {
		opacity: 1,
	},
};

const bounceKeyframes = {
	'0%': {
		transform: 'translateY(0)',
	},
	'50%': {
		transform: 'translateY(-10px)',
	},
	'100%': {
		transform: 'translateY(0)',
	},
};

const style = StyleSheet.create({
	Notifications: {
		border: '2px dotted red',
		padding: '6px 12px',
		marginTop: '12px',
		position: 'relative',
		'@media (max-width: 900px)': {
			position: 'absolute !important',
			top: '0',
			right: '0',
			left: '0',
			background: 'white',
		},
	},
	menuItem: {
		textalign: 'right',
		fontWeight: 'bold',
		pointer: 'cursor',
		':hover': {
			animationName: [opacityKeyframes, bounceKeyframes],
			animationDuration: '1s, 0.5s',
			animationIterationCount: '3',
		},
	},
});

Notifications.protoTypes = {
	displayDrawer: PropTypes.bool,
	listNotifications: PropTypes.arrayOf(NotificationItemShape),
	displayDrawer: PropTypes.bool,
	handleDisplayDrawer: PropTypes.func,
	handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
	displayDrawer: false,
	listNotifications: [],
	displayDrawer: false,
};

export default Notifications;
