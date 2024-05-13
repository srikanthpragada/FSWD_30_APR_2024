
function wish(name = 'Guest', message = 'Hello') {
    console.log(`${message} ${name}`)
}

function wish2(name, message = 'Hello') {
    if(name)  // not undefined 
        console.log(`${message} ${name}`)
    else
        console.log('Hello Guest')
}


wish('Scott', 'Hi')
wish('Larry')
wish()

wish2("Mark", "Hi")
wish2()
