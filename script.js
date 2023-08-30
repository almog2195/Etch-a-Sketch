console.log("hello there");

function on_click (){  //deal with the btn function prompt
     let n = prompt("choose a number between 1 to 100");
     add_divs(n)
    
    


}



function add_divs(num){
   
    for (let i = 0 ; i<256 ; i++) {

        const div_remove = document.querySelector(".all_grid div");
        div_remove.remove(); 
    }
    
    if (num < (100*100) && num > (1*1) ) {
        for (let i = 0 ; i<num ; i++) {   //add divs element to the main container
            let grid = document.createElement("div");
            document.querySelector(".all_grid").appendChild(grid)
            
        
        }

    }
    const a = document.querySelectorAll(".all_grid div");
    for (let i =0 ; i<num; i++){
        a[i].addEventListener("mouseover" , ()=>
        a[i].style.backgroundColor = "red")
  
   }
 
  
   }




const btn = document.querySelector(".btn");
btn.addEventListener("click", on_click) ;




for (let i = 0 ; i<256 ; i++) {   //add divs element to the main container
    let grid = document.createElement("div");
    document.querySelector(".all_grid").appendChild(grid)
    

}
const a = document.querySelectorAll(".all_grid div");
function change_color (){
    for (let i =0 ; i<256; i++){
        a[i].addEventListener("mouseover" , ()=>
        a[i].style.backgroundColor = "red")
  
   }

}
change_color();

//function change_color_v2 ()



