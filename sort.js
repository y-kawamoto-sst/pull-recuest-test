var sortnumber = function (number) {
    number.sort(function (a, b) {
        if (a == b) {
            return 0;
        }
        return a < b ? -1 : 1;
    });
};
var number = [19, 3, 81, 1, 24, 21];
sortnumber(number);
console.log(number);