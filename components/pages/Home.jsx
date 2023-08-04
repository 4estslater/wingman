import React, { useState, useEffect } from 'react';


const Home = () => {
    const [explode, setExplode] = useState(false);
    const [firstFade, setFirstFade] = useState(false);
    const [secondFade, setSecondFade] = useState(false);

    const firstDelay = 500,
          secondDelay = 1500;


    useEffect(() => {
        setExplode(true);

        setTimeout(() => setFirstFade(true), firstDelay);
        setTimeout(() => setSecondFade(true), secondDelay);
      });
    
    return (
        <div class="mt-20">
            <div class={!explode ? 'wingman-logo' : 'wingman-logo explode'}>
                <div class="mask" />
                <div class="mask bottom" />
                <h1>WingMan</h1>
                <div class="birds-container">
                    <img class={!firstFade ? 'bird' : 'bird fade-in'} src="/img/falcon.png" />
                    <img class={!secondFade ? 'bird right' : 'bird right fade-in'} src="/img/falcon-blue.png" />
                </div>
            </div>
        </div>
    );
};

export default Home;
