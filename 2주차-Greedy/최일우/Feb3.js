const solution = (student, lost, reserve) => {
  student -= lost.length;
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);
  
  for(let i = lost.length - 1; i >= 0; i--){
      const reserveIndex = reserve.lastIndexOf(lost[i]);
      if(reserveIndex === -1){
          continue;
      } else {
          lost.splice(i, 1);
          reserve.splice(reserveIndex, 1);
          student++;
      }
  }
  
  for(let i = lost.length - 1; i >= 0; i--){
      const reserveIndex = reserve.lastIndexOf(lost[i]+1)
      if(reserveIndex === -1){
          continue;
      }else {
          lost.splice(i, 1);
          reserve.splice(reserveIndex, 1);
          student++;
      } 
  }
  
  for(let i = lost.length - 1; i >= 0; i--){
      const reserveIndex = reserve.lastIndexOf(lost[i]-1)
      if(reserveIndex === -1){
          continue;
      }else {
          lost.splice(i, 1);
          reserve.splice(reserveIndex, 1);
          student++;
      } 
  }
  return student;
}