$(document).ready(function()
{

    menu += "<ul><li><a href='#etykieta1'>"+$("h1").text()+"</a>";
    var stos = new Array();
    //$("#tresc_artykulu:header")
    $(":header").each(function(i)
    {

        stos.push($(this)[0].nodeName);
        $(this).html("<a href=\"#top\" name=\"etykieta\""+(i+1)+">"+$(this).html()+"</a>");
    });
    
    /*
    alert(stos);
    alert(stos.pop());
    alert(stos);
    */
    stworzPrzyporzadkowania(stos);

    menu += "</li></ul>";
    $("body").prepend(menu);
    $("body").prepend($("<a name='top'></a>"));
});

function stworzPrzyporzadkowania()
{
    /*tab = new Array();
    tab['nazwa'+1] = 6;

    alert(tab['nazwa'+1]);*/

    /*
    window['item'+1] = 5;

    alert(item1);
    */
    for (var i = 0; i < stos.length; i++)
    {
        window['item'+i] = new Array();
        window['item'+i].push(stos[i]);
        window['item'+i].wartosci = new Array();
    }

    function przyporzadkujWartosci(stos)
    {
        while(stos.length)
        {
            var szukany = stos.pop().charAt(1);
            for (var i = stos.length - 1; i >= 0; i--)
            {
                if((parseInt(stos[i].charAt(1)) + 1) == szukany)
                {
                    window['item'+i].wartosci.push(stos.length);
                    break;
                }
            }
        }
    }
}