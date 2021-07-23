
function arrowClick(key){
    var arrows = document.querySelectorAll(".arrow");
    let ball = document.querySelector(".circle")
    let element = document.createElement('div');
    var cubes = document.querySelectorAll('.box');
    element.className  = 'circle';
    let position = 4;
    let numbr = 0;

    for(i=0;i<arrows.length; i++){

        arrows[i].addEventListener('click',function(){
            var a = this.id;
            ball.remove();
            this.innerHTML ='';
            if (a == 'up'){
                if(position > 3){
                    position = position - 3;
                    numbr++;
                    element.innerHTML= numbr ;
                    cubes[position].appendChild(element) 
                }else{
                    numbr--;
                    element.innerHTML= numbr ;
                }
            }
            if(a == 'down'){
                if(position <= 5){
                    numbr++;
                    element.innerHTML= numbr ;
                    position = position + 3 ;
                    cubes[position].appendChild(element)
                }else{
                    numbr--;
                    element.innerHTML= numbr ;
                }
            }if(a == 'left'){
                if ( position % 3 != 0){
                    numbr++;
                    element.innerHTML= numbr ;
                    position = position - 1 ;
                    cubes[position].appendChild(element)
                }else{
                    numbr--;
                    element.innerHTML= numbr ;
                }
            }
            if(a == 'right'){
                if(position !=2 && position !=5 && position !=8){
                    numbr++;
                    element.innerHTML= numbr ;
                    position = position + 1 ;
                    cubes[position].appendChild(element)
                }else{
                    numbr--;
                    element.innerHTML= numbr ;
            }
            }
            if(numbr == 25){
                numbr = 0;
                element.innerHTML= numbr;
                position= 4;
                cubes[position].appendChild(element);
            }
        })
    }

}
arrowClick();