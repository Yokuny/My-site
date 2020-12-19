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
window.addEventListener('click', function(click) {
    document.getElementById('mouseClick').innerHTML = `click ( x: ${click.clientX} y: ${click.clientY} )`;
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
