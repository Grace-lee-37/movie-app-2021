import React from 'react';
import HomePresenter from './HomePresenter';
import { moviesApi } from 'Components/api';

export default class extends React.Component {
    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        error: null,
        loading: true
    }

    async componentDidMount() {
        try{
            const nowPlaying = await moviesApi.nowPlaying();
            console.log("Hello");
            console.log(nowPlaying);
 
        } catch {
            this.setState({
                error: "Can't find movie information"
            })
        } finally {
            this.setState({
                loading: false
            })
    
        }
    
    };

    render(){
        const {nowPlaying, upcoming, popular, error, loading} = this.state;
        console.log("hi");
        return  (<HomePresenter 
            nowPlaying={nowPlaying}
            upcoming={upcoming}
            popular={popular}
            error={error}
            loading={loading}
            />);
            
    }
}



