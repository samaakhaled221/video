
let video = document.getElementById("myVideo");
let Btn = document.getElementById("submit");
let yesInput = document.getElementById("yesInput");
let noInput = document.getElementById("noInput");
let checkedButton = [yesInput, noInput];

function paused(){
    if(this.currentTime>=7)
    {
        this.pause();
        $('#layer').fadeIn(1500);
    }
}
video.addEventListener("timeupdate", paused);



Btn.addEventListener("click", function () {
  
    let chackedValue;
    for (let i=0; i<checkedButton.length;i++)
    {
        if(checkedButton[i].checked)
        {
            chackedValue=checkedButton[i].value;
            if(chackedValue=="yes")
            {
            $('#layer').fadeOut(1000);
            video.removeEventListener("timeupdate", paused);
            video.play();
        }
        else {
            $('#layer').fadeOut(1000);
            video.currentTime = 0;
            video.play();
        }
        }
    }
})

