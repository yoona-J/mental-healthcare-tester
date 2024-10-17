import React, { useState } from 'react'
import { Radio, Collapse } from 'antd'

function PostpartumDepressionTestPage() {

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
    
    const handleSubmit = () => {
        setIsCollapsed(!isCollapsed);
        setResult(Number(No1+No2+No3+No4+No5+No6+No7+No8+No9+No10))
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
                }}>Postpartum Depression Test (New & Expecting Parents)</p>
                <hr />
                <p>This is a test for depression in new and expecting parents.</p>
                <p>Please select the answer that comes closest to how you have felt in the past 7 days–not just how you feel today.</p>
                <p>Please note, all fields are required.</p>

                <br />
                <div>
                    <p>1. I have been able to laugh and see the funny side of things</p>
                    <Radio.Group onChange={no1}>
                        <Radio.Button value="0">as much as i always could</Radio.Button>
                        <Radio.Button value="1">not quite so much now</Radio.Button>
                        <Radio.Button value="2">definitely not so much now</Radio.Button>
                        <Radio.Button value="3">not at all</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>2. I have looked forward with enjoyment to things</p>
                    <Radio.Group onChange={no2}>
                        <Radio.Button value="0">as much as i ever did</Radio.Button>
                        <Radio.Button value="1">rather less than i used to</Radio.Button>
                        <Radio.Button value="2">definitely less than i used to</Radio.Button>
                        <Radio.Button value="3">hardly at all</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>3. I have blamed myself unnecessarily when things went wrong</p>
                    <Radio.Group onChange={no3}>
                        <Radio.Button value="0">no, never</Radio.Button>
                        <Radio.Button value="1">not very often</Radio.Button>
                        <Radio.Button value="2">yes, some of the time</Radio.Button>
                        <Radio.Button value="3">yes, most of the time</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>4. I have been anxious or worried for no good reason</p>
                    <Radio.Group onChange={no4}>
                        <Radio.Button value="0">no, not at all</Radio.Button>
                        <Radio.Button value="1">hardly ever</Radio.Button>
                        <Radio.Button value="2">yes, sometimes</Radio.Button>
                        <Radio.Button value="3">yes, very often</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>5. I have felt scared or panicky for no very good reason</p>
                    <Radio.Group onChange={no5}>
                        <Radio.Button value="0">no, not at all</Radio.Button>
                        <Radio.Button value="1">no, not much</Radio.Button>
                        <Radio.Button value="2">yes, sometimes</Radio.Button>
                        <Radio.Button value="3">yes, quite a lot</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>6. Things have been getting on top of me</p>
                    <Radio.Group onChange={no6}>
                        <Radio.Button value="0">No, I have been coping as well as ever</Radio.Button>
                        <Radio.Button value="1">No, most of the time I have coped quite well</Radio.Button>
                        <Radio.Button value="2">yes, sometimes i haven't been coping as well as usual</Radio.Button>
                        <Radio.Button value="3">yes, most of the time i haven’t been able to cope at all</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>7. I have been so unhappy that I have had difficulty sleeping</p>
                    <Radio.Group onChange={no7}>
                        <Radio.Button value="0">No, not at all</Radio.Button>
                        <Radio.Button value="1">Not very often</Radio.Button>
                        <Radio.Button value="2">Yes, sometimes</Radio.Button>
                        <Radio.Button value="3">Yes, most of the time</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>8. I have felt sad or miserable</p>
                    <Radio.Group onChange={no8}>
                        <Radio.Button value="0">No, not at all</Radio.Button>
                        <Radio.Button value="1">Not very often</Radio.Button>
                        <Radio.Button value="2">Yes, quite often</Radio.Button>
                        <Radio.Button value="3">Yes, most of the time</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>9. I have been so unhappy that I have been crying</p>
                    <Radio.Group onChange={no9}>
                        <Radio.Button value="0">No, never</Radio.Button>
                        <Radio.Button value="1">Only occasionally</Radio.Button>
                        <Radio.Button value="2">Yes, quite often</Radio.Button>
                        <Radio.Button value="3">Yes, most of the time</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>10. The thought of harming myself has occurred to me</p>
                    <Radio.Group onChange={no10}>
                        <Radio.Button value="0">Never</Radio.Button>
                        <Radio.Button value="1">Hardly ever</Radio.Button>
                        <Radio.Button value="2">Sometimes</Radio.Button>
                        <Radio.Button value="3">Yes, quite often</Radio.Button>
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
                                        <p>Score : {Result}/30</p>
                                        <p>total score</p>
                                        <p>* 1-7 Depression not likely</p>
                                        <p>* 9-11 Depression possible</p>
                                        <p>* 12-13 Fairly high possibility of depression</p>
                                        <p>* 14-30 Probable depression</p>
                                    </div>,
                                },
                            ]}
                        />)}
                </div>
            </div>
        </div>
    )
}

export default PostpartumDepressionTestPage