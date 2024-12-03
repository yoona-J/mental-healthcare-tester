import React, { useState } from 'react'
import { Radio, Collapse, InputNumber } from 'antd'

function EatingDisorderTestPage() {

    const [Result, setResult] = useState()
    const [No17, setNo17] = useState('')
    const [No18, setNo18] = useState('')
    const [No19, setNo19] = useState('')
    const [No20, setNo20] = useState('')
    const [No21, setNo21] = useState('')
    const [isCollapsed, setIsCollapsed] = useState(false);
  
    const [isYesSelected, setIsYesSelected] = useState(false);

    const no1 = (event) => {
        console.log('IsClicked', event.target.value)
    }
    const no2 = (event) => {
        console.log('IsClicked', event.target.value)
    }
    const no3 = (event) => {
        console.log('IsClicked', event.target.value)
    }
    const no4 = (event) => {
        console.log('IsClicked', event.target.value)
    }
    const no5 = (event) => {
        console.log('IsClicked', event.target.value)
    }
    const no6 = (value) => {
        if (value >= 1) {
            setIsYesSelected(true);
        } else if (value === 0) {
            setIsYesSelected(false);
        } 
        console.log('Is', value)
    }
    const no7 = (event) => {
        console.log('IsClicked', event.target.value)
    }
    const no8 = (event) => {
        console.log('IsClicked', event.target.value)
    }
    const no9 = (event) => {
        console.log('IsClicked', event.target.value)
    }
    const no10 = (event) => {
        console.log('IsClicked', event.target.value)
    }
    const no11 = (event) => {
        console.log('IsClicked', event.target.value)
    }
    const no12 = (event) => {
        console.log('IsClicked', event.target.value)
    }
    const no13 = (value) => {
      console.log('Is', value)
    }
    const no14 = (value) => {
      console.log('Is', value)
    }
    const no15 = (value) => {
      console.log('Is', value)
    }
    const no16 = (value) => {
      console.log('Is', value)
    }
    const no17 = (event) => {
        setNo17(Number(event.target.value))
        console.log('IsClicked', event.target.value)
    }
    const no18 = (event) => {
        setNo18(Number(event.target.value))
        console.log('IsClicked', event.target.value)
    }
    const no19 = (event) => {
        setNo19(Number(event.target.value))
        console.log('IsClicked', event.target.value)
    }
    const no20 = (event) => {
        setNo20(Number(event.target.value))
        console.log('IsClicked', event.target.value)
    }
    const no21 = (event) => {
        setNo21(Number(event.target.value))
        console.log('IsClicked', event.target.value)
    }
    const no22 = (event) => {
        console.log('IsClicked', event.target.value)
    }

    const handleSubmit = () => {
        setIsCollapsed(!isCollapsed);
        setResult(Number(No17 + No18 + No19 + No20 + No21))
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
                }}>Eating Disorder Test</p>
                <hr />
                <p>Please note, all fields are required to receive a final result.</p>
                <br />
                <div>
                    <p>How much more or less do you feel you worry about your weight and body shape than other people your age?</p>
                    <Radio.Group onChange={no1} buttonStyle="solid">
                        <Radio.Button value="0">I worry a lot less than other people</Radio.Button>
                        <Radio.Button value="25">I worry a little less than other people</Radio.Button>
                        <Radio.Button value="50">I worry about the same as other people</Radio.Button>
                        <Radio.Button value="75">I worry a little more than other people</Radio.Button>
                        <Radio.Button value="100">I worry a lot more than other people</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>How afraid are you of gaining 3 pounds?</p>
                    <Radio.Group onChange={no2} buttonStyle="solid">
                        <Radio.Button value="0">Not afraid of gaining</Radio.Button>
                        <Radio.Button value="25">Slightly afraid of gaining</Radio.Button>
                        <Radio.Button value="50">Moderately afraid of gaining</Radio.Button>
                        <Radio.Button value="75">Very afraid of gaining</Radio.Button>
                        <Radio.Button value="100">Terrified of gaining</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>When was the last time you went on a diet?</p>
                    <Radio.Group onChange={no3} buttonStyle="solid">
                        <Radio.Button value="0">I have never been on a diet</Radio.Button>
                        <Radio.Button value="16">I was on a diet about one year ago</Radio.Button>
                        <Radio.Button value="33">I was on a diet about 6 months ago</Radio.Button>
                        <Radio.Button value="50">I was on a diet about 3 months ago</Radio.Button>
                        <Radio.Button value="66">I was on a diet about 1 month ago</Radio.Button>
                        <Radio.Button value="83">I was on a diet less than 1 month ago</Radio.Button>
                        <Radio.Button value="100">I’m on a diet now</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>Compared to other things in your life, how important is your weight to you?</p>
                    <Radio.Group onChange={no4} buttonStyle="solid">
                        <Radio.Button value="0">My weight is not important compared to other things in my life</Radio.Button>
                        <Radio.Button value="33">My weight is a little more important than some other things in my life</Radio.Button>
                        <Radio.Button value="75">My weight is more important than most, but not all, things in my life</Radio.Button>
                        <Radio.Button value="100">My weight is the most important thing in my life</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>Do you ever feel fat?</p>
                    <Radio.Group onChange={no5} buttonStyle="solid">
                        <Radio.Button value="0">never</Radio.Button>
                        <Radio.Button value="25">rarely</Radio.Button>
                        <Radio.Button value="50">sometimes</Radio.Button>
                        <Radio.Button value="75">often</Radio.Button>
                        <Radio.Button value="100">Always</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>In the past 3 months, how many times have you had a sense of loss of control AND you also ate what most people would regard as an unusually large amount of food at one time, defined as definitely more than most people would eat under similar circumstances?</p>
                    <InputNumber min='0' max='93' defaultValue='' onChange={no6} />
                </div>
                {isYesSelected && ( <div>
                    <p>During these episodes of eating an unusually large amount of food with a sense of loss of control, do you:</p>
                    <p>Eat much more rapidly than normal?</p>
                      <Radio.Group onChange={no7} buttonStyle="solid">
                          <Radio.Button value="0">No</Radio.Button>
                          <Radio.Button value="1">Yes</Radio.Button>
                      </Radio.Group>
                  </div>)}
                {isYesSelected && ( <div>
                    <p>Eat until feeling uncomfortably full?</p>
                      <Radio.Group onChange={no8} buttonStyle="solid">
                          <Radio.Button value="0">No</Radio.Button>
                          <Radio.Button value="1">Yes</Radio.Button>
                      </Radio.Group>
                  </div>)}
                {isYesSelected && ( <div>
                    <p>Eat large amounts of food when not feeling physically hungry?</p>
                      <Radio.Group onChange={no9} buttonStyle="solid">
                          <Radio.Button value="0">No</Radio.Button>
                          <Radio.Button value="1">Yes</Radio.Button>
                      </Radio.Group>
                  </div>)}
                {isYesSelected && ( <div>
                    <p>Eat alone because of feeling embarrassed by how much you are eating?</p>
                    <Radio.Group onChange={no10} buttonStyle="solid">
                          <Radio.Button value="0">No</Radio.Button>
                          <Radio.Button value="1">Yes</Radio.Button>
                      </Radio.Group>
                  </div>)}
                {isYesSelected && ( <div>
                    <p>Feel disgusted, depressed, or very guilty afterward?</p>
                      <Radio.Group onChange={no11} buttonStyle="solid">
                          <Radio.Button value="0">No</Radio.Button>
                          <Radio.Button value="1">Yes</Radio.Button>
                      </Radio.Group>
                  </div>)}
                {isYesSelected && ( <div>
                    <p>How distressed or upset have you felt about these episodes?</p>
                      <Radio.Group onChange={no12} buttonStyle="solid">
                          <Radio.Button value="0">Not at all</Radio.Button>
                          <Radio.Button value="1">A little</Radio.Button>
                          <Radio.Button value="2">Moderately</Radio.Button>
                          <Radio.Button value="3">Greatly</Radio.Button>
                          <Radio.Button value="4">Extremely</Radio.Button>
                      </Radio.Group>
                  </div>)}
                <div>
                    <p>In the past 3 months, how many times have you done any of the following as a means to control your weight and shape:</p>
                    <p>Made yourself throw-up?</p>
                    <InputNumber min='0' max='93' defaultValue='' onChange={no13} />
                </div>
                <div>
                    <p>Used diuretics or laxatives?</p>
                    <InputNumber min='0' max='93' defaultValue='' onChange={no14} />
                </div>
                <div>
                    <p>Exercised excessively?</p>
                    <InputNumber min='0' max='93' defaultValue='' onChange={no15} />
                </div>
                <div>
                    <p>Fasted?</p>
                    <InputNumber min='0' max='93' defaultValue='' onChange={no16} />
                </div>
                <div>
                    <p>Do you consume a small amount of food (i.e., less than 1200 calories/day) on a regular basis to influence your shape or weight?</p>
                    <Radio.Group onChange={no17} buttonStyle="solid">
                          <Radio.Button value="0">No</Radio.Button>
                          <Radio.Button value="1">Yes</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>Do you struggle with a lack of interest in eating or food?</p>
                    <Radio.Group onChange={no18} buttonStyle="solid">
                          <Radio.Button value="0">No</Radio.Button>
                          <Radio.Button value="1">Yes</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>Do you avoid certain or many foods because of such features as texture, consistency, temperature, or smell, or have other people suggested this may be the case for you?</p>
                    <Radio.Group onChange={no19} buttonStyle="solid">
                          <Radio.Button value="0">No</Radio.Button>
                          <Radio.Button value="1">Yes</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>Do you avoid certain or many foods because of fear of experiencing negative consequences like choking or vomiting, or have other people suggested this may be the case for you?</p>
                    <Radio.Group onChange={no20} buttonStyle="solid">
                          <Radio.Button value="0">No</Radio.Button>
                          <Radio.Button value="1">Yes</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>Have you experienced significant weight loss (or are at a low weight for your age and height) but are not overly concerned with the size or shape of your body?</p>
                    <Radio.Group onChange={no21} buttonStyle="solid">
                          <Radio.Button value="0">No</Radio.Button>
                          <Radio.Button value="1">Yes</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>Are you currently in treatment for an eating disorder?</p>
                    <Radio.Group onChange={no22} buttonStyle="solid">
                          <Radio.Button value="0">No</Radio.Button>
                          <Radio.Button value="1">Yes</Radio.Button>
                          <Radio.Button value="2">Not currently, but I have been in the past</Radio.Button>
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
                                        { Result>=1 ? <p>Your results indicate that you are experiencing some signs of Avoidant/Restrictive Food Intake Disorder (ARFID)</p> : <p>Your results indicate that you are experiencing none, or very few signs of an eating disorder.</p> }
                                    </div>,
                                },
                            ]}
                        />)}
                </div>
            </div>
        </div>
    )
}

export default EatingDisorderTestPage