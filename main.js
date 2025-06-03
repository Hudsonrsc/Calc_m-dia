function media (){
   let num1 = Number(document.getElementById("nota1").value);
      let num2 = Number(document.getElementById("nota2").value);
         let num3 = Number(document.getElementById("nota3").value);
         
             let media = (num1 + num2 + num3)/3;
                document.getElementById("res").innerHTML = media;
}
let mostrar =document.getElementById("mostrar");
mostrar.addEventListener("click",media);