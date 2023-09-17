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

const Home = (props) => {
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
            <IonContent>
                <div className="text-black">{JSON.stringify(props.user)}</div>
                <div className="flex justify-center bg-white">
                    <div className={!explode ? 'wingman-logo' : 'wingman-logo explode'}>
                        <div className="mask" />
                        <div className="mask bottom" />
                        <h1>WingMan</h1>
                        <div className="birds-container">
                            <img className={!firstFade ? 'bird' : 'bird fade-in'} src="/img/falcon.png" />
                            <img className={!secondFade ? 'bird right' : 'bird right fade-in'} src="/img/falcon-blue.png" />
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Home;
