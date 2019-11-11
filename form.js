
    var app = document.getElementById('app'),
     init = document.getElementById('init'), 
     layer = document.getElementById('layer'), 
     input = document.getElementById('inp'), 
     button = document.getElementById('btnSearch');
    // console.log(input);
    function toggleApp()
    {
        app.classList.toggle('opened');

        if( button.className == ('shadow') )
            button.classList.toggle('shadow');
        else
            setTimeout(function(){ button.classList.toggle('shadow'); },300);

        if( app.className == ('opened') )
        {
            setTimeout(function(){ input.classList.toggle('move-up'); },200);
            setTimeout(function(){ input.focus(); },500);
        }
        else
            setTimeout(function(){ input.classList.toggle('move-up').val(''); },200);

        if( ! layer.className == ('sl') )
        {
            setTimeout(function()
            {  
                layer.addClass('sl');
            },800);
        }
        else
            setTimeout(function(){ layer.classList.remove('sl'); },300);
    }

    // layer.on('click',toggleApp);
    // init.on('click',toggleApp);
