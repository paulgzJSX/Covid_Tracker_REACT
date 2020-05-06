import React from 'react'

import { Cards, Chart, CountryPicker, Header, DeathRate } from './components'

import styles from './App.module.css'
import { fetchData } from './api'

import coronaImage from './images/image.png'


class App extends React.Component {

    state = {
        totalCases: {},
        country: ''
    }
    
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ totalCases: fetchedData });
    }

    handleCountryChange = async (country) => {

        const fetchedData = await fetchData(country);

        this.setState({ totalCases: fetchedData, country })

        console.log(fetchedData);
        console.log(country);
        // fetch data
        // set state

    }
    
    render() { 
        return (
            <div className={styles.container}>
                <img src={coronaImage} alt="COVID-19" className={styles.image}/>
                <Cards totalCases={this.state.totalCases}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart totalCases={this.state.totalCases} country={this.state.country}/>
            </div>
        );
    }
}
 
export default App;