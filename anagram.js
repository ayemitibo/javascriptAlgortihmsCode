function anagram(str1,str2){
    let objStr1 = {}
    let objStr2 = {}
    for(let key of str1){
        objStr1[key] = (objStr1[key] ||  0) + 1
} 
 for(let key of str2){
        objStr2[key] = (objStr2[key] ||  0) + 1
} 

console.log(objStr1)
console.log(objStr2)
    for(let keys in objStr1){
        if(!(keys in objStr2)) {
    return false
}
    if(objStr1[keys] !==  objStr2[keys]){
        console.log(objStr1[keys])
        return false
    }
    }
    return true
}