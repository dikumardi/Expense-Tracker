    let desc = document.querySelector("#desc");
    let amount = document.querySelector("#amount");
    let add = document.querySelector("#add");
    let total = document.querySelector("#total");
    let list = document.querySelector("#list");


    let amt = 0 ;
    add.addEventListener("click",function () {
              let li = document.createElement("li");
                 let box = document.createElement("div");

               if (amt === 0) {
           amt = Number(amount.value);
            total.textContent = amt;
            console.log("A",amt);

            box.textContent = `₹ ${amt}` ;

           
          } else {
          let  b = Number(amount.value)
          let answer =  amt + b ;
          amt = answer ;
          total.textContent = answer;
          console.log("B", b);
          console.log("Answer", amt);             

            box.textContent = `₹ ${b}` ;


          }
  
    
      li.textContent = desc.value ;
      box.className = "btn"

      li.style.display = 'flex'
      li.style.justifyContent = "Space-between"
      
          
       list.appendChild(li);
       li.appendChild(box);
             
       desc.value = "";
       amount.value = "";
    
    });
    
