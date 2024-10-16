import React from 'react'

function LandingPage() {
    return (
        <div>
            <div style={{ width: '50%', height: '100%', margin: '5rem auto', display: 'flex' }}>
                <div style={{justifyContent: 'space-between'}}>
                    <a href='/depression'>
                        <button style={{ width: '200px', height: '60px', borderRadius: '30px', backgroundColor: '#0E4A84', color: '#fff', border: 'none' }}>Depression Test</button>
                    </a>
                    <a href='/postpartum'>
                        <button style={{ width: '200px', height: '60px', borderRadius: '30px', backgroundColor: '#0E4A84', color: '#fff', border: 'none', margin: '0px 0px 60px 60px' }}>Postpartum Depression Test</button>
                    </a>
                    <a href='/anxiety'>
                        <button style={{ width: '200px', height: '60px', borderRadius: '30px', backgroundColor: '#0E4A84', color: '#fff', border: 'none', margin: '0px 0px 60px 60px' }}>Anxiety Test</button>
                    </a>
                    <a href='/adhd'>
                        <button style={{ width: '200px', height: '60px', borderRadius: '30px', backgroundColor: '#0E4A84', color: '#fff', border: 'none'}}>ADHD Test</button>
                    </a>
                    <a href='/bipolar'>
                        <button style={{ width: '200px', height: '60px', borderRadius: '30px', backgroundColor: '#0E4A84', color: '#fff', border: 'none', margin: '0px 0px 60px 60px' }}>Bipolar Test</button>
                    </a>
                    <a href='/psychosis'>
                        <button style={{ width: '200px', height: '60px', borderRadius: '30px', backgroundColor: '#0E4A84', color: '#fff', border: 'none', margin: '0px 0px 60px 60px' }}>Psychosis & Schizophrenia Test</button>
                    </a>
                    <a href='/ptsd'>
                        <button style={{ width: '200px', height: '60px', borderRadius: '30px', backgroundColor: '#0E4A84', color: '#fff', border: 'none'}}>PTSD Test</button>
                    </a>
                    <a href='/eating'>
                        <button style={{ width: '200px', height: '60px', borderRadius: '30px', backgroundColor: '#0E4A84', color: '#fff', border: 'none', margin: '0px 0px 60px 60px' }}>Eating Disorder Test</button>
                    </a>
                    <a href='/addition'>
                        <button style={{ width: '200px', height: '60px', borderRadius: '30px', backgroundColor: '#0E4A84', color: '#fff', border: 'none', margin: '0px 0px 60px 60px' }}>Addiction Test</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default LandingPage