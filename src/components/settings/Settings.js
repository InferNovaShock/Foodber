import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updatePreferences } from '../redux/actions/RecipeAction';
import { HEALTH, DIET } from '../Constant';
import './settings.css';

const DropDown = (props) => {
	const { navigation } = props;
	return (
		<div className='drop-down-menu'>
			{navigation.map((name, index) => (
				<button
					key={index}
					name={name}
					onClick={() => props.updatePreferences({ name })}
				>
					{name.substring(name.indexOf('=') + 1)}
				</button>
			))}
		</div>
	);
};

const Options = (props) => {
	const { title, name, navigation } = props;
	const [active, setActive] = useState(false);

	return (
		<div className='mt-1'>
			<button
				name={name}
				onClick={() => setActive(!active)}
				className='btn drop-down-btn mx-auto'
			>
				{title}
			</button>
			<div className={`${active}`}>
				<DropDown
					navigation={navigation}
					updatePreferences={props.updatePreferences}
				/>
			</div>
		</div>
	);
};

const Settings = (props) => (
	<React.Fragment>
		<Options
			title='Health'
			name='meal'
			navigation={HEALTH}
			updatePreferences={props.updatePreferences}
		/>
		<Options
			title='Diet'
			name='dish'
			navigation={DIET}
			updatePreferences={props.updatePreferences}
		/>
	</React.Fragment>
);

export default connect(null, { updatePreferences })(Settings);
