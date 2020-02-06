import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import Typography from '@material-ui/core/Typography'

//import helpers
import generatePositions from 'helpers/generatePositions'
import generateOverall from 'helpers/generateOverall'
import generateAges from 'helpers/generateAges'
import generateYearsRemaining from 'helpers/generateYearsRemaining'
import generateCapHit from 'helpers/generateCapHit'
import generatePositionRank from 'helpers/generatePositionRank'
import generateDevTraits from 'helpers/generateDevTraits'

function PlayerLine({
    onTotalChange
}) {
    const [positionsArray] = useState(generatePositions())
    const [overallArray] = useState(generateOverall())
    const [ageArray] = useState(generateAges())
    const [remYearsArray] = useState(generateYearsRemaining())
    const [capHitArray] = useState(generateCapHit())
    const [positionRankArray] = useState(generatePositionRank())
    const [devTraitArray] = useState(generateDevTraits())
    const [position, setPosition] = useState(0)
    const [overall, setOverall] = useState(0)
    const [age, setAge] = useState(0)
    const [remYears, setRemYears] = useState(0)
    const [capHit, setCapHit] = useState(0)
    const [positionRank, setPositionRank] = useState(0)
    const [devTrait, setDevTrait] = useState(0)
    const [positionInput, setPositionInput] = useState(0)
    const [overallInput, setOverallInput] = useState(0)
    const [ageInput, setAgeInput] = useState(0)
    const [remYearsInput, setRemYearsInput] = useState(0)
    const [capHitInput, setCapHitInput] = useState(0)
    const [positionRankInput, setPositionRankInput] = useState(0)
    const [devTraitInput, setDevTraitInput] = useState(0)
    const [modifier, setModifier] = useState(1)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setModifier(position + age + remYears + capHit + positionRank + devTrait)
    }, [position, age, remYears, capHit, positionRank, devTrait])

    useEffect(() => {
        const finalTotal = parseInt(modifier * overall)
        setTotal(finalTotal > 0 ? finalTotal : 0)
        onTotalChange(finalTotal > 0 ? finalTotal : 0)
    }, [modifier, overall, onTotalChange])

    const schema = [
        {
            title: `Position`,
            target: positionInput,
            setTarget: setPosition,
            setInputTarget: setPositionInput,
            data: positionsArray
        },
        {
            title: `OVR`,
            target: overallInput,
            setTarget: setOverall,
            setInputTarget: setOverallInput,
            data: overallArray
        },
        {
            title: `Age`,
            target: ageInput,
            setTarget: setAge,
            setInputTarget: setAgeInput,
            data: ageArray
        },
        {
            title: `Rem Years`,
            target: remYearsInput,
            setTarget: setRemYears,
            setInputTarget: setRemYearsInput,
            data: remYearsArray
        },
        {
            title: `Cap Hit`,
            target: capHitInput,
            setTarget: setCapHit,
            setInputTarget: setCapHitInput,
            data: capHitArray
        },
        {
            title: `Pos Rank`,
            target: positionRankInput,
            setTarget: setPositionRank,
            setInputTarget: setPositionRankInput,
            data: positionRankArray
        },
        {
            title: `Dev Trait`,
            target: devTraitInput,
            setTarget: setDevTrait,
            setInputTarget: setDevTraitInput,
            data: devTraitArray
        },
    ]

    const content = schema.map((item, index) => {
        const options = item.data.map((option, optionIndex) => 
            <MenuItem key={optionIndex} value={optionIndex + 1}>{option.text}</MenuItem>
        )

        return (
            <Grid key={index} item xs>
                <FormControl fullWidth>
                    <InputLabel>{item.title}</InputLabel>
                    <Select 
                        value={item.target === 0 ? `` : item.target} 
                        onChange={
                            (e) => {
                                const value = e.target.value
                                item.setTarget(item.data[value - 1].val)
                                item.setInputTarget(value)
                            }
                        }>{options}</Select>
                </FormControl>
            </Grid>
        )
    })

    return (
        <Grid container spacing={1} alignItems="flex-end">
            {content}
            <Grid item xs>
                <Typography align="right" variant="body1">{total}</Typography>
            </Grid>
        </Grid>
    )
}

export default PlayerLine