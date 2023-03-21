function navslide(){
    const nav=document.querySelector(".main");
    const menu=document.querySelector(".right");
    const burger=document.querySelector(".burger");


    burger.addEventListener('click',()=>{
        menu.classList.toggle("nav-active");
        burger.classList.toggle("toggle");
    })
}
navslide();











const calculate = ()=>{
    let Name = document.getElementById("name").value;

  let Phone = document.getElementById("mobile").value;

  let Email = document.getElementById("email").value;

  let Place = document.getElementById("address").value;

  let starters = document.getElementById("starters").value;

  let main_course = document.getElementById("main_course").value;

  let indian_food = document.getElementById("indian_food").value;

  let chinese = document.getElementById("chinese").value;

  let dessert = document.getElementById("dessert").value;

  let GST = document.getElementById("GST").value;
  let tip = document.getElementById("TIP").value;
  let payment=document.getElementById("your_bill").value
// here we are multiply  the quantity of item with fixed value of item then we are getting the total amount
  let total=(Number(starters*250)+Number(main_course*500)+Number(indian_food*300)+Number(chinese*200)+Number(dessert*350));


  // gst calculation
  let gst=Number(total/GST)*100;
  // alert(total);
  // alert(gst);

  // Total_bill with gst
  let Total_bill=Number(total)+ Number(gst);
  // alert(Total_bill);
document.querySelector("#Total_bill").value=Total_bill;


// Total_bill is greater than 18000 then tip is 500 or else 1000
  if(Number(Total_bill)>18000){
    let tip=500; 
    document.getElementById("TIP").value=tip;
    alert("if total_bill is greater than 18000 then tip is 500");
    let your_bill=Number(Total_bill)+Number(tip);
    document.querySelector("#your_bill").value=your_bill;
    alert(your_bill);
  }
  else{
    let tip1=1000;
    document.getElementById("TIP").value=tip1;
    alert("if total_bill is greater than 18000 then tip is 1000");
    let your_bill=Number(Total_bill)+Number(tip1);
    document.querySelector("#your_bill").value=your_bill;
    alert(your_bill);
  }
  
}

