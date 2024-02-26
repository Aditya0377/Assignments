const arr = [4, 6, 8, 9];
arr.forEach(torpime())
function toprime() {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
}
let k = +prompt('enter the range end');
