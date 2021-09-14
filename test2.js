function hasUniqueChars(s) {
    hs = {}
    for (i = 0; i < s.length; i++) {
        if (hs[s[i]] >= 1) {            
            hs[s[i]] += 1
        }
        else {
            hs[s[i]] = 1
        }
    }    
    for (i in hs) {        
        if (hs[i] > 1){
            return false
        }
    }           
        console.log(hs)   
    return true     
}
console.log(hasUniqueChars('salimon'))