import React, { useState } from 'react'
import { Radio, Collapse } from 'antd'

function DepressionTestPage() {

    const [Result, setResult] = useState()
    const [No1, setNo1] = useState('')
    const [No2, setNo2] = useState('')
    const [No3, setNo3] = useState('')
    const [No4, setNo4] = useState('')
    const [No5, setNo5] = useState('')
    const [No6, setNo6] = useState('')
    const [No7, setNo7] = useState('')
    const [No8, setNo8] = useState('')
    const [No9, setNo9] = useState('')
    const [isCollapsed, setIsCollapsed] = useState(false);

    const no1 = (event) => {
        setNo1(Number(event.target.value))
        console.log('IsClicked', event.target.value)
    }
    const no2 = (event) => {
        setNo2(Number(event.target.value))
        console.log('IsClicked', event.target.value)
    }
    const no3 = (event) => {
        setNo3(Number(event.target.value))
        console.log('IsClicked', event.target.value)
    }
    const no4 = (event) => {
        setNo4(Number(event.target.value))
        console.log('IsClicked', event.target.value)
    }
    const no5 = (event) => {
        setNo5(Number(event.target.value))
        console.log('IsClicked', event.target.value)
    }
    const no6 = (event) => {
        setNo6(Number(event.target.value))
        console.log('IsClicked', event.target.value)
    }
    const no7 = (event) => {
        setNo7(Number(event.target.value))
        console.log('IsClicked', event.target.value)
    }
    const no8 = (event) => {
        setNo8(Number(event.target.value))
        console.log('IsClicked', event.target.value)
    }
    const no9 = (event) => {
        setNo9(Number(event.target.value))
        console.log('IsClicked', event.target.value)
    }
    const no10 = (event) => {
        console.log('IsClicked', event.target.value)
    }
    
    const handleSubmit = () => {
        setIsCollapsed(!isCollapsed);
        setResult(Number(No1+No2+No3+No4+No5+No6+No7+No8+No9))
    };

    return (
        <div>
            <div>
                <a href='./'>
                  <p style={{
                          fontSize: '30px',
                          textAlign: 'center'
                  }}>Mental Healthcare Tester</p>
                </a>
                <br />
                <p style={{
                        fontSize: '20px'
                }}>DEPRESSION TEST</p>
                <hr />
                <p>Over the last 2 weeks, how often have you been bothered by any of the following problems?</p>
                <p>Please note, all fields are required.</p>
                <br />
                <div>
                    <p>1. Little interest or pleasure in doing things</p>
                    <Radio.Group onChange={no1}>
                        <Radio.Button value="0">not at all</Radio.Button>
                        <Radio.Button value="1">several days</Radio.Button>
                        <Radio.Button value="2">more than half the days</Radio.Button>
                        <Radio.Button value="3"> nearly every days</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>2. Feeling down, depressed, or hopeless</p>
                    <Radio.Group onChange={no2}>
                        <Radio.Button value="0">not at all</Radio.Button>
                        <Radio.Button value="1">several days</Radio.Button>
                        <Radio.Button value="2">more than half the days</Radio.Button>
                        <Radio.Button value="3"> nearly every days</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>3. Trouble falling or staying asleep, or sleeping too much</p>
                    <Radio.Group onChange={no3}>
                        <Radio.Button value="0">not at all</Radio.Button>
                        <Radio.Button value="1">several days</Radio.Button>
                        <Radio.Button value="2">more than half the days</Radio.Button>
                        <Radio.Button value="3"> nearly every days</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>4. Feeling tired or having little energy</p>
                    <Radio.Group onChange={no4}>
                        <Radio.Button value="0">not at all</Radio.Button>
                        <Radio.Button value="1">several days</Radio.Button>
                        <Radio.Button value="2">more than half the days</Radio.Button>
                        <Radio.Button value="3"> nearly every days</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>5. Poor appetite or overeating</p>
                    <Radio.Group onChange={no5}>
                        <Radio.Button value="0">not at all</Radio.Button>
                        <Radio.Button value="1">several days</Radio.Button>
                        <Radio.Button value="2">more than half the days</Radio.Button>
                        <Radio.Button value="3"> nearly every days</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>6. Feeling bad about yourself - or that you are a failure or have let yourself or your family down</p>
                    <Radio.Group onChange={no6}>
                        <Radio.Button value="0">not at all</Radio.Button>
                        <Radio.Button value="1">several days</Radio.Button>
                        <Radio.Button value="2">more than half the days</Radio.Button>
                        <Radio.Button value="3"> nearly every days</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>7. Trouble concentrating on things, such as reading the newspaper or watching television</p>
                    <Radio.Group onChange={no7}>
                        <Radio.Button value="0">not at all</Radio.Button>
                        <Radio.Button value="1">several days</Radio.Button>
                        <Radio.Button value="2">more than half the days</Radio.Button>
                        <Radio.Button value="3"> nearly every days</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>8. Moving or speaking so slowly that other people could have noticed</p>
                    <p>Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual</p>
                    <Radio.Group onChange={no8}>
                        <Radio.Button value="0">not at all</Radio.Button>
                        <Radio.Button value="1">several days</Radio.Button>
                        <Radio.Button value="2">more than half the days</Radio.Button>
                        <Radio.Button value="3"> nearly every days</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>9. Thoughts that you would be better off dead, or of hurting yourself</p>
                    <Radio.Group onChange={no9}>
                        <Radio.Button value="0">not at all</Radio.Button>
                        <Radio.Button value="1">several days</Radio.Button>
                        <Radio.Button value="2">more than half the days</Radio.Button>
                        <Radio.Button value="3"> nearly every days</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>10. If you checked off any problems, how difficult have these problems made it for you at work, home, or with other people?</p>
                    <Radio.Group onChange={no10}>
                        <Radio.Button value="0">not difficult at all</Radio.Button>
                        <Radio.Button value="1">somewhere difficult</Radio.Button>
                        <Radio.Button value="2">very difficult</Radio.Button>
                        <Radio.Button value="3">extremely difficult</Radio.Button>
                    </Radio.Group>
                </div>
                <div style={{ marginTop: '30px' }}>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
                <div style={{ marginTop: '30px' }}>
                    {isCollapsed && (
                        <Collapse
                            items={[
                                {
                                    label: 'Result',
                                    children: <div>
                                        <p>Score : {Result}/27</p>
                                        <p>total score</p>
                                        <p>* 1-4: Minimal depression</p>
                                        <p>* 5-9: Mild depression</p>
                                        <p>* 10-14: Moderate depression</p>
                                        <p>* 15-19: Moderately severe depression</p>
                                        <p>* 20-27: Severe depression</p>
                                    </div>,
                                },
                            ]}
                        />)}
                </div>
            </div>
        </div>
    )
}

export default DepressionTestPage