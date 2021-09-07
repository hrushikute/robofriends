import React, {Component} from 'react';
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';


class App extends Component { 
    constructor() {
        super()
        this.state = {
            robots: [],
            searchFeild : '',
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(users =>{this.setState({robots: users})})
    }
    // Create a function on search change which accepts the event from search box
    onSearchChange = (event) => {
        this.setState({searchFeild: event.target.value})
    
    }

    render(){
        
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchFeild.toLowerCase())
        })
        if (this.state.robots.length === 0) {
            return <h1 className='tc'>LOADING...</h1>
        }
        else{
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboBhai</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                    
                </div>
                
                );
            }

        }


}

export default App;