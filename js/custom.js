"use strict" ;

function ajax (options) {
    options = {//obiekt options jest właściwością obiektu ajax
        type: options.type || "POST",
        url: options.url || "",
        onComplete: options.onComplete || function () {},
        onError: options.onError || function () {},
        onSuccess: options.onSuccess || function () {},
        dataType: options.dataType || "text"//type to definicja pola, options.type to jego wartość
    };
    
    function httpSuccess (httpRequest) {//przekuzje obiekt
        try {//jeśli było ok to funkcja zwraca true
        return (httpReq.status>=200 && httpReq.status <300 || 
        httpReq.status == 304 ||
        navigator.userAgent.indexOf("Safari")>= 0 && typeof
        httpReq.status == "undefined");
            
        } catch (e) {//jeśli cokolwiek jest nie tak zwróć false nie wyrzucaj do logów
            return false;
            
        }
    }
    
    var httpReq = new XMLHttpRequest ();
    
    httpReq.open(options.type, options.url, true);
    
     httpReq.onreadystatechange = function (){
         
        if ( httpReq.readyState == 4 ) {
            if (httpSuccess(httpReq)) {
                options.onSuccess(httpReq.responseText) ;
                
            } else {
                options.onError(httpReq.statusText);
            }
        }
        
     }
     
     httpReq.send();
}
        
           /* options.onSuccess(httpReq.responseText);/*wyswietla AJAXa rzecz laptop marka lenovo i td
            httpReq = null; zamykam drzwi
        }else {
            options.onError(httpReq.statusText);
        }
        
     }
           httpReq.send();  
            
    
} */

function pobierzDane (event) {/*funkcja pobierz dane*/
    event.preventDefault();
    
    ajax({
        type: "GET",
        url:
        "http:echo.jsontest.com/rzecz/laptop/stan/nowy/marka/lenovo",
        onError: function (msg) {
            //console.log (msg);
        },
        onSuccess: function (response) {
            //console.log(response);
            var jsonObj = JSON.parse(response);
            
           var rzecz = document.createElement('p');//tworze zmienna
            rzecz.innerHTML = "rzecz:" + jsonObj.rzecz; //dodaje ja do html + nazwa zmiennej js i odwołuje się do zmiennej jsonObj
            document.body.appendChild(rzecz);
            
            var stan = document.createElement('p');
            stan.innerHTML = "stan:" + jsonObj.stan;
            document.body.appendChild(stan);
            
            
            var marka = document.createElement('p');
            marka.innerHTML = "marka:" + jsonObj.marka;
            document.body.appendChild(marka);
           
        
            
        }
    
    });
}

/* jeśli stan dokumentu został zmieniony -> http.Req.readyState*/
//0: połączenie nie nawiązane
//1: połączenie nawiązane
//2: żądanie oderane
//3: przetwarzanie
//4: dane zwrócone i gotwe do użycia



    /*alert("Działa");*/
    
    /*var httpReq = new XMLHttpRequest ();/*tworze zmienna z obiektem
    
    httpReq.open("Get","http://echo.jsontest.com/rzecz/laptop/stan/nowy/marka/lenovo", true);/*otwieram połaczenia
    
    httpReq.onreadystatechange = function (){/*tworze funkcje, ktora spowoduje alert i w networku wywali tekst jsona*/
        /*if(httpReq.readyState == 4) {
            alert("Wszystko ok");/*dane, które pobiera
            
        if ( httpReq.readyState == 4 &&
        (httpReq.status>=200 && httpReq.status <300 || 
        httpReq.status == 304 ||
        navigator.userAgent.indexOf("Safari")>= 0 && typeof
        httpReq.status == "undefined")) {
        
            alert (httpReq.responseText);/*wyswietla AJAXa rzecz laptop marka lenovo i td
            httpReq = null; /*zamykam drzwi
        }
            
            
        }

    
    httpReq.send();wysyłam prośbę wywołania jsona
}*/