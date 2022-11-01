window.addEventListener("load", function () 
{
    let clickCounterElement = document.getElementById("click-counter");
    let clickButtonElement = document.getElementById("click-button");

    let counter = 0;

    let clickButtonFunction = function ()
    {
        counter++;
        clickCounterElement.innerHTML  = counter;
    };

    clickButtonElement.addEventListener("click", clickButtonFunction);

});