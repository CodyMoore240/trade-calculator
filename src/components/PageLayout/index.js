import React from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

function PageLayout({
    selector1,
    selector2,
    assessment
}) {
    return (
        <Container maxWidth="md">
            <Box pt={4}>
                <Paper>
                    <Box p={2}>
                        <Typography variant="body1">This is still a work in progress. Use at your own risk. Hopefully this will become more stable in the coming days. Feedback and PRs welcome in the github <a href={`https://github.com/CodyMoore240/trade-calculator`} target="_blank" rel="noopener noreferrer">repo</a>.</Typography>
                    </Box>
                </Paper>
            </Box>
            <Box pt={4}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>{selector1}</Grid>
                    <Grid item xs={12}>{selector2}</Grid>
                    <Grid item xs={12}>{assessment}</Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default PageLayout