function drawX(id){
var c = document.getElementById(id);
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(98, 98);
ctx.lineWidth = 10;
ctx.stroke();
ctx.beginPath();
ctx.moveTo(0, 98);
ctx.lineTo(98, 0);
ctx.stroke();

}

function drawO(id){
var c = document.getElementById(id);
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(50, 49, 40, 0, 2 * Math.PI);
ctx.lineWidth = 10;
ctx.stroke();

}


function mainFunc(){
  var counter = 1;
  var table = [["a","a","a"],["a","a","a"],["a","a","a"]];
 var tbl = document.getElementById("tblMain");
  if (tbl != null) {
    for (var i = 0; i < tbl.rows.length; i++) {
        for (var j = 0; j < tbl.rows[i].cells.length; j++) {
            tbl.rows[i].cells[j].onclick = (function (i, j) {
                return function () {
                	if(counter % 2 != 0 && table[i][j] != 'o'){
                      drawX('r' + (i + 1) + 'b' + (j + 1));
                      table[i][j] = 'x';
                      setTimeout(checkVic(table , 'x'),2000);
                      counter +=1;
                    }
                    if(counter % 2 == 0 && table[i][j] != 'x'){
                       drawO('r' + (i + 1) + 'b' + (j + 1));
                       table[i][j] = 'o';
                       counter +=1;
                    }
                };
            }(i, j));
        }
    }
  }
}

function checkVic(tab, ch){

  if(tab[0][0] ==='x' && tab[0][1] ==='x' && tab[0][2] ==='x'){
    console.log("end");
  }
  else if (tab[1][0] ==='x' && tab[1][1] ==='x' && tab[1][2] ==='x'){

    console.log("end");
  }
  else if (tab[2][0] ==='x' && tab[2][1] ==='x' && tab[2][2] ==='x'){

    console.log("end");
  }
  else if (tab[0][0] ==='x' && tab[1][0] ==='x' && tab[2][0] ==='x'){

    console.log("end");
  }
  else if (tab[0][1] ==='x' && tab[1][1] ==='x' && tab[2][1] ==='x'){

    console.log("end");
  }
  else if (tab[0][2] ==='x' && tab[1][2] ==='x' && tab[2][2] ==='x'){

    console.log("end");
  }
  else if (tab[0][0] ==='x' && tab[1][1] ==='x' && tab[2][2] ==='x'){

    console.log("end");
  }
  else if (tab[0][2] ==='x' && tab[1][1] ==='x' && tab[2][0] ==='x'){

    console.log("end");
  }

}