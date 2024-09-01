

function printTriangle(n) {
    for (let i = 1; i <= n; i++){
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '*'
        }
        console.log(row);
    }
 }

 printTriangle(5);

//  GPT answer
 function printCenteredTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        // Add spaces before the stars to center the triangle
        for (let j = 1; j <= n - i; j++) {
            row += ' ';
        }
        // Add the stars
        for (let k = 1; k <= (2 * i) - 1; k++) {
            row += '*';
        }
        console.log(row);
    }
}

printCenteredTriangle(5);


function printDiamondShape(n) {
    // Ascending part
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '*';
        }
        console.log(row);
    }
    
    // Descending part
    for (let i = n - 1; i >= 1; i--) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '*';
        }
        console.log(row);
    }
}

printDiamondShape(3);

function printDiamondShape2(n) {
    let half = Math.ceil(n / 2);

    // Ascending part
    for (let i = 1; i <= half; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '*';
        }
        console.log(row);
    }

    // Descending part
    for (let i = half - 1; i >= 1; i--) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '*';
        }
        console.log(row);
    }
}

printDiamondShape2(5);