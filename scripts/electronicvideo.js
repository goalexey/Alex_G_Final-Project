// ENABLES Hiding/Stopping and Showing/Autoplaying the background video based on Window's width

window.onload = function(){ 

        // call our function on ready to check the initial width of the page
        WidthControl.Set();

        // handle resize event every time window gets resized
         window.onresize = function(){ 
             WidthControl.Set(); 
         }
     }; 

    // our object with functions/methods as values 
    var WidthControl = {
        current: null,  // variable to get current width when necessary

        Set: function(){  // sets the current width and call DoStuff function
            var w = window.innerWidth;
            this.current = w;
            this.DoStuff();
        },

        DoStuff: function(){  // here we pause (or stop if you want) the video element
            let target = document.querySelector('#electronic-video');
            target.load();
            target.autoplay = true;
            if(this.current > 0 && this.current < 760){
                target.autoplay = false;
                target.style.display = "none";
            }
            else if(this.current > 760){
                target.style.display = "block";
                target.load();
                
            }
        }   
    };