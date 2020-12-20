document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#osInfo').innerHTML = window.navigator.platform;
    // let userBrowser, userInfo = navigator.userAgent;
    // console.log(userInfo);
    // if(userInfo.indexOf("Chrome") > -1) {
    //     userBrowser = "Google Chrome";
    // } else if (userInfo.indexOf("Safari") > -1) {
    //     userBrowser = "Apple Safari";
    // } else if (userInfo.indexOf("Opera") > -1) {
    //     userBrowser = "Opera";
    // } else if (userInfo.indexOf("Firefox") > -1) {
    //     userBrowser = "Mozilla Firefox";
    // } else if (userInfo.indexOf("MSIE") > -1) {
    //     userBrowser = "Microsoft Internet Explorer";
    // }
    // document.getElementById('userNavigator').innerHTML = `navigator ${userBrowser}`;
    // let noOsNavigatorVersion = userInfo.split(/[()]+/);
    document.querySelector('#navigatorInfo').innerHTML = navigator.userAgent;
    document.querySelector('#vendorInfo').innerHTML = navigator.vendor;
    document.querySelector('#userNavigator').innerHTML = `${navigator.appCodeName} version ${navigator.product}`;
    document.querySelector('#userCPUClocks').innerHTML = `machine has ${navigator.hardwareConcurrency} CPU's cores`;
    document.querySelector('#acessData').innerHTML = Date();
    // const mouseMovePage = document.getElementById('mouseMovePage');
    // const mouseMoveClient = document.getElementById('mouseMoveClient');
    window.addEventListener('mousemove', function(position) {
        const mouse = {
            page: {
                x: position.pageX,
                y: position.pageY
            },
            client: {
                x: position.clientX,
                y: position.clientY
            }
        };
        document.getElementById('mouseMovePage').innerHTML = ['page'].map(function(type) {
            return [`${type} ( x: ${mouse[type].x} y: ${mouse[type].y} )`];
        });
        document.getElementById('mouseMoveClient').innerHTML = ['client'].map(function(type) {
            return [`${type} ( x: ${mouse[type].x} y: ${mouse[type].y} )`];
        });
    });
    // const mouseClick = document.getElementById('mouseClick');
    var clicksCount = 1;
    window.addEventListener('click', function(click) {
        document.getElementById('mouseClick').innerHTML = `clicked at ( x: ${click.clientX} y: ${click.clientY} )`;
        document.getElementById('mouseClicksCount').innerHTML = `have clicked ${clicksCount} times`;
        clicksCount++;
    });
    // const windowSize = document.getElementById('windowSize');
    // const contentSize = document.getElementById('contentSize');
    function screenSize(){
        // const windowWidth = window.innerWidth;
        // const windowHeight = window.innerHeight;
        // const screenWidth = screen.width;
        // const screenHeight = screen.height;
        document.getElementById('windowSize').innerHTML = `display resolution ${screen.width} x ${screen.height}`;
        document.getElementById('contentSize').innerHTML = `display usage ${window.innerWidth} x ${window.innerHeight}`;
    };
    window.addEventListener('resize', function(){
        screenSize();
    });
    screenSize();
    document.querySelector('#leftThePage').innerHTML = '';
    document.querySelector('#pageShowed').innerHTML = '';
});
let pageLeftCount = 1;
function leftThePage(){
    document.querySelector('#leftThePage').innerHTML = `navigates away from the page ${pageLeftCount} times`;
    pageLeftCount++;
};
let pageShowedCount = 1;
function pageShowed(){
    document.querySelector('#pageShowed').innerHTML = `page showed ${pageShowedCount} time(s)`;
    pageShowedCount ++;
};
let keysPressedCount = 1;
function keysPressed(){
    document.getElementById('keysPressed').innerHTML = `keyboard keys pressed ${keysPressedCount} times`;
    keysPressedCount++;
};