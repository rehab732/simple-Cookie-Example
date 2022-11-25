/*
document.cookie("name=value; expires=DAte; path=")
 */

function setCookie(cookiename,cookievalue,exdate)
{
   // const d=new Date();
    //d.setTime(d.getTime()+(exdate*24*60*60*1000));
    //let expires="expires="+d.toUTCString();
    let date=new Date();
    date.setDate(date.getDate()+exdate);
    document.cookie = cookiename + "=" + cookievalue  +";expires="+date + ";path=/";
}
function getCookie(cookiename)
{
    var cookieArray=document.cookie.split(";");//have associative array contain key and value

    for(var i=0;i<cookieArray.length;i++)
    {
        var cookiepair=cookieArray[i].split("=");//index 0 have name ; index 1 have value
        if(cookiename==cookiepair[0].trim()){//remove whitespace at the beginning of the cookie name& compaire with the given string 
            return decodeURIComponent(cookiepair[1]);
        }
    }
    return null;
}

function getallCookies(){
    var cookiesArray=document.cookie.split("; ");
    return cookiesArray;
}

function deleteCookie(cookiename)
{
    let olddate=new Date();
    setCookie(cookiename,'',olddate);
}