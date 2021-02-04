import React from 'react';

const Screen = (props) => {
	const { active, children } = props;
	switch (active) {
		case 0:
			return children[0];
		case 1:
			return children[1];
		default:
			return <div>This screen does not exist</div>;
	}
};

export default Screen;
