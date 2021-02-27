module.exports = function reverse (n) {
    if(n<0){n=-n};
    let e=+n.toString().split('').reverse().join('')
    return e;
}
