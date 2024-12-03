import React from 'react'
import './LandingPage.css'

function LandingPage() {
    return (
        <div>
            <div style={{ width: '100%', height: '100%', margin: '5rem auto'}}>
                <p style={{textAlign: 'center', fontSize: '18px', marginBottom: '80px'}}>Mental Healthcare Tester</p>
                <div className='main_container'>
                    <a href='./depression'>
                        <button style={{ width: '200px', height: '60px', borderRadius: '30px', backgroundColor: '#0E4A84', color: '#fff', border: 'none', margin: '10px' }}>Depression Test</button>
                    </a>
                    <a href='./postpartum'>
                        <button style={{ width: '200px', height: '60px', borderRadius: '30px', backgroundColor: '#0E4A84', color: '#fff', border: 'none', margin: '10px' }}>Postpartum Depression Test</button>
                    </a>
                    <a href='./anxiety'>
                        <button style={{ width: '200px', height: '60px', borderRadius: '30px', backgroundColor: '#0E4A84', color: '#fff', border: 'none', margin: '10px' }}>Anxiety Test</button>
                    </a>
                    <a href='./adhd'>
                        <button style={{ width: '200px', height: '60px', borderRadius: '30px', backgroundColor: '#0E4A84', color: '#fff', border: 'none', margin: '10px' }}>ADHD Test</button>
                    </a>
                    <a href='./bipolar'>
                        <button style={{ width: '200px', height: '60px', borderRadius: '30px', backgroundColor: '#0E4A84', color: '#fff', border: 'none', margin: '10px' }}>Bipolar Test</button>
                    </a>
                    <a href='./psychosis'>
                        <button style={{ width: '200px', height: '60px', borderRadius: '30px', backgroundColor: '#0E4A84', color: '#fff', border: 'none', margin: '10px' }}>Psychosis & Schizophrenia Test</button>
                    </a>
                    <a href='./ptsd'>
                        <button style={{ width: '200px', height: '60px', borderRadius: '30px', backgroundColor: '#0E4A84', color: '#fff', border: 'none', margin: '10px' }}>PTSD Test</button>
                    </a>
                    <a href='./eating'>
                        <button style={{ width: '200px', height: '60px', borderRadius: '30px', backgroundColor: '#0E4A84', color: '#fff', border: 'none', margin: '10px' }}>Eating Disorder Test</button>
                    </a>
                    <a href='./addition'>
                        <button style={{ width: '200px', height: '60px', borderRadius: '30px', backgroundColor: '#0E4A84', color: '#fff', border: 'none', margin: '10px' }}>Addiction Test</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default LandingPage