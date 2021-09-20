function change () {
    args = Array.from(arguments);
    var out = "#";
    for (var i = 0; i < args.length; i++) {
        var item = args[i];
        if (item < 0 || item > 255) {
            out  = "ValueError. There is no RGB in form field.";
            return out;
        }
        var temp = item.toString(16).toUpperCase();       
        if (temp.length < 2) {
            temp  = temp.padStart(2, 0);

        }        
        out += temp;
    }
    return out;
}
console.log(change(11, 255, 254 ))