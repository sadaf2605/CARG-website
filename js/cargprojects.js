function pShow(){
document.getElementById('showone').style.display='block';
document.getElementById('showtwo').style.display='block';
}

function showcomplete(){
document.getElementById('ongoingdiv').style.display='none';
document.getElementById('completediv').style.display='block';
//document.getElementById('showone').style.display='none';
//document.getElementById('showtwo').style.display='none';
}

function showongoing(){
document.getElementById('completediv').style.display='none';
document.getElementById('ongoingdiv').style.display='block';
document.getElementById('showone').style.display='none';
document.getElementById('showtwo').style.display='none';
}

function pShow(){
document.getElementById('showone').style.display='block';
document.getElementById('showtwo').style.display='block';
}

function mMove(){
document.getElementById('showone').className = 'showA';
}

function mOut(){
document.getElementById('showone').className = 'showB';
}

function kMove(){
document.getElementById('showtwo').className = 'showA';
}

function kOut(){
document.getElementById('showtwo').className = 'showB';
}


//document.getElementById('showone').style.display='block';
//document.getElementById('showtwo').style.display='block';