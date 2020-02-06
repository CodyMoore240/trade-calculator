import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import Box from '@material-ui/core/Box'
import TradeLine from 'components/TradeLine'

function SelectorBox({
    title,
    onTotalChange
}) {
    const [item1, setItem1] = useState(0)
    const [item2, setItem2] = useState(0)
    const [item3, setItem3] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(item1 + item2 + item3)
    }, [item1, item2, item3])

    useEffect(() => {
        onTotalChange(total)
    }, [total, onTotalChange])

    return (
        <Paper>
            <Box py={1}>
                <Typography align="center" variant="h5">{title}</Typography>
                <Box pt={1}>
                    {/* <Grid container spacing={1}> */}
                        <TradeLine
                            onTotalChange={setItem1}
                        ></TradeLine>
                        <Divider/>
                        <TradeLine
                            onTotalChange={setItem2}
                        ></TradeLine>
                        <Divider/>
                        <TradeLine
                            onTotalChange={setItem3}
                        ></TradeLine>
                    {/* </Grid> */}
                </Box>
                <Divider />
                <Box p={1} pb={0}>
                    <Typography align="right" variant="subtitle1">{total}</Typography>
                </Box>
            </Box>
        </Paper>
    )
}

export default SelectorBox