import React, { useState } from 'react'
import { Radio, Collapse } from 'antd'

function PTSDTestPage() {

    const [Result, setResult] = useState()
    const [No1, setNo1] = useState('')
    const [No2, setNo2] = useState('')
    const [No3, setNo3] = useState('')
    const [No4, setNo4] = useState('')
    const [No5, setNo5] = useState('')
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

    const handleSubmit = () => {
        setIsCollapsed(!isCollapsed);
        setResult(Number(No1+No2+No3+No4+No5))
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
                }}>PTSD Test</p>
                <hr />
                <p>Sometimes things happen to people that are unusually or especially frightening, - horrible, or traumatic. For example:</p>
                <p>- a serious accident or fire</p>
                <p>- a physical or sexual assault or abuse</p>
                <p>- an earthquake or flood</p>
                <p>- a war</p>
                <p>- seeing someone be killed or seriously injured</p>
                <p>- having a loved one die through homicide or suicide.</p>
                <p>Have you ever experienced this kind of event?</p>
                <p>If YES - please answer the questions below.</p>
                <br />
                <p>In the past month, have you....</p>
                <div>
                    <p>1. had nightmares about the event(s) or thought about the event(s) when you did not want to?</p>
                    <Radio.Group onChange={no1}>
                        <Radio.Button value="0">No</Radio.Button>
                        <Radio.Button value="1">Yes</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>2. tried hard not to think about the event(s) or went out of your way to avoid situations that reminded you of the event(s)?</p>
                    <Radio.Group onChange={no2}>
                        <Radio.Button value="0">No</Radio.Button>
                        <Radio.Button value="1">Yes</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>3. been constantly on guard, watchful, or easily startled?</p>
                    <Radio.Group onChange={no3}>
                        <Radio.Button value="0">No</Radio.Button>
                        <Radio.Button value="1">Yes</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>4. felt numb or detached from people, activities, or your surroundings?</p>
                    <Radio.Group onChange={no4}>
                        <Radio.Button value="0">No</Radio.Button>
                        <Radio.Button value="1">Yes</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>5. felt guilty or unable to stop blaming yourself or others for the event(s) or any problems the event(s) may have caused?</p>
                    <Radio.Group onChange={no5}>
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
                                        <p>Score : {Result}/5</p>
                                        { Result>2 ? <p>Your results indicate that you are experiencing some signs of PTSD.</p> : <p>Your results indicate that you are experiencing none, or very few signs of PTSD.</p>}
                                    </div>,
                                },
                            ]}
                        />)}
                </div>
            </div>
        </div>
    )
}

export default PTSDTestPage