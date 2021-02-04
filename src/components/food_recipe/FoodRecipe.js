import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeRecipe } from '../redux/actions/RecipeAction';
import ResponsiveSize from '../responsive_size/ResponsiveSize';
import './food-recipe.css';

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
		<ResponsiveSize lg>
			<div className='message-box'>{messages}</div>
			<div className='message-box-input'>
				<textarea
					name='message'
					type='text'
					placeholder={'Type in a message'}
					className='p-h-100'
					maxLength='5000'
					onKeyDown={(event) => {
						setMessage(message + event.key);
					}}
					value={message}
				></textarea>
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
		</ResponsiveSize>
	);
};

const Recipe = (props) => {
	const { recipe } = props;
	return (
		<div className='message-box-nav'>
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

const FoodRecipe = (props) => {
	return (
		<div className='p-h-100 message-container'>
			<Recipe recipe={props.recipe} />
			<TextArea />
		</div>
	);
};
const mapStateToProps = (state) => ({
	recipe: state.recipes.item,
});

export default connect(mapStateToProps, { removeRecipe })(FoodRecipe);
