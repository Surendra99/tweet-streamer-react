import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { UNIQUE_STRING } from '../constants';

/**
 * TODO: On scroll up display old tweets
 */
export default class TweetsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showedTweets: [],
            searchString: '',
        }
        this.tweets = [];
    }

    componentDidMount() {
        const { cableApp } = this.props;
        cableApp.subscription = cableApp.cable.subscriptions.create({ channel: 'ConversationsChannel', roomId: UNIQUE_STRING }, {
            received: this.handle_received_tweet
        })
    }

    handle_received_tweet = (tweet) => {
        const { showedTweets } = this.state;
        if (showedTweets.length >= 20) {
            showedTweets.splice(0, 1);
        }
        showedTweets.push(tweet);
        this.tweets.push(tweet);
        this.setState({ showedTweets: showedTweets });
    }

    render_list = () => {
        const { showedTweets } = this.state;
        return (
            <ListGroup>
                {
                    showedTweets.map((tweet, index) => {
                        return <ListGroup.Item key={index}>{tweet}</ListGroup.Item>
                    })
                }
            </ListGroup>
        )
    }
    send_search_query = () => {
        const {cableApp} = this.props;
        const {searchString} = this.state;
        cableApp.subscription.send({ roomId: UNIQUE_STRING,searchString: searchString });
    }

    render_search_component = () => {
        return (
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={(event)=>this.setState({searchString:event.target.value})} />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={this.send_search_query}>Button</button>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.render_search_component()}
                {this.render_list()}
            </div>

        )
    }
}
