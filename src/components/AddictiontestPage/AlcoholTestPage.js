import React, { useState } from 'react'
import { Radio, Collapse } from 'antd'

function AlcoholTestPage() {

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
    
    const handleSubmit = () => {
        setIsCollapsed(!isCollapsed);
        setResult(Number(No1+No2+No3+No4+No5+No6+No7+No8+No9+No10+No11))
    };

    const Range = () => {
        if (Result <= 1) {
            return <div>
                <p>Your results indicate that you are none, or very few signs of a moderate alcohol use disorder.</p>
            </div>
        } else if (Result > 1 && Result <= 3) {
            return <div>
                <p>Your results indicate that you are experiencing signs of a mild alcohol use disorder.</p>
            </div>
        } else if (Result > 3 && Result <= 5) {
            return <div>
                <p>Your results indicate that you are experiencing signs of a moderate alcohol use disorder.</p>
            </div>
        } else if (Result >= 6) {
            return <div>
                <p>Your results indicate that you are experiencing signs of a severe alcohol use disorder.</p>
            </div>
        }
    }

    return (
        <div>
            <div>
                <a href='/'>
                  <p style={{
                          fontSize: '30px',
                          textAlign: 'center'
                  }}>Mental Healthcare Tester</p>
                </a>
                <br />
                <p style={{
                        fontSize: '20px'
                }}>Alcohol Test</p>
                <hr />
                <p>This checklist will help you understand how alcohol might be affecting your health.</p>
                <p>Please think about your life in the last 12 months. Then go through the questions below and answer "yes" or "'no" for each one.</p>
                <br />
                <p>In the last 12 months...</p>
                <div>
                    <p>Did you have strong desires or cravings for alcohol?</p>
                    <Radio.Group onChange={no1}>
                        <Radio.Button value="0">No</Radio.Button>
                        <Radio.Button value="1">Yes</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>Did you want to cut back or stop drinking, but couldn’t?</p>
                    <Radio.Group onChange={no2}>
                        <Radio.Button value="0">No</Radio.Button>
                        <Radio.Button value="1">Yes</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>Did you spend a lot of time getting alcohol, drinking, or feeling hungover?</p>
                    <Radio.Group onChange={no3}>
                        <Radio.Button value="0">No</Radio.Button>
                        <Radio.Button value="1">Yes</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>Did you have times when you drank more or for longer than you wanted to?</p>
                    <Radio.Group onChange={no4}>
                        <Radio.Button value="0">No</Radio.Button>
                        <Radio.Button value="1">Yes</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>Did drinking the same amount have less effect that it used to? Or did you have to drink more to feel the effect you wanted?</p>
                    <p>Please answer “yes” if either question is true for you.</p>
                    <Radio.Group onChange={no5}>
                        <Radio.Button value="0">No</Radio.Button>
                        <Radio.Button value="1">Yes</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>Did you have an upset stomach or get sweaty, shaky, or nervous when you weren’t drinking or when you tried to cut down? Did you drink alcohol or take something to help you feel better?</p>
                    <p>Please answer “yes” if either question is true for you.</p>
                    <Radio.Group onChange={no6}>
                        <Radio.Button value="0">No</Radio.Button>
                        <Radio.Button value="1">Yes</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>Did you continue to drink even though you thought it might be causing physical or mental problems — or making them worse?</p>
                    <Radio.Group onChange={no7}>
                        <Radio.Button value="0">No</Radio.Button>
                        <Radio.Button value="1">Yes</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>Did you drink alcohol even though you thought it might be causing problems with your family or other people?</p>
                    <Radio.Group onChange={no8}>
                        <Radio.Button value="0">No</Radio.Button>
                        <Radio.Button value="1">Yes</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>Did drinking make it harder for you to keep up with your responsibilities at work, school, or home?</p>
                    <Radio.Group onChange={no9}>
                        <Radio.Button value="0">No</Radio.Button>
                        <Radio.Button value="1">Yes</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>Did you spend less time working, enjoying hobbies, or being with others because of your drinking?</p>
                    <Radio.Group onChange={no10}>
                        <Radio.Button value="0">No</Radio.Button>
                        <Radio.Button value="1">Yes</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>Did you do dangerous things more than once after drinking — like drive a car or operate machinery?</p>
                    <Radio.Group onChange={no11}>
                        <Radio.Button value="0">No</Radio.Button>
                        <Radio.Button value="1">Yes</Radio.Button>
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
                                        <p>Score : {Result}/11</p>
                                        <Range />
                                        <hr />
                                        <p>total score</p>
                                        <p>* 0-1: Concern unlikely</p>
                                        <p>* 2-3: Mild concern</p>
                                        <p>* 4-5: Moderate concern</p>
                                        <p>* 6 or more: Severe concern</p>
                                    </div>,
                                },
                            ]}
                        />)}
                </div>
            </div>
        </div>
    )
}

export default AlcoholTestPage