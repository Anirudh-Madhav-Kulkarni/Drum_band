
let drums = document.querySelectorAll('.drum').length;


for(var i =0;i<drums;i++){
    document.querySelectorAll('.drum')[i].addEventListener('click',function (){
       var button = this.innerHTML;
      

       switch(button){
        case 'w':
            Music('tom-1');
        break;
        case 'a':
            Music('tom-2');
        break;
        case 's':
            Music('tom-3');
        break;
        case 'd':
            Music('tom-4');
        break;
        case 'j':
            Music('snare');
        break;
        case 'k':
            Music('crash');
        break;
        case 'l':
            Music('kick-bass');
        break;
        default:
            Music('kick-bass')
            
       }
    })
}

document.addEventListener('keydown',(e)=>{
    switch(e.key.toLowerCase()){
        case 'w':
            Music('tom-1');
        break;
        case 'a':
            Music('tom-2');
        break;
        case 's':
            Music('tom-3');
        break;
        case 'd':
            Music('tom-4');
        break;
        case 'j':
            Music('snare');
        break;
        case 'k':
            Music('crash');
        break;
        case 'l':
            Music('kick-bass');
        break;
        default:
            console.log('invalid ')

    }
})

const Music = (tune)=>{
    let audio = new Audio(`./sounds/${tune}.mp3`);
    audio.play();
}

   