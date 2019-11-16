import React,{Component} from 'react';

class TweetsList extends Component {

    constructor(props){
        super(props);
        this.state = {
            tweets:[]
        }
    }

    handle_received_tweet = (tweet) =>{
        // const {tweets} = this.state;
        // this.setState({tweets:[...tweets,tweet]});
        console.log(tweet);
    }

    render(){
        return(
            <div>llj</div>
        )
    }
}