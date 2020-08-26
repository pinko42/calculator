
document.querySelectorAll('.col').forEach(div => {
    div.addEventListener('click', () => {
        if(div.innerHTML=== "del"){
            supr = document.querySelector(".result-content").innerHTML.split("");
            supr.pop();
            console.log(document.querySelector(".result-content").innerHTML);
            console.log(supr);


            return document.querySelector(".result-content").innerHTML = supr.join("");

        }
        if(div.innerHTML=== "="){
            try {
                sum = eval(document.querySelector(".result-content").innerHTML);
            return document.querySelector(".result-content").innerHTML = sum;
              }
              catch(err) {
                document.querySelector(".result-content").innerHTML = err.message;
              }
            
        }
        if(div.innerHTML=== "mod"){
            return document.querySelector(".result-content").innerHTML += "%";
        }
        document.querySelector(".result-content").innerHTML += div.innerHTML;
        if(div.innerHTML=== "C"){
            document.querySelector(".result-content").innerHTML = null;
        }
        
        
        

    });
});

//handle ++ error