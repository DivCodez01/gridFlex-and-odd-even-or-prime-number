document.title = "grid & flex width odd, even or prime";

const checkNumber = (function () {
    return function (num) {
        if (num < 0 || Number.isNaN(num) || typeof num == "undefined") {
            return "Not allowed";
        }

        if (num % 2 == 0) {
            return "This is Even number";
        }

        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                return "This is Odd number";
            }
        }
        return "This is Prime number"
    }
})();
checkNumber();