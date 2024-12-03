import React, { useState } from 'react'
import { Radio, Collapse } from 'antd'

function DrugTestPage() {

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
                <p>Your results indicate that you are none, or very few signs of a substance use disorder.</p>
            </div>
        } else if (Result > 1 && Result <= 3) {
            return <div>
                <p>Your results indicate that you are experiencing signs of a mild substance use disorder.</p>
            </div>
        } else if (Result > 3 && Result <= 5) {
            return <div>
                <p>Your results indicate that you are experiencing signs of a moderate substance use disorder.</p>
            </div>
        } else if (Result >= 6) {
            return <div>
                <p>Your results indicate that you are experiencing signs of a severe substance use disorder.</p>
            </div>
        }
    }

    return (
        <div>
            <div>
                <a href='././' style={{ textDecoration: 'none', color: '#0E4A84' }}>
                  <p style={{
                          fontSize: '30px',
                          textAlign: 'center'
                  }}>Mental Healthcare Tester</p>
                </a>
                <br />
                <p style={{
                        fontSize: '20px'
                }}>Drug Test</p>
                <hr />
                <p>This checklist will help you understand how using drugs might be affecting your health.</p>
                <p>Please think about your life in the last 12 months. Then go through the questions below and answer "yes" or "'no" for each one.</p>
                <br />
                <p>In the last 12 months...</p>
                <div>
                    <p>Did you have strong desires or cravings for the drug?</p>
                    <Radio.Group onChange={no1} buttonStyle="solid">
                        <Radio.Button value="0">No</Radio.Button>
                        <Radio.Button value="1">Yes</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>Did you want to cut back or stop using the drug, but couldn't?</p>
                    <Radio.Group onChange={no2} buttonStyle="solid">
                        <Radio.Button value="0">No</Radio.Button>
                        <Radio.Button value="1">Yes</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>Did you spend a lot of time trying to get the drug, using the drug, or recovering from using it?</p>
                    <Radio.Group onChange={no3} buttonStyle="solid">
                        <Radio.Button value="0">No</Radio.Button>
                        <Radio.Button value="1">Yes</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>Did you have times when you used the drug more or for longer than you wanted to?</p>
                    <Radio.Group onChange={no4} buttonStyle="solid">
                        <Radio.Button value="0">No</Radio.Button>
                        <Radio.Button value="1">Yes</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>Did using the same amount of the drug have less effect than it used to? Or did you have to use more to feel the effect you wanted?</p>
                    <p>Please answer “yes” if either question is true for you.</p>
                    <Radio.Group onChange={no5} buttonStyle="solid">
                        <Radio.Button value="0">No</Radio.Button>
                        <Radio.Button value="1">Yes</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>Did you have withdrawal symptoms when you weren't using the drug? Or did you use the drug to avoid having these symptoms?</p>
                    <p>Please answer “yes” if either question is true for you.</p>
                    <Radio.Group onChange={no6} buttonStyle="solid">
                        <Radio.Button value="0">No</Radio.Button>
                        <Radio.Button value="1">Yes</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>Did you continue to use the drug even though you thought it might be causing mental or physical problems — or making them worse?</p>
                    <Radio.Group onChange={no7} buttonStyle="solid">
                        <Radio.Button value="0">No</Radio.Button>
                        <Radio.Button value="1">Yes</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>Did you use the drug even though you thought it might be causing problems with your family or other people?</p>
                    <Radio.Group onChange={no8} buttonStyle="solid">
                        <Radio.Button value="0">No</Radio.Button>
                        <Radio.Button value="1">Yes</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>Did using the drug make it harder for you to keep up with your responsibilities at work, school, or home?</p>
                    <Radio.Group onChange={no9} buttonStyle="solid">
                        <Radio.Button value="0">No</Radio.Button>
                        <Radio.Button value="1">Yes</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>Did you spend less time working, enjoying hobbies, or being with others because of your use of the drug?</p>
                    <Radio.Group onChange={no10} buttonStyle="solid">
                        <Radio.Button value="0">No</Radio.Button>
                        <Radio.Button value="1">Yes</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>Did you do something dangerous more than once after using the drug — like drive a car or operate machinery?</p>
                    <Radio.Group onChange={no11} buttonStyle="solid">
                        <Radio.Button value="0">No</Radio.Button>
                        <Radio.Button value="1">Yes</Radio.Button>
                    </Radio.Group>
                </div>
                <div style={{ marginTop: '30px' }}>
                    <button onClick={handleSubmit} style={{ width: '100px', height: '30px', border: 'none', backgroundColor: '#0E4A84', borderRadius: '20px', color: '#FFF'}}>Submit</button>
                </div>
                <div style={{ marginTop: '30px' }}>
                    {isCollapsed && (
                        <Collapse
                            style={{ marginBottom: '100px'}}
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

export default DrugTestPage