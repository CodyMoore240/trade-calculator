import React from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

function Assessment({
    difference,
    differencePercent,
    winner
}) {
    return (
        <Paper>
            <Box py={1} px={2}>
                <Typography align="center" variant="h5">Trade Assesment</Typography>
                <Grid container spacing={1}>
                    <Grid item xs={10}>
                        <Typography variant="body2">
                            Difference
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="body2" align="right">
                            {difference}
                        </Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography variant="body2">
                            Difference Percentage
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="body2" align="right">
                            {differencePercent}
                        </Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography variant="body2">
                            Winner
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="body2" align="right">
                            {winner}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    )
}

export default Assessment