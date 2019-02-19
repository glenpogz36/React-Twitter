import React from 'react';
import Tweetme from './Tweetme';
import Home from './TwitterForm';
import PropTypes from 'prop-types';

class TwitterControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false
        };
        this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
    }

    handleTroubleshootingConfirmation() {
        this.setState({ formVisibleOnPage: true });
    }

    render() {
        let currentlyVisibleContent = null;
        if (this.state.formVisibleOnPage) {
            currentlyVisibleContent = <Home onTweet={this.props.onTweet} />;
        } else {
            currentlyVisibleContent = <Tweetme onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation} />;
        }
        return (
            <div>
                {currentlyVisibleContent}
            </div>
        );
    }
}

TwitterControl.propTypes = {
    onTweet: PropTypes.func
};

export default TwitterControl;