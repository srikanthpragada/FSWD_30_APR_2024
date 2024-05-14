function hasSpace(name) {
    return  name.includes(' ')
}


let names = ["Jeff Bezos", "Bill Gates", "Musk", "Larry Page", "Sergy"]

let names_with_space = names.filter(hasSpace)

console.log(names_with_space)