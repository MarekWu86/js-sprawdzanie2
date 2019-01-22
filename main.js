var liczba1 = 20;
var liczba2 = 0;

function getTheTwenty(n1, n2) {
    if ((n1 === 20 || n2 === 20) || (n1 + n2 <= 20)) {
        return true;
    }
}
console.log(getTheTwenty(liczba1, liczba2));