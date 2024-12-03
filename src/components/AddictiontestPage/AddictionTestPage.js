import React, { useState } from 'react'
import { Radio, Checkbox } from 'antd'

function AddictionTestPage() {

    // const [Result, setResult] = useState()
    const [No1, setNo1] = useState('')
    const [No2, setNo2] = useState()

    const no1 = (event) => {
        setNo1(event.target.value)
        console.log('IsClicked', event.target.value)
    }
    const no2 = (value) => {
        setNo2(value)
        console.log('IsSelect', value)
    }
    const NextButton = () => {
      if (No1 === 'alcohol') {
        return <div>
          <a href='./addition/alcohol'>
            <button>Next</button>
          </a>
        </div>
      } else if (No1 === 'drug') {
        return <div>
          <a href='./addition/drug'>
            <button>Next</button>
          </a>
        </div>
      } else if (No1 === 'another') {
        return <div>
          <a href='./addition/another'>
            <button>Next</button>
          </a>
        </div>
      } else {
        return <div>
            <button>Next</button>
        </div>
      }
    }  
  

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
                }}>Addiction Test</p>
                <hr />
                <p>The Addiction Test is for people who are concerned about their use of alcohol, drugs, or other behaviors.</p>
                <p>First, we need to know which substance or behavior you're concerned about. This will help us ask you the right questions.</p>
                <p>If you’re concerned about multiple substances or behaviors, you can think of them all as part of the same pattern of addiction, or you can take the test once for each substance or behavior</p>
                <br />
                <div>
                    <p>What substance or behavior are you most concerned about?</p>
                    <Radio.Group onChange={no1} buttonStyle="solid" >
                        <Radio.Button value="alcohol">Alcohol</Radio.Button>
                        <Radio.Button value="drug">Another drug or multiple drugs</Radio.Button>
                        <Radio.Button value="another">Another behavior (gambling, self-harm, etc.)</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <p>Which of the following are you concerned about?</p>
                    <Checkbox.Group onChange={no2}>
                      <Checkbox value='Alcohol'>Alcohol</Checkbox>
                      <Checkbox value='Cannabis'>Cannabis</Checkbox>
                      <Checkbox value='Nicotine'>Nicotine</Checkbox>
                      <Checkbox value='Benzodiazepines'>Benzodiazepines (e.g. Xanax, Valium)</Checkbox>
                      <Checkbox value='Cocaine'>Cocaine / crack</Checkbox>
                      <Checkbox value='Fentanyl'>Fentanyl</Checkbox>
                      <Checkbox value='Heroin'>Heroin</Checkbox>
                      <Checkbox value='Prescription'>Prescription Opioids (e.g. OxyContin, Percocet, Vicodin)</Checkbox>
                      <Checkbox value='Stimulants'>Stimulants (e.g. speed, meth, Adderall, Ritalin)</Checkbox>
                      <Checkbox value='harm'>Self-harm</Checkbox>
                      <Checkbox value='other'>Other (e.g. gambling, sex, internet, shopping, food, etc.)</Checkbox>
                    </Checkbox.Group>
                </div>
                <div style={{ marginTop: '30px' }}>
                  <NextButton />
                </div>
            </div>
        </div>
    )
}

export default AddictionTestPage