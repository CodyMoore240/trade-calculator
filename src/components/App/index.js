import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { blue } from '@material-ui/core/colors'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import TradeContainer from 'containers/TradeContainer'

import styles from './styles.module.scss'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: blue[700]
        },
    },
})

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar className={styles.appBar} position="static">
                <Typography variant="h6">
                    Trade Calculator
                </Typography>
            </AppBar>
            <Container className={styles.contentWrapper} maxWidth="md">
                <TradeContainer></TradeContainer>
            </Container>
        </ThemeProvider>
    )
}

export default App
