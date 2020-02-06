import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Box from '@material-ui/core/Box'
import DraftPickLine from 'components/DraftPickLine'
import PlayerLine from 'components/PlayerLine'

import styles from './styles.module.scss'

function TradeLine({
    onTotalChange
}) {
    const [type, setType] = useState(`draft`)

    const handleTypeClick = (val) => {
        setType(val)
    }

    let line = null
    if (type === `draft`) line = <DraftPickLine value={`Testing`} onTotalChange={onTotalChange}></DraftPickLine>
    if (type === `player`) line = <PlayerLine value={1294.9} onTotalChange={onTotalChange}></PlayerLine>

    return (
        <>
            <Box px={1} pb={1}>
                <Grid container px={1} spacing={1} justify="space-between" alignItems="center">
                    <Grid item>
                        <Grid container spacing={1} className={styles.navButtonsWrapper}>
                            <Grid item xs>
                                <Button
                                    variant={type === `draft` ? `contained` : `outlined`}
                                    size="small"
                                    color="primary"
                                    fullWidth
                                    aria-label="Draft Pick"
                                    onClick={() => handleTypeClick(`draft`)}
                                >Draft Pick</Button>
                            </Grid>
                            <Grid item xs>
                                <Button
                                    variant={type === `player` ? `contained` : `outlined`}
                                    size="small"
                                    color="primary"
                                    fullWidth
                                    aria-label="Player"
                                    onClick={() => handleTypeClick(`player`)}
                                >Player</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <IconButton aria-label="delete">
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </Grid>
                </Grid> 
                {line}
            </Box>
        </>
    )
}

export default TradeLine