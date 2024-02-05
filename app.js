function meanVsMedian(numbers) {
  numbers.sort(function(a, b) {return a - b;});
  
  median = numbers[Math.round(numbers.length/2-1, 0)];
  
  avg = 0
  for(let i = 0; i< numbers.length; i++){
    avg += numbers[i];
  }
  avg = avg / numbers.length;
  
  if(median == avg){return "same";}
  if(median > avg){return "median";}
  if(median < avg){return "mean";}
}
