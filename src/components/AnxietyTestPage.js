import React, { useState } from 'react'
import { Radio, Collapse } from 'antd'

function AnxietyTestPage() {

    const [Result, setResult] = useState()
    const [No1, setNo1] = useState('')
    const [No2, setNo2] = useState('')
    const [No3, setNo3] = useState('')
    const [No4, setNo4] = useState('')
    const [No5, setNo5] = useState('')
    const [No6, setNo6] = useState('')
    const [No7, setNo7] = useState('')
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

    const handleSubmit = () => {
        setIsCollapsed(!isCollapsed);
        setResult(Number(No1+No2+No3+No4+No5+No6+No7))
    };

    return (
        <div>
            <div>
                <a href='./' style={{ textDecoration: 'none', color: '#0E4A84' }}>
                  <p style={{
                          fontSize: '30px',
                          textAlign: 'center'
                  }}>Mental Healthcare Tester</p>
                </a>
                <br />
                <p style={{
                        fontSize: '20px'
                }}>Anxiety Test</p>
                <hr />
                <p>Over the last 2 weeks, how often have you been bothered by the following problems?</p>
                <p>Please note, all fields are required.</p>
                <br />
                <div>
                    <p>1. Feeling nervous, anxious, or on edge</p>
                    <Radio.Group onChange={no1} buttonStyle="solid">
                        <Radio.Button value="0">not at all</Radio.Button>
                        <Radio.Button value="1">several days</Radio.Button>
                        <Radio.Button value="2">more than half the days</Radio.Button>
                        <Radio.Button value="3">nearly every days</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>2. Not being able to stop or control worrying</p>
                    <Radio.Group onChange={no2} buttonStyle="solid">
                        <Radio.Button value="0">not at all</Radio.Button>
                        <Radio.Button value="1">several days</Radio.Button>
                        <Radio.Button value="2">more than half the days</Radio.Button>
                        <Radio.Button value="3">nearly every days</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>3. Worrying too much about different things</p>
                    <Radio.Group onChange={no3} buttonStyle="solid">
                        <Radio.Button value="0">not at all</Radio.Button>
                        <Radio.Button value="1">several days</Radio.Button>
                        <Radio.Button value="2">more than half the days</Radio.Button>
                        <Radio.Button value="3">nearly every days</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>4. Trouble relaxing</p>
                    <Radio.Group onChange={no4} buttonStyle="solid">
                        <Radio.Button value="0">not at all</Radio.Button>
                        <Radio.Button value="1">several days</Radio.Button>
                        <Radio.Button value="2">more than half the days</Radio.Button>
                        <Radio.Button value="3">nearly every days</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>5. Being so restless that it is hard to sit still</p>
                    <Radio.Group onChange={no5} buttonStyle="solid">
                        <Radio.Button value="0">not at all</Radio.Button>
                        <Radio.Button value="1">several days</Radio.Button>
                        <Radio.Button value="2">more than half the days</Radio.Button>
                        <Radio.Button value="3">nearly every days</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>6. Becoming easily annoyed or irritable</p>
                    <Radio.Group onChange={no6} buttonStyle="solid">
                        <Radio.Button value="0">not at all</Radio.Button>
                        <Radio.Button value="1">several days</Radio.Button>
                        <Radio.Button value="2">more than half the days</Radio.Button>
                        <Radio.Button value="3">nearly every days</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>7. Feeling afraid, as if something awful might happen</p>
                    <Radio.Group onChange={no7} buttonStyle="solid">
                        <Radio.Button value="0">not at all</Radio.Button>
                        <Radio.Button value="1">several days</Radio.Button>
                        <Radio.Button value="2">more than half the days</Radio.Button>
                        <Radio.Button value="3">nearly every days</Radio.Button>
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
                                        <p>Score : {Result}/21</p>
                                        <p>total score</p>
                                        <p>* 0-4: minimal anxiety</p>
                                        <p>* 5-9: mild anxiety</p>
                                        <p>* 10-14: moderate anxiety</p>
                                        <p>* 15-21: severe anxiety</p>
                                    </div>,
                                },
                            ]}
                        />)}
                </div>
            </div>
        </div>
    )
}

export default AnxietyTestPage