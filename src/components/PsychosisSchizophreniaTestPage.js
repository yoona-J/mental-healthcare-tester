import React, { useState } from 'react'
import { Radio, Collapse } from 'antd'

function PsychosisSchizophreniaTestPage() {

    const [Result, setResult] = useState()
    const [No1, setNo1] = useState(null)
    const [No2, setNo2] = useState(null)
    const [No3, setNo3] = useState(null)
    const [No4, setNo4] = useState(null)
    const [No5, setNo5] = useState(null)
    const [No6, setNo6] = useState(null)
    const [No7, setNo7] = useState(null)
    const [No8, setNo8] = useState(null)
    const [No9, setNo9] = useState(null)
    const [No10, setNo10] = useState(null)
    const [No11, setNo11] = useState(null)
    const [No12, setNo12] = useState(null)
    const [No13, setNo13] = useState(null)
    const [No14, setNo14] = useState(null)
    const [No15, setNo15] = useState(null)
    const [No16, setNo16] = useState(null)
    const [No17, setNo17] = useState(null)
    const [No18, setNo18] = useState(null)
    const [No19, setNo19] = useState(null)
    const [No20, setNo20] = useState(null)
    const [No21, setNo21] = useState(null)
    const [isCollapsed, setIsCollapsed] = useState(false);
  
    const [isYesSelected1, setIsYesSelected1] = useState(false);
    const [isYesSelected2, setIsYesSelected2] = useState(false);
    const [isYesSelected3, setIsYesSelected3] = useState(false);
    const [isYesSelected4, setIsYesSelected4] = useState(false);
    const [isYesSelected5, setIsYesSelected5] = useState(false);
    const [isYesSelected6, setIsYesSelected6] = useState(false);
    const [isYesSelected7, setIsYesSelected7] = useState(false);
    const [isYesSelected8, setIsYesSelected8] = useState(false);
    const [isYesSelected9, setIsYesSelected9] = useState(false);
    const [isYesSelected10, setIsYesSelected10] = useState(false);
    const [isYesSelected11, setIsYesSelected11] = useState(false);
    const [isYesSelected12, setIsYesSelected12] = useState(false);
    const [isYesSelected13, setIsYesSelected13] = useState(false);
    const [isYesSelected14, setIsYesSelected14] = useState(false);
    const [isYesSelected15, setIsYesSelected15] = useState(false);
    const [isYesSelected16, setIsYesSelected16] = useState(false);
    const [isYesSelected17, setIsYesSelected17] = useState(false);
    const [isYesSelected18, setIsYesSelected18] = useState(false);
    const [isYesSelected19, setIsYesSelected19] = useState(false);
    const [isYesSelected20, setIsYesSelected20] = useState(false);
    const [isYesSelected21, setIsYesSelected21] = useState(false);

    const no1 = (event) => {
        setNo1(Number(event.target.value))
        if (event.target.value === '0') {
            setIsYesSelected1(true); // Yes가 선택되면 항상 표시되도록 설정
        } else if (event.target.value === '1') {
            setIsYesSelected1(false)
        }
        console.log('IsClicked', event.target.value)
    }
    const no2 = (event) => {
        setNo2(Number(event.target.value))
        if (event.target.value === '0') {
            setIsYesSelected2(true); // Yes가 선택되면 항상 표시되도록 설정
        } else if (event.target.value === '1') {
            setIsYesSelected2(false)
        }
        console.log('IsClicked', event.target.value)
    }
    const no3 = (event) => {
        setNo3(Number(event.target.value))
        if (event.target.value === '0') {
            setIsYesSelected3(true); // Yes가 선택되면 항상 표시되도록 설정
        } else if (event.target.value === '1') {
            setIsYesSelected3(false)
        }
        console.log('IsClicked', event.target.value)
    }
    const no4 = (event) => {
        setNo4(Number(event.target.value))
        if (event.target.value === '0') {
            setIsYesSelected4(true); // Yes가 선택되면 항상 표시되도록 설정
        } else if (event.target.value === '1') {
            setIsYesSelected4(false)
        }
        console.log('IsClicked', event.target.value)
    }
    const no5 = (event) => {
        setNo5(Number(event.target.value))
        if (event.target.value === '0') {
            setIsYesSelected5(true); // Yes가 선택되면 항상 표시되도록 설정
        } else if (event.target.value === '1') {
            setIsYesSelected5(false)
        }
        console.log('IsClicked', event.target.value)
    }
    const no6 = (event) => {
        setNo6(Number(event.target.value))
        if (event.target.value === '0') {
            setIsYesSelected6(true); // Yes가 선택되면 항상 표시되도록 설정
        } else if (event.target.value === '1') {
            setIsYesSelected6(false)
        }
        console.log('IsClicked', event.target.value)
    }
    const no7 = (event) => {
        setNo7(Number(event.target.value))
        if (event.target.value === '0') {
            setIsYesSelected7(true); // Yes가 선택되면 항상 표시되도록 설정
        } else if (event.target.value === '1') {
            setIsYesSelected7(false)
        }
        console.log('IsClicked', event.target.value)
    }
    const no8 = (event) => {
        setNo8(Number(event.target.value))
        if (event.target.value === '0') {
            setIsYesSelected8(true); // Yes가 선택되면 항상 표시되도록 설정
        } else if (event.target.value === '1') {
            setIsYesSelected8(false)
        }
        console.log('IsClicked', event.target.value)
    }
    const no9 = (event) => {
        setNo9(Number(event.target.value))
        if (event.target.value === '0') {
            setIsYesSelected9(true); // Yes가 선택되면 항상 표시되도록 설정
        } else if (event.target.value === '1') {
            setIsYesSelected9(false)
        }
        console.log('IsClicked', event.target.value)
    }
    const no10 = (event) => {
        setNo10(Number(event.target.value))
        if (event.target.value === '0') {
            setIsYesSelected10(true); // Yes가 선택되면 항상 표시되도록 설정
        } else if (event.target.value === '1') {
            setIsYesSelected10(false)
        }
        console.log('IsClicked', event.target.value)
    }
    const no11 = (event) => {
        setNo11(Number(event.target.value))
        if (event.target.value === '0') {
            setIsYesSelected11(true); // Yes가 선택되면 항상 표시되도록 설정
        } else if (event.target.value === '1') {
            setIsYesSelected11(false)
        }
        console.log('IsClicked', event.target.value)
    }
    const no12 = (event) => {
        setNo12(Number(event.target.value))
        if (event.target.value === '0') {
            setIsYesSelected12(true); // Yes가 선택되면 항상 표시되도록 설정
        } else if (event.target.value === '1') {
            setIsYesSelected12(false)
        }
        console.log('IsClicked', event.target.value)
    }
    const no13 = (event) => {
        setNo13(Number(event.target.value))
        if (event.target.value === '0') {
            setIsYesSelected13(true); // Yes가 선택되면 항상 표시되도록 설정
        } else if (event.target.value === '1') {
            setIsYesSelected13(false)
        }
        console.log('IsClicked', event.target.value)
    }
    const no14 = (event) => {
        setNo14(Number(event.target.value))
        if (event.target.value === '0') {
            setIsYesSelected14(true); // Yes가 선택되면 항상 표시되도록 설정
        } else if (event.target.value === '1') {
            setIsYesSelected14(false)
        }
        console.log('IsClicked', event.target.value)
    }
    const no15 = (event) => {
        setNo15(Number(event.target.value))
        if (event.target.value === '0') {
            setIsYesSelected15(true); // Yes가 선택되면 항상 표시되도록 설정
        } else if (event.target.value === '1') {
            setIsYesSelected15(false)
        }
        console.log('IsClicked', event.target.value)
    }
    const no16 = (event) => {
        setNo16(Number(event.target.value))
        if (event.target.value === '0') {
            setIsYesSelected16(true); // Yes가 선택되면 항상 표시되도록 설정
        } else if (event.target.value === '1') {
            setIsYesSelected16(false)
        }
        console.log('IsClicked', event.target.value)
    }
    const no17 = (event) => {
        setNo17(Number(event.target.value))
        if (event.target.value === '0') {
            setIsYesSelected17(true); // Yes가 선택되면 항상 표시되도록 설정
        } else if (event.target.value === '1') {
            setIsYesSelected17(false)
        }
        console.log('IsClicked', event.target.value)
    }
    const no18 = (event) => {
        setNo18(Number(event.target.value))
        if (event.target.value === '0') {
            setIsYesSelected18(true); // Yes가 선택되면 항상 표시되도록 설정
        } else if (event.target.value === '1') {
            setIsYesSelected18(false)
        }
        console.log('IsClicked', event.target.value)
    }
    const no19 = (event) => {
        setNo19(Number(event.target.value))
        if (event.target.value === '0') {
            setIsYesSelected19(true); // Yes가 선택되면 항상 표시되도록 설정
        } else if (event.target.value === '1') {
            setIsYesSelected19(false)
        }
        console.log('IsClicked', event.target.value)
    }
    const no20 = (event) => {
        setNo20(Number(event.target.value))
        if (event.target.value === '0') {
            setIsYesSelected20(true); // Yes가 선택되면 항상 표시되도록 설정
        } else if (event.target.value === '1') {
            setIsYesSelected20(false)
        }
        console.log('IsClicked', event.target.value)
    }
    const no21 = (event) => {
        setNo21(Number(event.target.value))
        if (event.target.value === '0') {
            setIsYesSelected21(true); // Yes가 선택되면 항상 표시되도록 설정
        } else if (event.target.value === '1') {
            setIsYesSelected21(false)
        }
        console.log('IsClicked', event.target.value)
    }
    

    const handleSubmit = () => {
        setIsCollapsed(!isCollapsed);
        setResult(Number(No1+No2+No3+No4+No5+No6+No7+No8+No9+No10+No11+No12+No13+No14+No15+No16+No17+No18+No19+No20+No21))
    };

    return (
        <div>
            <div>
                <p style={{
                        fontSize: '20px'
                }}>Psychosis & Schizophrenia Test</p>
                <hr />
                <p>In the past month, have you had the following thoughts, feelings, or experiences? Check “yes” or “no” for each item.</p>
                <p>Do not include experiences that occur only while under the influence of alcohol, drugs or medications that were not prescribed to you.</p>
                <p>If you answer “YES” to an item, also indicate how distressing that experience has been for you.</p>
                <p>Please note, all fields are required.</p>
                <br />
                <div>
                    <p>1. Do familiar surroundings sometimes seem strange, confusing, threatening or unreal to you?</p>
                    <Radio.Group onChange={no1}>
                        <Radio.Button value="0">Yes</Radio.Button>
                        <Radio.Button value="1">No</Radio.Button>
                    </Radio.Group>
                </div>
                {isYesSelected1 && ( <div>
                  <p>If YES: When this happens, I feel frightened, concerned, or it causes problems for me :</p>
                      <Radio.Group onChange={no1}>
                          <Radio.Button value="1">Strongly disagree</Radio.Button>
                          <Radio.Button value="2">disagree</Radio.Button>
                          <Radio.Button value="3">neutral</Radio.Button>
                          <Radio.Button value="4">agree</Radio.Button>
                          <Radio.Button value="5">Strongly agree</Radio.Button>
                      </Radio.Group>
                  </div>)}
                <div>
                    <p>2. Have you heard unusual sounds like banging, clicking, hissing, clapping or ringing in your ears?</p>
                    <Radio.Group onChange={no2}>
                        <Radio.Button value="0">Yes</Radio.Button>
                        <Radio.Button value="1">No</Radio.Button>
                    </Radio.Group>
                </div>
                {isYesSelected2 && ( <div>
                  <p>If YES: When this happens, I feel frightened, concerned, or it causes problems for me :</p>
                      <Radio.Group onChange={no2}>
                          <Radio.Button value="1">Strongly disagree</Radio.Button>
                          <Radio.Button value="2">disagree</Radio.Button>
                          <Radio.Button value="3">neutral</Radio.Button>
                          <Radio.Button value="4">agree</Radio.Button>
                          <Radio.Button value="5">Strongly agree</Radio.Button>
                      </Radio.Group>
                  </div>)}
                <div>
                    <p>3. Do things that you see appear different from the way they usually do?</p>
                    <Radio.Group onChange={no3}>
                        <Radio.Button value="0">Yes</Radio.Button>
                        <Radio.Button value="1">No</Radio.Button>
                    </Radio.Group>
                </div>
                {isYesSelected3 && ( <div>
                  <p>If YES: When this happens, I feel frightened, concerned, or it causes problems for me :</p>
                      <Radio.Group onChange={no3}>
                          <Radio.Button value="1">Strongly disagree</Radio.Button>
                          <Radio.Button value="2">disagree</Radio.Button>
                          <Radio.Button value="3">neutral</Radio.Button>
                          <Radio.Button value="4">agree</Radio.Button>
                          <Radio.Button value="5">Strongly agree</Radio.Button>
                      </Radio.Group>
                  </div>)}
                <div>
                    <p>4. Have you had experiences with telepathy, psychic forces, or fortune telling?</p>
                    <Radio.Group onChange={no4}>
                        <Radio.Button value="0">Yes</Radio.Button>
                        <Radio.Button value="1">No</Radio.Button>
                    </Radio.Group>
                </div>
                {isYesSelected4 && ( <div>
                  <p>If YES: When this happens, I feel frightened, concerned, or it causes problems for me :</p>
                      <Radio.Group onChange={no4}>
                          <Radio.Button value="1">Strongly disagree</Radio.Button>
                          <Radio.Button value="2">disagree</Radio.Button>
                          <Radio.Button value="3">neutral</Radio.Button>
                          <Radio.Button value="4">agree</Radio.Button>
                          <Radio.Button value="5">Strongly agree</Radio.Button>
                      </Radio.Group>
                  </div>)}
                <div>
                    <p>5. Have you felt that you are not in control of your own ideas or thoughts?</p>
                    <Radio.Group onChange={no5}>
                        <Radio.Button value="0">Yes</Radio.Button>
                        <Radio.Button value="1">No</Radio.Button>
                    </Radio.Group>
                </div>
                {isYesSelected5 && ( <div>
                  <p>If YES: When this happens, I feel frightened, concerned, or it causes problems for me :</p>
                      <Radio.Group onChange={no5}>
                          <Radio.Button value="1">Strongly disagree</Radio.Button>
                          <Radio.Button value="2">disagree</Radio.Button>
                          <Radio.Button value="3">neutral</Radio.Button>
                          <Radio.Button value="4">agree</Radio.Button>
                          <Radio.Button value="5">Strongly agree</Radio.Button>
                      </Radio.Group>
                  </div>)}
                <div>
                    <p>6. Do you have difficulty getting your point across, because you ramble or go off the track a lot when you talk?</p>
                    <Radio.Group onChange={no6}>
                        <Radio.Button value="0">Yes</Radio.Button>
                        <Radio.Button value="1">No</Radio.Button>
                    </Radio.Group>
                </div>
                {isYesSelected6 && ( <div>
                  <p>If YES: When this happens, I feel frightened, concerned, or it causes problems for me :</p>
                      <Radio.Group onChange={no6}>
                          <Radio.Button value="1">Strongly disagree</Radio.Button>
                          <Radio.Button value="2">disagree</Radio.Button>
                          <Radio.Button value="3">neutral</Radio.Button>
                          <Radio.Button value="4">agree</Radio.Button>
                          <Radio.Button value="5">Strongly agree</Radio.Button>
                      </Radio.Group>
                  </div>)}
                <div>
                    <p>7. Do you have strong feelings or beliefs about being unusually gifted or talented in some way?</p>
                    <Radio.Group onChange={no7}>
                        <Radio.Button value="0">Yes</Radio.Button>
                        <Radio.Button value="1">No</Radio.Button>
                    </Radio.Group>
                </div>
                {isYesSelected7 && ( <div>
                  <p>If YES: When this happens, I feel frightened, concerned, or it causes problems for me :</p>
                      <Radio.Group onChange={no7}>
                          <Radio.Button value="1">Strongly disagree</Radio.Button>
                          <Radio.Button value="2">disagree</Radio.Button>
                          <Radio.Button value="3">neutral</Radio.Button>
                          <Radio.Button value="4">agree</Radio.Button>
                          <Radio.Button value="5">Strongly agree</Radio.Button>
                      </Radio.Group>
                  </div>)}
                <div>
                    <p>8. Do you feel that other people are watching you or talking about you?</p>
                    <Radio.Group onChange={no8}>
                        <Radio.Button value="0">Yes</Radio.Button>
                        <Radio.Button value="1">No</Radio.Button>
                    </Radio.Group>
                </div>
                {isYesSelected8 && ( <div>
                  <p>If YES: When this happens, I feel frightened, concerned, or it causes problems for me :</p>
                      <Radio.Group onChange={no8}>
                          <Radio.Button value="1">Strongly disagree</Radio.Button>
                          <Radio.Button value="2">disagree</Radio.Button>
                          <Radio.Button value="3">neutral</Radio.Button>
                          <Radio.Button value="4">agree</Radio.Button>
                          <Radio.Button value="5">Strongly agree</Radio.Button>
                      </Radio.Group>
                  </div>)}
                <div>
                    <p>9. Do you sometimes get strange feelings on or just beneath your skin, like bugs crawling?</p>
                    <Radio.Group onChange={no9}>
                        <Radio.Button value="0">Yes</Radio.Button>
                        <Radio.Button value="1">No</Radio.Button>
                    </Radio.Group>
                </div>
                {isYesSelected9 && ( <div>
                  <p>If YES: When this happens, I feel frightened, concerned, or it causes problems for me :</p>
                      <Radio.Group onChange={no9}>
                          <Radio.Button value="1">Strongly disagree</Radio.Button>
                          <Radio.Button value="2">disagree</Radio.Button>
                          <Radio.Button value="3">neutral</Radio.Button>
                          <Radio.Button value="4">agree</Radio.Button>
                          <Radio.Button value="5">Strongly agree</Radio.Button>
                      </Radio.Group>
                  </div>)}
                <div>
                    <p>10. Do you sometimes feel suddenly distracted by distant sounds that you are not normally aware of?</p>
                    <Radio.Group onChange={no10}>
                        <Radio.Button value="0">Yes</Radio.Button>
                        <Radio.Button value="1">No</Radio.Button>
                    </Radio.Group>
                </div>
                {isYesSelected10 && ( <div>
                  <p>If YES: When this happens, I feel frightened, concerned, or it causes problems for me :</p>
                      <Radio.Group onChange={no10}>
                          <Radio.Button value="1">Strongly disagree</Radio.Button>
                          <Radio.Button value="2">disagree</Radio.Button>
                          <Radio.Button value="3">neutral</Radio.Button>
                          <Radio.Button value="4">agree</Radio.Button>
                          <Radio.Button value="5">Strongly agree</Radio.Button>
                      </Radio.Group>
                  </div>)}
                <div>
                    <p>11. Have you had the sense that some person or force is around you, although you couldn’t see anyone?</p>
                    <Radio.Group onChange={no11}>
                        <Radio.Button value="0">Yes</Radio.Button>
                        <Radio.Button value="1">No</Radio.Button>
                    </Radio.Group>
                </div>
                {isYesSelected11 && ( <div>
                  <p>If YES: When this happens, I feel frightened, concerned, or it causes problems for me :</p>
                      <Radio.Group onChange={no11}>
                          <Radio.Button value="1">Strongly disagree</Radio.Button>
                          <Radio.Button value="2">disagree</Radio.Button>
                          <Radio.Button value="3">neutral</Radio.Button>
                          <Radio.Button value="4">agree</Radio.Button>
                          <Radio.Button value="5">Strongly agree</Radio.Button>
                      </Radio.Group>
                  </div>)}
                <div>
                    <p>12. Do you worry at times that something may be wrong with your mind?</p>
                    <Radio.Group onChange={no12}>
                        <Radio.Button value="0">Yes</Radio.Button>
                        <Radio.Button value="1">No</Radio.Button>
                    </Radio.Group>
                </div>
                {isYesSelected12 && ( <div>
                  <p>If YES: When this happens, I feel frightened, concerned, or it causes problems for me :</p>
                      <Radio.Group onChange={no12}>
                          <Radio.Button value="1">Strongly disagree</Radio.Button>
                          <Radio.Button value="2">disagree</Radio.Button>
                          <Radio.Button value="3">neutral</Radio.Button>
                          <Radio.Button value="4">agree</Radio.Button>
                          <Radio.Button value="5">Strongly agree</Radio.Button>
                      </Radio.Group>
                  </div>)}
                <div>
                    <p>13. Have you ever felt that you don't exist, the world does not exist, or that you are dead?</p>
                    <Radio.Group onChange={no13}>
                        <Radio.Button value="0">Yes</Radio.Button>
                        <Radio.Button value="1">No</Radio.Button>
                    </Radio.Group>
                </div>
                {isYesSelected13 && ( <div>
                  <p>If YES: When this happens, I feel frightened, concerned, or it causes problems for me :</p>
                      <Radio.Group onChange={no13}>
                          <Radio.Button value="1">Strongly disagree</Radio.Button>
                          <Radio.Button value="2">disagree</Radio.Button>
                          <Radio.Button value="3">neutral</Radio.Button>
                          <Radio.Button value="4">agree</Radio.Button>
                          <Radio.Button value="5">Strongly agree</Radio.Button>
                      </Radio.Group>
                  </div>)}
                <div>
                    <p>14. Have you been confused at times whether something you experienced was real or imaginary?</p>
                    <Radio.Group onChange={no14}>
                        <Radio.Button value="0">Yes</Radio.Button>
                        <Radio.Button value="1">No</Radio.Button>
                    </Radio.Group>
                </div>
                {isYesSelected14 && ( <div>
                  <p>If YES: When this happens, I feel frightened, concerned, or it causes problems for me :</p>
                      <Radio.Group onChange={no14}>
                          <Radio.Button value="1">Strongly disagree</Radio.Button>
                          <Radio.Button value="2">disagree</Radio.Button>
                          <Radio.Button value="3">neutral</Radio.Button>
                          <Radio.Button value="4">agree</Radio.Button>
                          <Radio.Button value="5">Strongly agree</Radio.Button>
                      </Radio.Group>
                  </div>)}
                <div>
                    <p>15. Do you hold beliefs that other people would find unusual or bizarre?</p>
                    <Radio.Group onChange={no15}>
                        <Radio.Button value="0">Yes</Radio.Button>
                        <Radio.Button value="1">No</Radio.Button>
                    </Radio.Group>
                </div>
                {isYesSelected15 && ( <div>
                  <p>If YES: When this happens, I feel frightened, concerned, or it causes problems for me :</p>
                      <Radio.Group onChange={no15}>
                          <Radio.Button value="1">Strongly disagree</Radio.Button>
                          <Radio.Button value="2">disagree</Radio.Button>
                          <Radio.Button value="3">neutral</Radio.Button>
                          <Radio.Button value="4">agree</Radio.Button>
                          <Radio.Button value="5">Strongly agree</Radio.Button>
                      </Radio.Group>
                  </div>)}
                <div>
                    <p>16. Do you feel that parts of your body have changed in some way, or that parts of your body are working differently?</p>
                    <Radio.Group onChange={no16}>
                        <Radio.Button value="0">Yes</Radio.Button>
                        <Radio.Button value="1">No</Radio.Button>
                    </Radio.Group>
                </div>
                {isYesSelected16 && ( <div>
                  <p>If YES: When this happens, I feel frightened, concerned, or it causes problems for me :</p>
                      <Radio.Group onChange={no16}>
                          <Radio.Button value="1">Strongly disagree</Radio.Button>
                          <Radio.Button value="2">disagree</Radio.Button>
                          <Radio.Button value="3">neutral</Radio.Button>
                          <Radio.Button value="4">agree</Radio.Button>
                          <Radio.Button value="5">Strongly agree</Radio.Button>
                      </Radio.Group>
                  </div>)}
                <div>
                    <p>17. Are your thoughts sometimes so strong that you can almost hear them?</p>
                    <Radio.Group onChange={no17}>
                        <Radio.Button value="0">Yes</Radio.Button>
                        <Radio.Button value="1">No</Radio.Button>
                    </Radio.Group>
                </div>
                {isYesSelected17 && ( <div>
                  <p>If YES: When this happens, I feel frightened, concerned, or it causes problems for me :</p>
                      <Radio.Group onChange={no17}>
                          <Radio.Button value="1">Strongly disagree</Radio.Button>
                          <Radio.Button value="2">disagree</Radio.Button>
                          <Radio.Button value="3">neutral</Radio.Button>
                          <Radio.Button value="4">agree</Radio.Button>
                          <Radio.Button value="5">Strongly agree</Radio.Button>
                      </Radio.Group>
                  </div>)}
                <div>
                    <p>18. Do you find yourself feeling mistrustful or suspicious of other people?</p>
                    <Radio.Group onChange={no18}>
                        <Radio.Button value="0">Yes</Radio.Button>
                        <Radio.Button value="1">No</Radio.Button>
                    </Radio.Group>
                </div>
                {isYesSelected18 && ( <div>
                  <p>If YES: When this happens, I feel frightened, concerned, or it causes problems for me :</p>
                      <Radio.Group onChange={no18}>
                          <Radio.Button value="1">Strongly disagree</Radio.Button>
                          <Radio.Button value="2">disagree</Radio.Button>
                          <Radio.Button value="3">neutral</Radio.Button>
                          <Radio.Button value="4">agree</Radio.Button>
                          <Radio.Button value="5">Strongly agree</Radio.Button>
                      </Radio.Group>
                  </div>)}
                <div>
                    <p>19. Have you seen unusual things like flashes, flames, blinding light, or geometric figures?</p>
                    <Radio.Group onChange={no19}>
                        <Radio.Button value="0">Yes</Radio.Button>
                        <Radio.Button value="1">No</Radio.Button>
                    </Radio.Group>
                </div>
                {isYesSelected19 && ( <div>
                  <p>If YES: When this happens, I feel frightened, concerned, or it causes problems for me :</p>
                      <Radio.Group onChange={no19}>
                          <Radio.Button value="1">Strongly disagree</Radio.Button>
                          <Radio.Button value="2">disagree</Radio.Button>
                          <Radio.Button value="3">neutral</Radio.Button>
                          <Radio.Button value="4">agree</Radio.Button>
                          <Radio.Button value="5">Strongly agree</Radio.Button>
                      </Radio.Group>
                  </div>)}
                <div>
                    <p>20. Have you seen things that other people can't see or don't seem to see?</p>
                    <Radio.Group onChange={no20}>
                        <Radio.Button value="0">Yes</Radio.Button>
                        <Radio.Button value="1">No</Radio.Button>
                    </Radio.Group>
                </div>
                {isYesSelected20 && ( <div>
                  <p>If YES: When this happens, I feel frightened, concerned, or it causes problems for me :</p>
                      <Radio.Group onChange={no20}>
                          <Radio.Button value="1">Strongly disagree</Radio.Button>
                          <Radio.Button value="2">disagree</Radio.Button>
                          <Radio.Button value="3">neutral</Radio.Button>
                          <Radio.Button value="4">agree</Radio.Button>
                          <Radio.Button value="5">Strongly agree</Radio.Button>
                      </Radio.Group>
                  </div>)}
                <div>
                    <p>21. Do people sometimes find it hard to understand what you are saying?</p>
                    <Radio.Group onChange={no21}>
                        <Radio.Button value="0">Yes</Radio.Button>
                        <Radio.Button value="1">No</Radio.Button>
                    </Radio.Group>
                </div>
                {isYesSelected21 && ( <div>
                  <p>If YES: When this happens, I feel frightened, concerned, or it causes problems for me :</p>
                      <Radio.Group onChange={no21}>
                          <Radio.Button value="1">Strongly disagree</Radio.Button>
                          <Radio.Button value="2">disagree</Radio.Button>
                          <Radio.Button value="3">neutral</Radio.Button>
                          <Radio.Button value="4">agree</Radio.Button>
                          <Radio.Button value="5">Strongly agree</Radio.Button>
                      </Radio.Group>
                  </div>)}
                
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
                                        <p>Score : {Result}/105</p>
                                        { Result>23 ? <p>Your results indicate that you are experiencing some signs of psychosis.</p> : <p>Your results indicate that you have none, or very few signs of psychosis.</p> }
                                        <br />
                                        <p>Each time you answered “Yes”, you also answered a distress question which is scored as following:</p>
                                        <p>Strongly Disagree =1, Disagree =2, Neutral=3, Agree=4, Strongly Agree=5</p>
                                        <p>Click “Your Answers” above to see your score for each question. Item scores are summed,</p>
                                        <p>2. “Yes” to question number 2;</p>
                                        <p>AND</p>
                                        <p>with a possible range of scores from 0–105.</p>
                                    </div>,
                                },
                            ]}
                        />)}
                </div>
            </div>
        </div>
    )
}

export default PsychosisSchizophreniaTestPage