let doc = document;
let state = false;
function hover(){
    state = true;
    hoverOn();
}

function hoverOn(){
    if(state === true){
        doc.getElementsByClass('div_buttons').style.opacity="0.5";
        state = false;
    }
    else{
        doc.getElementsByClass('div_buttons').style.opacity="1";
    }
}
