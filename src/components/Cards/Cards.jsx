import React from 'react'
import { Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'

const Cards = ({ totalCases: { confirmed, recovered, deaths, lastUpdate }}) => {

    if (!confirmed) {
        return 'Loading ...'
    }
    return ( 
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography gutterBottom color="textSecondary">Infected</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={1.1}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" className={styles.description}>Total COVID-19 cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography gutterBottom color="textSecondary">Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={1.1}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" className={styles.description}>Recovery Rate: <span className={styles.recoveryrate}>{(recovered.value/confirmed.value*100).toFixed(2)}%</span></Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography gutterBottom color="textSecondary">Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={1.1}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" className={styles.description}>Death Rate: <span className={styles.deathrate}>{(deaths.value/confirmed.value*100).toFixed(2)}%</span></Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
     );
}
 
export default Cards;