import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { updatePreferences } from '../redux/actions/RecipeAction';
import './settings.css';

const DropDown = ({ navigation }) => (
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

const Options = ({ title, name, navigation }) => {
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
    <Fragment>
        <Options
            title='Health'
            name='meal'
            navigation={''}
            updatePreferences={props.updatePreferences}
        />
        <Options
            title='Diet'
            name='dish'
            navigation={''}
            updatePreferences={props.updatePreferences}
        />
    </Fragment>
);

export default connect(null, { updatePreferences })(Settings);
