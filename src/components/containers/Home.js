import React from 'react';
import Header from '../components/Header';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dataResponse: new Set(),
        }
    }

    handleAddToSet = (val) => {
        const newSet = this.state.dataResponse;
        newSet.add(val);
        this.setState({dataResponse: newSet});
    }

    deletion = (val) => {
        const newSet = this.state.dataResponse;
        newSet.delete(val);
        this.setState({
            dataResponse: newSet
        })
    }

    render() {
        return (
            <div>
                <Header />
                <h1 onClick={() => this.handleAddToSet('Yes added')}>
                    add me
                </h1>
                <h1 onClick={() => this.handleAddToSet('Yes added 1')}>
                    add me 1
                </h1>
                <h1 onClick={() => this.handleAddToSet('Yes added 2')}>
                    add me 2
                </h1>
                {
                    Array.from(this.state.dataResponse).map(ele => (
                        <>
                        <h3>{ele}</h3>
                        <button onClick={() => this.deletion(ele)}>remove</button>
                        </>
                    ))
                }
            </div>
        )
    }
}

export default Home;