
function countSpaces(st) {
    let count = 0
    for (let i = 0; i < st.length; i++) {
        if (st.charAt(i) === ' ')
            count++;
    }
    return count
}


console.log(countSpaces('This is to test'))