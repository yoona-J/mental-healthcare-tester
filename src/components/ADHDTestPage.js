import React, { useState } from 'react'
import { Radio, Collapse } from 'antd'

function ADHDTestPage() {

    const [Result, setResult] = useState()
    const [Inattention, setInattention] = useState()
    const [Hyperactivity, setHyperactivity] = useState()
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
    const [No16, setNo16] = useState('')
    const [No17, setNo17] = useState('')
    const [No18, setNo18] = useState('')
    const [isCollapsed, setIsCollapsed] = useState(false);

    const no1 = (event) => {
        if (Number(event.target.value) < 2) {
            setNo1(Number(0))
        } else if (Number(event.target.value) >= 2) {
            setNo1(Number(1))
        } 
        console.log('IsClicked', event.target.value)
    }
    const no2 = (event) => {
        if (Number(event.target.value) < 2) {
            setNo2(Number(0))
        } else if (Number(event.target.value) >= 2) {
            setNo2(Number(1))
        } 
        console.log('IsClicked', event.target.value)
    }
    const no3 = (event) => {
        if (Number(event.target.value) < 2) {
            setNo3(Number(0))
        } else if (Number(event.target.value) >= 2) {
            setNo3(Number(1))
        } 
        console.log('IsClicked', event.target.value)
    }
    const no4 = (event) => {
        if (Number(event.target.value) < 2) {
            setNo4(Number(0))
        } else if (Number(event.target.value) >= 2) {
            setNo4(Number(1))
        } 
        console.log('IsClicked', event.target.value)
    }
    const no5 = (event) => {
        if (Number(event.target.value) < 2) {
            setNo5(Number(0))
        } else if (Number(event.target.value) >= 2) {
            setNo5(Number(1))
        } 
        console.log('IsClicked', event.target.value)
    }
    const no6 = (event) => {
        if (Number(event.target.value) < 2) {
            setNo6(Number(0))
        } else if (Number(event.target.value) >= 2) {
            setNo6(Number(1))
        } 
        console.log('IsClicked', event.target.value)
    }
    const no7 = (event) => {
        if (Number(event.target.value) < 2) {
            setNo7(Number(0))
        } else if (Number(event.target.value) >= 2) {
            setNo7(Number(1))
        } 
        console.log('IsClicked', event.target.value)
    }
    const no8 = (event) => {
        if (Number(event.target.value) < 2) {
            setNo8(Number(0))
        } else if (Number(event.target.value) >= 2) {
            setNo8(Number(1))
        } 
        console.log('IsClicked', event.target.value)
    }
    const no9 = (event) => {
        if (Number(event.target.value) < 2) {
            setNo9(Number(0))
        } else if (Number(event.target.value) >= 2) {
            setNo9(Number(1))
        } 
        console.log('IsClicked', event.target.value)
    }
    const no10 = (event) => {
        if (Number(event.target.value) < 2) {
            setNo10(Number(0))
        } else if (Number(event.target.value) >= 2) {
            setNo10(Number(1))
        } 
        console.log('IsClicked', event.target.value)
    }
    const no11 = (event) => {
        if (Number(event.target.value) < 2) {
            setNo11(Number(0))
        } else if (Number(event.target.value) >= 2) {
            setNo11(Number(1))
        } 
        console.log('IsClicked', event.target.value)
    }
    const no12 = (event) => {
        if (Number(event.target.value) < 2) {
            setNo12(Number(0))
        } else if (Number(event.target.value) >= 2) {
            setNo12(Number(1))
        } 
        console.log('IsClicked', event.target.value)
    }
    const no13 = (event) => {
        if (Number(event.target.value) < 2) {
            setNo13(Number(0))
        } else if (Number(event.target.value) >= 2) {
            setNo13(Number(1))
        } 
        console.log('IsClicked', event.target.value)
    }
    const no14 = (event) => {
        if (Number(event.target.value) < 2) {
            setNo14(Number(0))
        } else if (Number(event.target.value) >= 2) {
            setNo14(Number(1))
        } 
        console.log('IsClicked', event.target.value)
    }
    const no15 = (event) => {
        if (Number(event.target.value) < 2) {
            setNo15(Number(0))
        } else if (Number(event.target.value) >= 2) {
            setNo15(Number(1))
        } 
        console.log('IsClicked', event.target.value)
    }
    const no16 = (event) => {
        if (Number(event.target.value) < 2) {
            setNo16(Number(0))
        } else if (Number(event.target.value) >= 2) {
            setNo16(Number(1))
        } 
        console.log('IsClicked', event.target.value)
    }
    const no17 = (event) => {
        if (Number(event.target.value) < 2) {
            setNo17(Number(0))
        } else if (Number(event.target.value) >= 2) {
            setNo17(Number(1))
        } 
        console.log('IsClicked', event.target.value)
    }
    const no18 = (event) => {
        if (Number(event.target.value) < 2) {
            setNo18(Number(0))
        } else if (Number(event.target.value) >= 2) {
            setNo18(Number(1))
        } 
        console.log('IsClicked', event.target.value)
    }

    const handleSubmit = () => {
        setIsCollapsed(!isCollapsed);
        setResult(Number(No1 + No2 + No3 + No4 + No5 + No6))
        setInattention(Number(No1 + No2 + No3 + No4 + No7 + No8 + No9 + No10 + No11))
        setHyperactivity(Number(No5 + No6 + No12 + No13 + No14 + No15 + No16 + No17 + No18))
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
                }}>ADHD Test</p>
                <hr />
                <p>Please answer the questions below, rating yourself on each of the criteria shown.</p>
                <p>As you answer each question, select the button that best describes how you have felt and conducted yourself over the past 6 months.</p>
                <br />
                <div>
                    <p>1. How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?</p>
                    <Radio.Group onChange={no1}>
                        <Radio.Button value="0">never</Radio.Button>
                        <Radio.Button value="1">rarely</Radio.Button>
                        <Radio.Button value="2">sometimes</Radio.Button>
                        <Radio.Button value="3">often</Radio.Button>
                        <Radio.Button value="4">very often</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>2. How often do you have difficulty getting things in order when you have to do a task that requires organization?</p>
                    <Radio.Group onChange={no2}>
                        <Radio.Button value="0">never</Radio.Button>
                        <Radio.Button value="1">rarely</Radio.Button>
                        <Radio.Button value="2">sometimes</Radio.Button>
                        <Radio.Button value="3">often</Radio.Button>
                        <Radio.Button value="4">very often</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>3. How often do you have problems remembering appointments or obligations?</p>
                    <Radio.Group onChange={no3}>
                        <Radio.Button value="0">never</Radio.Button>
                        <Radio.Button value="1">rarely</Radio.Button>
                        <Radio.Button value="2">sometimes</Radio.Button>
                        <Radio.Button value="3">often</Radio.Button>
                        <Radio.Button value="4">very often</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>4. When you have a task that requires a lot of thought, how often do you avoid or delay getting started?</p>
                    <Radio.Group onChange={no4}>
                        <Radio.Button value="0">never</Radio.Button>
                        <Radio.Button value="1">rarely</Radio.Button>
                        <Radio.Button value="2">sometimes</Radio.Button>
                        <Radio.Button value="3">often</Radio.Button>
                        <Radio.Button value="4">very often</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>5. How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?</p>
                    <Radio.Group onChange={no5}>
                        <Radio.Button value="0">never</Radio.Button>
                        <Radio.Button value="1">rarely</Radio.Button>
                        <Radio.Button value="2">sometimes</Radio.Button>
                        <Radio.Button value="3">often</Radio.Button>
                        <Radio.Button value="4">very often</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>6. How often do you feel overly active and compelled to do things, like you were driven by a motor?</p>
                    <Radio.Group onChange={no6}>
                        <Radio.Button value="0">never</Radio.Button>
                        <Radio.Button value="1">rarely</Radio.Button>
                        <Radio.Button value="2">sometimes</Radio.Button>
                        <Radio.Button value="3">often</Radio.Button>
                        <Radio.Button value="4">very often</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>7. How often do you make careless mistakes when you have to work on a boring or difficult project?</p>
                    <Radio.Group onChange={no7}>
                        <Radio.Button value="0">never</Radio.Button>
                        <Radio.Button value="1">rarely</Radio.Button>
                        <Radio.Button value="2">sometimes</Radio.Button>
                        <Radio.Button value="3">often</Radio.Button>
                        <Radio.Button value="4">very often</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>8. How often do you have difficulty keeping your attention when you are doing boring or repetitive work?</p>
                    <Radio.Group onChange={no8}>
                        <Radio.Button value="0">never</Radio.Button>
                        <Radio.Button value="1">rarely</Radio.Button>
                        <Radio.Button value="2">sometimes</Radio.Button>
                        <Radio.Button value="3">often</Radio.Button>
                        <Radio.Button value="4">very often</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>9. How often do you have difficulty concentrating on what people say to you, even when they are speaking to you directly?</p>
                    <Radio.Group onChange={no9}>
                        <Radio.Button value="0">never</Radio.Button>
                        <Radio.Button value="1">rarely</Radio.Button>
                        <Radio.Button value="2">sometimes</Radio.Button>
                        <Radio.Button value="3">often</Radio.Button>
                        <Radio.Button value="4">very often</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>10. How often do you misplace or have difficulty finding things at home or at work?</p>
                    <Radio.Group onChange={no10}>
                        <Radio.Button value="0">never</Radio.Button>
                        <Radio.Button value="1">rarely</Radio.Button>
                        <Radio.Button value="2">sometimes</Radio.Button>
                        <Radio.Button value="3">often</Radio.Button>
                        <Radio.Button value="4">very often</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>11. How often are you distracted by activity or noise around you?</p>
                    <Radio.Group onChange={no11}>
                        <Radio.Button value="0">never</Radio.Button>
                        <Radio.Button value="1">rarely</Radio.Button>
                        <Radio.Button value="2">sometimes</Radio.Button>
                        <Radio.Button value="3">often</Radio.Button>
                        <Radio.Button value="4">very often</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>12. How often do you leave your seat in meetings or other situations in which you are expected to remain seated?</p>
                    <Radio.Group onChange={no12}>
                        <Radio.Button value="0">never</Radio.Button>
                        <Radio.Button value="1">rarely</Radio.Button>
                        <Radio.Button value="2">sometimes</Radio.Button>
                        <Radio.Button value="3">often</Radio.Button>
                        <Radio.Button value="4">very often</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>13. How often do you feel restless or fidgety?</p>
                    <Radio.Group onChange={no13}>
                        <Radio.Button value="0">never</Radio.Button>
                        <Radio.Button value="1">rarely</Radio.Button>
                        <Radio.Button value="2">sometimes</Radio.Button>
                        <Radio.Button value="3">often</Radio.Button>
                        <Radio.Button value="4">very often</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>14. How often do you have difficulty unwinding and relaxing when you have time to yourself?</p>
                    <Radio.Group onChange={no14}>
                        <Radio.Button value="0">never</Radio.Button>
                        <Radio.Button value="1">rarely</Radio.Button>
                        <Radio.Button value="2">sometimes</Radio.Button>
                        <Radio.Button value="3">often</Radio.Button>
                        <Radio.Button value="4">very often</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>15. How often do you find yourself talking too much when you are in social situations?</p>
                    <Radio.Group onChange={no15}>
                        <Radio.Button value="0">never</Radio.Button>
                        <Radio.Button value="1">rarely</Radio.Button>
                        <Radio.Button value="2">sometimes</Radio.Button>
                        <Radio.Button value="3">often</Radio.Button>
                        <Radio.Button value="4">very often</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>16. When you’re in a conversation, how often do you find yourself finishing the sentences of the people you are talking to, before they can finish them themselves?</p>
                    <Radio.Group onChange={no16}>
                        <Radio.Button value="0">never</Radio.Button>
                        <Radio.Button value="1">rarely</Radio.Button>
                        <Radio.Button value="2">sometimes</Radio.Button>
                        <Radio.Button value="3">often</Radio.Button>
                        <Radio.Button value="4">very often</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>17. How often do you have difficulty waiting your turn in situations when turn taking is required?</p>
                    <Radio.Group onChange={no17}>
                        <Radio.Button value="0">never</Radio.Button>
                        <Radio.Button value="1">rarely</Radio.Button>
                        <Radio.Button value="2">sometimes</Radio.Button>
                        <Radio.Button value="3">often</Radio.Button>
                        <Radio.Button value="4">very often</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>18. How often do you interrupt others when they are busy?</p>
                    <Radio.Group onChange={no18}>
                        <Radio.Button value="0">never</Radio.Button>
                        <Radio.Button value="1">rarely</Radio.Button>
                        <Radio.Button value="2">sometimes</Radio.Button>
                        <Radio.Button value="3">often</Radio.Button>
                        <Radio.Button value="4">very often</Radio.Button>
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
                                        <p>Overall Score : {Result}/6</p>
                                        <p>Inattention : {Inattention}/9</p>
                                        <p>Hyperactivity/Impulsivity : {Hyperactivity}/9</p>
                                        <br />
                                        { Result>3 ? <p>Your results indicate that you are experiencing some signs of ADHD.</p> : <p>Your results indicate that you are experiencing none, or very few signs of ADHD.</p> }
                                        <p>Inattention questions: 1, 2, 3, 4, 7, 8, 9, 10, 11</p>
                                        <p>Hyperactivity/impulsivity questions: 5, 6, 12, 13, 14, 15, 16, 17, 18</p>
                                    </div>,
                                },
                            ]}
                        />)}
                </div>
            </div>
        </div>
    )
}

export default ADHDTestPage