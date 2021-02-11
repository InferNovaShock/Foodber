import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeRecipe } from '../redux/actions/RecipeAction';
import './food-recipe.css';

const Recipe = (props) => {
	const { recipe } = props;
	return (
		<div id='message-box-nav'>
			<h4>{recipe.label}</h4>
			<button className='send-btn' onClick={() => console.log('clicked')}>
				UNMATCH
			</button>
			<Link to='/' className='recipe-btn'>
				<span className='material-icons'>close</span>
			</Link>
		</div>
	);
};

const Message = (props) => (
	<div className='mt-1'>
		<h6>You</h6>
		<span className='message'>{props.message}</span>
	</div>
);

const TextArea = () => {
	const [message, setMessage] = useState('');
	const [messages, setMessages] = useState([]);
	return (
		<Fragment>
			<div className='message-box'>{messages}</div>
			<div className='message-box-input'>
				<input
					name='message'
					type='text'
					placeholder={'Type in a message'}
					className='p-h-100'
					maxLength='5000'
					onKeyDown={(event) => {
						if (event.key === 'Enter') {
							setMessages([
								...messages,
								<Message message={message} />,
							]);
							setMessage('');
							event.preventDefault();
							return;
						}
						setMessage(message + event.key);
					}}
					value={message}
				/>
				<button
					className='send-btn'
					onClick={() => {
						setMessages([
							...messages,
							<Message message={message} />,
						]);
						setMessage('');
					}}
				>
					SEND
				</button>
			</div>
		</Fragment>
	);
};

const FoodRecipe = (props) => {
	return (
		<div id='food-recipe'>
			<Recipe recipe={props.recipe} />
			<TextArea />
		</div>
	);
};
const mapStateToProps = (state) => ({
	recipe: state.recipes.item,
});

export default connect(mapStateToProps, { removeRecipe })(FoodRecipe);
