function printPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
            let str=" ".repeat(n-j);
            console.log(str);
        
        let output = '';
        for (let j = 1; j <= 2 * i - 1; j++) {
            output += j;
        }
        console.log(output);
    }
}

printPyramid(5);
