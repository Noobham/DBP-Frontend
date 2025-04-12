import open from 'open';

for (let i=0;i<50;i++){
// open('https://www.youtube.com/shorts/FXQT1mYF030');
setTimeout(() => {
    let newTab = open("https://www.instagram.com/p/DGNKOmIphfi/");
    // newTab.focus();
    // document.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
}, 10000 * i);
}



