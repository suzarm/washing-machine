let isRunning = false;
let isOpen = false;
let program = {
    mode: 'default',
    rinse:20,
    time:10,
}

let timecounter ;
    function start(){
        isRunning = true;
        if(isOpen === true){
            alert('Please close the door before starting !')
            return isRunning = false;
            
        }
        document.getElementById('start').style.backgroundColor = '#00E7F2';
        document.getElementById('door').style.animationDuration = 50/program.rinse +'s';
        document.getElementById('door').classList.add('rotating-door');
        document.getElementById("isonrpm").innerHTML = program.rinse ;
        document.getElementById("isontime").innerHTML = program.time;
        document.getElementById('rinserange').disabled = true;
        document.getElementById('timerange').disabled = true;
        
        document.getElementById('isrunning').innerHTML = 'On';
        // this code is used to change time on timetable/
        let counter = program.time;
        timecounter =setInterval(function(){
            document.getElementById("isontime").innerHTML = --counter ;
            
        },1000);
        setTimeout(function(){
            // this whole code is executed when laundry finishes/
            isRunning = false;
            document.getElementById('door').classList.remove('rotating-door');
            document.getElementById('rinserange').disabled = false;
            document.getElementById('timerange').disabled = false;
        
            openDoor()
            clearInterval(timecounter);
            document.getElementById('isrunning').innerHTML = 'Off';
            document.getElementById("isonrpm").innerHTML = '-';
            document.getElementById("isontime").innerHTML = '-';
            document.getElementById('start').style.backgroundColor ='transparent';
        },program.time * 1000);

    }
    
    function openDoor(){
        isOpen = true;
        if( isRunning === true){
            alert('You cannot open the door when machine is on !')
            return isOpen = false;
        }
        document.getElementById("isondoor").innerHTML = 'Opened';
        document.getElementById('door').classList.remove('rotating-door');
        document.getElementById('door').style.opacity = 0.1;
        document.getElementById('clothes').style.opacity = 1;
        document.getElementById('close').style.display ="block";
        document.getElementById('open').style.display ="none";
       
    }

    
    function closeDoor(){
        isOpen = false;
        document.getElementById("isondoor").innerHTML = 'Closed';
        document.getElementById('door').style.opacity = 1;
        document.getElementById('clothes').style.opacity = 0.1;
        document.getElementById('close').style.display ="none";
        document.getElementById('open').style.display ="block";
     
    }
    function onrinseChange(value){
        document.getElementById('rinse').innerHTML = value + 'rpm';
        program.rinse=value;
    }
    
    function ontimeChange(value){
        document.getElementById('time').innerHTML = value + 's';
        program.time=value;
    }


   

    