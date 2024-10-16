import React, { useState } from 'react'
import { Radio, Collapse } from 'antd'

function BipolarTestPage() {

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
    const [No10, setNo10] = useState('')
    const [No11, setNo11] = useState('')
    const [No12, setNo12] = useState('')
    const [No13, setNo13] = useState('')
    const [No14, setNo14] = useState('')
    const [No15, setNo15] = useState('')
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
        setNo10(Number(event.target.value))
        console.log('IsClicked', event.target.value)
    }
    const no11 = (event) => {
        setNo11(Number(event.target.value))
        console.log('IsClicked', event.target.value)
    }
    const no12 = (event) => {
        setNo12(Number(event.target.value))
        console.log('IsClicked', event.target.value)
    }
    const no13 = (event) => {
        setNo13(Number(event.target.value))
        console.log('IsClicked', event.target.value)
    }
    const no14 = (event) => {
        setNo14(Number(event.target.value))
        console.log('IsClicked', event.target.value)
    }
    const no15 = (event) => {
        setNo15(Number(event.target.value))
        console.log('IsClicked', event.target.value)
    }
    const no16 = (event) => {
        console.log('IsClicked', event.target.value)
    }
    const no17 = (event) => {
        console.log('IsClicked', event.target.value)
    }

    const handleSubmit = () => {
        setIsCollapsed(!isCollapsed);
        setResult(Number(No1+No2+No3+No4+No5+No6+No7+No8+No9+No10+No11+No12+No13+No14+No15))
    };

    return (
        <div>
            <div>
                <p style={{
                        fontSize: '20px'
                }}>Bipolar Test</p>
                <hr />
                <p>Please answer each question to the best of your ability.</p>
                <p>Please note, all fields are required.</p>
                <br />
                <p>1. Has there ever been a period of time when you were not your usual self and...</p>
                <div>
                    <p>* You felt so good or hyper that other people thought you were not your normal self or were so hyper that you got into trouble?</p>
                    <Radio.Group onChange={no1}>
                        <Radio.Button value="0">Yes</Radio.Button>
                        <Radio.Button value="1">No</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>* You were so irritable that you shouted at people or started fights or arguments?</p>
                    <Radio.Group onChange={no2}>
                        <Radio.Button value="0">Yes</Radio.Button>
                        <Radio.Button value="1">No</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>* You were so irritable that you shouted at people or started fights or arguments?</p>
                    <Radio.Group onChange={no3}>
                        <Radio.Button value="0">Yes</Radio.Button>
                        <Radio.Button value="1">No</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>* You felt much more self-confident than usual?</p>
                    <Radio.Group onChange={no4}>
                        <Radio.Button value="0">Yes</Radio.Button>
                        <Radio.Button value="1">No</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>* You got much less sleep than usual and found you didn’t really miss it?</p>
                    <Radio.Group onChange={no5}>
                        <Radio.Button value="0">Yes</Radio.Button>
                        <Radio.Button value="1">No</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>* You were much more talkative or spoke much faster than usual?</p>
                    <Radio.Group onChange={no6}>
                        <Radio.Button value="0">Yes</Radio.Button>
                        <Radio.Button value="1">No</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>* Thoughts raced through your head or you couldn’t slow your mind down?</p>
                    <Radio.Group onChange={no7}>
                        <Radio.Button value="0">Yes</Radio.Button>
                        <Radio.Button value="1">No</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>* You were so easily distracted by things around you that you had trouble concentrating or staying on track?</p>
                    <Radio.Group onChange={no8}>
                        <Radio.Button value="0">Yes</Radio.Button>
                        <Radio.Button value="1">No</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>* You had much more energy than usual?</p>
                    <Radio.Group onChange={no9}>
                        <Radio.Button value="0">Yes</Radio.Button>
                        <Radio.Button value="1">No</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>* You were much more social or outgoing than usual, for example, you telephoned friends in the middle of the night?</p>
                    <Radio.Group onChange={no10}>
                        <Radio.Button value="0">Yes</Radio.Button>
                        <Radio.Button value="1">No</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>* You were much more interested in sex than usual?</p>
                    <Radio.Group onChange={no11}>
                        <Radio.Button value="0">Yes</Radio.Button>
                        <Radio.Button value="1">No</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>* You did things that were unusual for you or that other people might have thought were excessive, foolish, or risky?</p>
                    <Radio.Group onChange={no12}>
                        <Radio.Button value="0">Yes</Radio.Button>
                        <Radio.Button value="1">No</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>* Spending money got you or your family into trouble?</p>
                    <Radio.Group onChange={no13}>
                        <Radio.Button value="0">Yes</Radio.Button>
                        <Radio.Button value="1">No</Radio.Button>
                    </Radio.Group>
                </div>
                <br />
                <div>
                    <p>2. If you checked YES to more than one of the above, have several of these ever happened during the same period of time?</p>
                    <Radio.Group onChange={no14}>
                        <Radio.Button value="0">Yes</Radio.Button>
                        <Radio.Button value="1">No</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>3. How much of a problem did any of these cause you?</p>
                    <p>Like being unable to work; having family, money or legal troubles; getting into arguments or fights?</p>
                    <Radio.Group onChange={no15}>
                        <Radio.Button value="0">No Problem</Radio.Button>
                        <Radio.Button value="1">Minor Problem</Radio.Button>
                        <Radio.Button value="2">Moderate Problem</Radio.Button>
                        <Radio.Button value="3">Serious Problem</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>4. Have any of your blood relatives had manic-depressive illness or bipolar disorder?</p>
                    <p>i.e. Children, siblings, parents, grandparents, aunts, and uncles.</p>
                    <Radio.Group onChange={no16}>
                        <Radio.Button value="0">Yes</Radio.Button>
                        <Radio.Button value="1">No</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>5. Has a health professional ever told you that you have manic-depressive illness or bipolar disorder?</p>
                    <Radio.Group onChange={no17}>
                        <Radio.Button value="0">Yes</Radio.Button>
                        <Radio.Button value="1">No</Radio.Button>
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
                                        <p>Score : {Result}/18</p>
                                        { No1+No2+No3+No4+No5+No6+No7+No8+No9+No10+No11+No12+No13>8 && No14==1 && No15>1 ? <p>Your results indicate that you are experiencing some signs of bipolar disorder.</p> : <p>Your results indicate that you are experiencing none, or very few signs of bipolar disorder.</p> }
                                        <br />
                                        <p>If you answered:</p>
                                        <p>1. “Yes” to seven or more of the 13 items in question number 1;</p>
                                        <p>AND</p>
                                        <p>2. “Yes” to question number 2;</p>
                                        <p>AND</p>
                                        <p>3. “Moderate” or “Serious” to question number 3;</p>
                                    </div>,
                                },
                            ]}
                        />)}
                </div>
            </div>
        </div>
    )
}

export default BipolarTestPage