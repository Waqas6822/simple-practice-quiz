function check(){
    var score=0;
    var right_answer_1=document.getElementById('1q1');
    var q2_answer_1=document.getElementById('1q2');
    var q3_answer_1=document.getElementById('1q3');
    var q4_answer_1=document.getElementById('1q4');
   if(right_answer_1.checked==true){
      score++
    alert(' Q1 write answer')
   }else{
    alert(' Q1 wrong answer')
   }
   var right_answer_2=document.getElementById('2q1');
   var q2_answer_2=document.getElementById('2q2');
   var q3_answer_2=document.getElementById('2q3');
   var q4_answer_2=document.getElementById('2q4');
   if(right_answer_2.checked==true){
     score++
    alert('Q2 write answer')
   }else{
    alert('Q2 wrong answer')
   }
   var q1_answer_3=document.getElementById('3q1');
   var right_answer_3=document.getElementById('3q2');
   var q3_answer_3=document.getElementById('3q3');
   var q4_answer_3=document.getElementById('3q4');
   if(right_answer_3.checked==true){
     score++
    alert('Q3 write answer')
   }else{
    alert('Q3 wrong answer')
   }
   alert("your score is"+score++)
}