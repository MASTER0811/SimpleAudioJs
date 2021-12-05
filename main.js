let audio = document.createElement('audio')
document.body.appendChild(audio)


function link(connect,controls){
    audio.src = connect
    console.log(audio.volume);
    if(controls == "controls"){
        audio.controls = true
    }else{
        return false
    }
}

