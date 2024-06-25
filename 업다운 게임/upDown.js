const comNum = Math.floor(Math.random() * 100 + 1);
let tryNum = 0;

function checkGuess(){
  let info = document.getElementById("guide");
  let userNum = Number(document.getElementById("user-num").value);
  tryNum++;

  if(userNum === comNum)
   {
      guide.textContent = "정답!"+ tryNum + "번 만에 맞추셨습니다! 정답:" + comNum;
   }
  if(userNum < comNum)
    {
      guide.textContent = "UP!";
    }
    
  else if(userNum > comNum)
    {
      guide.textContent = "DOWN!";
    }
}