
        var daysEl=document.getElementById("days");
        var hoursEl=document.getElementById("hours");
        var minutesEl=document.getElementById("minutes");
        var secondsEl=document.getElementById("seconds");


    const newYears= "1 January 2021";

    function countDown(){
        
        const newYearsDate = new Date(newYears);

        const currentDate= new Date().getTime();

                    
        
            const diffDate = (newYearsDate -currentDate);


            var days = Math.floor(diffDate / (1000*60*60*24 ));
            var hours = Math.floor((diffDate % (1000*60*60*24)) / (1000 * 60 * 60 ));
            var minutes = Math.floor((diffDate % (1000*60*60)) / (1000*60));
            var seconds = Math.floor((diffDate % (1000*60)) / 1000);

            
            daysEl.innerHTML= formatTime(days);    
            hoursEl.innerHTML= formatTime(hours);
            minutesEl.innerHTML= formatTime(minutes);
            secondsEl.innerHTML= formatTime(seconds);
            
            function formatTime(time){
                return time < 10 ? `0${time}` : time;
            }

    };



    countDown();

    setInterval(countDown, 1000);