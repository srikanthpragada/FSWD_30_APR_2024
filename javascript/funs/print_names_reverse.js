function print_reverse(name) {
    var rname = ''
    for (let i = name.length - 1; i >= 0; i--) {
        rname = rname + name.charAt(i)
    }
    console.log(rname)
}


let names = ["Jeff", "Bill", "Musk"]

names.forEach(print_reverse)
 