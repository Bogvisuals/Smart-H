function changeMode(){
    let body = document.body;
    if (!body.hasAttribute('class')){
        body.setAttribute('class', 'dark-mode')
    }else{
        body.removeAttribute('class')
    }
}