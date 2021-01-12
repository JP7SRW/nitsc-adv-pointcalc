score = 0;
credit = 0;
point_S = 0;
point_A = 0;
point_B = 0;
point_C = 0;
point_all = 0;
tbl_3rd = document.getElementById("tbl_3rd");
tbl_4th = document.getElementById("tbl_4th");
tbl_rslt = document.getElementById("tbl_rslt");
row = document.getElementsByTagName('tr')

function TempValue(x,tbl){
  score_temp = 0;
  credit_temp = 0;
  point_S_temp = 0;
  point_A_temp = 0;
  point_B_temp = 0;
  point_C_temp = 0;

  score_temp = Number(tbl.rows[x].cells[2].getElementsByTagName("input")[0].value);
  console.log(score_temp + "を検知");

  if(!isNaN(score_temp) && 100 >= score_temp && score_temp >= 60){

    if(100 >= score_temp && score_temp >= 90){
      point_S_temp = Number(tbl.rows[x].cells[1].innerText);
    } else if(89 >= score_temp && score_temp >= 80){
      point_A_temp = Number(tbl.rows[x].cells[1].innerText);
    } else if(79 >= score_temp && score_temp >= 70){
      point_B_temp = Number(tbl.rows[x].cells[1].innerText);
    } else if(69 >= score_temp && score_temp >= 60){
      point_C_temp = Number(tbl.rows[x].cells[1].innerText);
    }

    credit_temp = Number(tbl.rows[x].cells[1].innerText);
  }
}

function Calc(x,tbl){
  score = Number(tbl.rows[x].cells[2].getElementsByTagName("input")[0].value);
  console.log(score);

  if(!isNaN(score) && 100 >= score && score >= 60){

    credit -= credit_temp;
    console.log(point_S,point_S_temp);
    point_S -= point_S_temp;
    console.log(point_S);
    point_A -= point_A_temp;
    point_B -= point_B_temp;
    point_C -= point_C_temp;

    credit += Number(tbl.rows[x].cells[1].innerText);
    console.log(Number(tbl.rows[x].cells[1].innerText) + "を追加");

    if(100 >= score && score >= 90){
      console.log(point_S);
      point_S += Number(tbl.rows[x].cells[1].innerText);
    } else if(89 >= score && score >= 80){
      point_A += Number(tbl.rows[x].cells[1].innerText);
    } else if(79 >= score && score >= 70){
      point_B += Number(tbl.rows[x].cells[1].innerText);
    } else if(69 >= score && score >= 60){
      point_C += Number(tbl.rows[x].cells[1].innerText);
    }

    console.log(point_S,point_A,point_B,point_C,credit);
    point_all = ((point_S * 4)+(point_A * 3)+(point_B * 2)+point_C) / credit;

    ChangeResult();

  } else if(score == "" || 59 >= score && score >= 0){

    credit -= credit_temp;
    point_S -= point_S_temp;
    point_A -= point_A_temp;
    point_B -= point_B_temp;
    point_C -= point_C_temp;

    point_all = ((point_S * 4)+(point_A * 3)+(point_B * 2)+point_C) / credit;

    if(isNaN(point_all)){
      point_all = 0;
    }

    ChangeResult();

  } else {
    window.alert("許可されている入力値は数値(100~0)のみです");
  }

}

function ChangeResult(){

  tbl_rslt.rows[1].cells[0].innerHTML = credit;
  tbl_rslt.rows[1].cells[1].innerHTML = point_S;
  tbl_rslt.rows[1].cells[2].innerHTML = point_A;
  tbl_rslt.rows[1].cells[3].innerHTML = point_B;
  tbl_rslt.rows[1].cells[4].innerHTML = point_C;
  tbl_rslt.rows[1].cells[5].innerHTML = point_all;

}
