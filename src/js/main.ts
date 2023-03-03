import {ScreenOrientation} from "@capacitor/screen-orientation";
import {SplashScreen} from "@capacitor/splash-screen";

function assertIsOrientationLockType(value: string): asserts value is OrientationLockType {
    if (!["any", "natural", "landscape", "portrait", "portrait-primary", "portrait-secondary", "landscape-primary", "landscape-secondary"]) {
        throw new Error(`"${value}" is not a valid OrientationLockType`);
    }
}

const main = () => {
    const lockBtn = document.getElementById('lock');
    if (!(lockBtn instanceof HTMLButtonElement)) {
        throw new Error('No button with id "lock"');
    }
    const unlockBtn = document.getElementById('unlock')
    if (!(unlockBtn instanceof HTMLButtonElement)) {
        throw new Error('No button with id "unlock"');
    }
    const currentOrientationBtn = document.getElementById('get-current-orientation');
    if (!(currentOrientationBtn instanceof HTMLButtonElement)) {
        throw new Error('No button with id "get-current-orientation"');
    }
    const desiredOrientationSelect = document.getElementById('desired-orientation');
    if (!(desiredOrientationSelect instanceof HTMLSelectElement)) {
        throw new Error('No select with id "desired-orientation"');
    }
    const currentOrientationSpan = document.getElementById('current-orientation');
    const lastOrientationChangeEventSpan = document.getElementById('last-orientation-change-event');

    lockBtn.addEventListener('click', () => {
        const orientation = desiredOrientationSelect.value;
        assertIsOrientationLockType(orientation);
        ScreenOrientation.lock({orientation})
    });

    unlockBtn.addEventListener('click', () => {
        ScreenOrientation.unlock();
    });

    currentOrientationBtn.addEventListener('click', async () => {
        const {type} = await ScreenOrientation.orientation();
        currentOrientationSpan.innerText = type;
    });

    ScreenOrientation.addListener("screenOrientationChange", ({type}) => {
        lastOrientationChangeEventSpan.innerText = type;
    });

    SplashScreen.hide();
}

main();
