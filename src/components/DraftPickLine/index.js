import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import Typography from '@material-ui/core/Typography'

//import helpers
import generateDraftPicks from 'helpers/generateDraftPicks'

function DraftPickLine({
    onTotalChange
}) {
    const [type, setType] = useState(1)
    const [modifier, setModifier] = useState(1)
    const [round, setRound] = useState(``)
    const [pick, setPick] = useState(``)
    const [overall, setOverall] = useState(0)
    const [total, setTotal] = useState(null)
    const [picksArray] = useState(generateDraftPicks())

    useEffect(() => {
        if (type === 1) {
            setModifier(1)
        }
        if (type === 2) {
            setModifier(0.5)
        }
    }, [type])

    useEffect(() => {
        if(round && pick) {
            setOverall(parseInt((round - 1) * 32 + pick))
        }
    }, [round, pick])

    useEffect(() => {
        if(overall > 0) {
            const index = overall - 1 
            const finalTotal = picksArray[index] * modifier
            setTotal(finalTotal)
            onTotalChange(finalTotal)
        }
    }, [overall, onTotalChange, modifier, picksArray])

    return (
        <Grid container spacing={1} alignItems="flex-end">
            <Grid item xs>
                <FormControl fullWidth>
                    <InputLabel>Pick Type</InputLabel>
                    <Select
                        defaultValue={1}
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <MenuItem value={1}>Current</MenuItem>
                        <MenuItem value={2}>Future</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs>
                <FormControl fullWidth>
                    <InputLabel>Round</InputLabel>
                    <Select
                        value={round}
                        onChange={(e) => setRound(e.target.value)}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs>
                <FormControl fullWidth>
                    <InputLabel>Pick</InputLabel>
                    <Select
                        value={pick}
                        onChange={(e) => setPick(e.target.value)}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={11}>11</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                        <MenuItem value={13}>13</MenuItem>
                        <MenuItem value={14}>14</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={16}>16</MenuItem>
                        <MenuItem value={17}>17</MenuItem>
                        <MenuItem value={18}>18</MenuItem>
                        <MenuItem value={19}>19</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={21}>21</MenuItem>
                        <MenuItem value={22}>22</MenuItem>
                        <MenuItem value={23}>23</MenuItem>
                        <MenuItem value={24}>24</MenuItem>
                        <MenuItem value={25}>25</MenuItem>
                        <MenuItem value={26}>26</MenuItem>
                        <MenuItem value={27}>27</MenuItem>
                        <MenuItem value={28}>28</MenuItem>
                        <MenuItem value={29}>29</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                        <MenuItem value={31}>31</MenuItem>
                        <MenuItem value={32}>32</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs>
                <Typography align="right" variant="body1">{total}</Typography>
            </Grid>
        </Grid>
    )
}

export default DraftPickLine