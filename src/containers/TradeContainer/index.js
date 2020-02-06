import React, { useState, useEffect } from 'react'
import PageLayout from 'components/PageLayout'
import SelectorBox from 'components/SelectorBox'
import Assessment from 'components/Assessment'

function TradeContainer() {
    const [difference, setDifference] = useState(0)
    const [differencePercent, setDifferencePercent] = useState(0)
    const [boxOneTotal, setBoxOneTotal] = useState(0)
    const [boxTwoTotal, setBoxTwoTotal] = useState(0)
    const [winner, setWinner] = useState(`Fair`)

    useEffect(() => {
        setDifference((boxOneTotal - boxTwoTotal).toFixed(2))
        const diffPercent = ((1 - (boxTwoTotal / boxOneTotal)) * 100).toFixed(2)
        setDifferencePercent(isNaN(diffPercent) ? 0 : diffPercent)
    }, [boxOneTotal, boxTwoTotal])

    useEffect(() => {
        let val
        const diff = 20
        if (differencePercent > diff) {
            val = `Team A`
        } else if (differencePercent < -diff){
            val = `Team B`
        } else {
            val = `Fair`
        }

        setWinner(val)
    }, [differencePercent])

    const box1 = <SelectorBox
        title={`Team A`}
        onTotalChange={setBoxOneTotal}
    ></SelectorBox>

    const box2 = <SelectorBox
        title={`Team B`}
        onTotalChange={setBoxTwoTotal}
    ></SelectorBox>

    const totalContent = <Assessment
        difference={difference}
        differencePercent={`${differencePercent}%`}
        winner={winner}
    ></Assessment>

    return (
        <PageLayout
            selector1={box1}
            selector2={box2}
            assessment={totalContent}
        ></PageLayout>
    )
}

export default TradeContainer