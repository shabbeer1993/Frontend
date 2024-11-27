//Program to find the largest word in the string//

//approach 1 : using regex and for...loop

function longest(str){
    str = str.match(/[a-zA-Z0-9]+/gi);
    let largest="";
    let smallest="";
    for(let i=0;i<str.length;i++){
        if(str[i].length>largest.length){
            largest=str[i];
        }
      
    }
    return largest;
}
console.log(longest("hello guys this is greeksforgreek where "+"students learn programming"));