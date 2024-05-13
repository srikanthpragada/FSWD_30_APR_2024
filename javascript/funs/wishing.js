
// only one and that too last param can be rest parameter
function wish(message, ... names) {
    for(let n of names)
       console.log(`${message} ${n}`)
}


wish('Hello', 'Jack', 'Joe', 'Andy')
wish('Hi', 'Cathy', 'Belinda')

