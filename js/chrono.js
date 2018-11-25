function Chrono()
{
    this.minutes = 0;
    this.secondes = 0;
    this.heures = 0;
    this.t;
    this.timer_is_on = 0;

    this.timedCount = function(patate) 
    {
        document.getElementById("txt").value = patate.heures + " : " + patate.minutes + " : " + patate.secondes;
        patate.secondes = patate.secondes + 1;

        if (patate.secondes==60)
            {
                patate.minutes = patate.minutes + 1
                patate.secondes = 0
            }

        if (patate.minutes==60)
            {
                patate.heures = patate.heures + 1
                patate.minutes = 0
            }
        if(patate.heures==24)
            {
                patate.heures = 0
            }
    }

    this.start = function()
        {
            if (!this.timer_is_on) 
            {
                this.timer_is_on = 1;
                this.t = setInterval(this.timedCount, 100, this);
            }
        }

    this.pause = function()
        {
            clearTimeout(this.t);
            this.timer_is_on = 0;
        }

    this.stop = function()
        {
            this.minutes = 0;
            this.secondes = 0;
            this.heures = 0;
            clearTimeout(this.t);
            this.timer_is_on = 0;
        }

}

chrono = new Chrono()

/*
function start() 
{
    if (!timer_is_on) 
    {
        timer_is_on = 1;
        t = setInterval(timedCount, 100);
    }
}

function pause() 
{
    clearTimeout(t);
    timer_is_on = 0;
}

function stop() 
{
    minutes = 0;
    secondes = 0;
    heures = 0;
    clearTimeout(t);
    timer_is_on = 0;
}
*/