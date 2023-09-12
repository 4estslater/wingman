import React, { useState, useEffect } from 'react';

import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonContent,
    IonMenuButton,
  } from '@ionic/react';

const Home = () => {
    const [explode, setExplode] = useState(false);
    const [firstFade, setFirstFade] = useState(false);
    const [secondFade, setSecondFade] = useState(false);

    const firstDelay = 500,
          secondDelay = 700;


    useEffect(() => {
        setExplode(true);

        setTimeout(() => setFirstFade(true), firstDelay);
        setTimeout(() => setSecondFade(true), secondDelay);
      });
    
    return (
        <IonPage>
            <div class="flex justify-center">
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
        </IonPage>
    );
};

export default Home;
