function stringChop(str, size){

  if(str.length === 'null' || str.length === undefined || str.length === ''){
	  return '['+']'
  }

  if(str.length > size){
    let arr = []
    for(let i = 0; i < str.length; i+=size){
      let x = str.slice(i,i+size)
      arr.push(x)
    }
    return arr
  }
  else{
    return [str]
  }
}

// Do not change the code below
//const str = prompt("Enter String.");
//const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));

