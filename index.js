const fs = require('fs');
const readline = require('readline');
const instream = fs.createReadStream('input.txt');
const outstream = fs.createWriteStream('output.txt');
const rl = readline.createInterface({
    input: instream
});

rl.once('line', line => {
    // function generate(n, s = '', op_br = 0, cl_br = 0) {
    //     if ((op_br + cl_br) === 2 * n) {
    //         outstream.write(s.toString());
    //         outstream.write('\n');
    //     }
    //     if (op_br < n) {
    //         generate(n, s + '(', op_br + 1, cl_br);
    //     }
    //     if (op_br > cl_br) {
    //         generate(n, s + ')', op_br, cl_br + 1);
    //     }
    // }
    function generate(s) {
        let n = s.split('').length;
        let ans = "No solution";
        let depth = 0;
        for (let i = n - 1; i >= 0; --i) {
            if (s[i] === '(')
                --depth;
            else
                ++depth;

            if (s[i] === '(' && depth > 0) {
                --depth;
                let open = (n - i - 1 - depth) / 2;
                let close = n - i - 1 - open;
                let openStr = '';
                let closeStr = '';

                for (let i = 0; i < open; i++) {
                    openStr += '(';
                }

                for (let i = 0; i < close; i++) {
                    closeStr += ')';
                }

                ans = s.slice(0, i) + ')' + openStr + closeStr ;
                break;
            }
        }
        return ans;
    }

    let arr = '';
    let nn = 0;

    while(nn < line * 2) {
        if (nn < line) {
            arr += '(';
            nn++;
        } else {
            arr += ')';
            nn++;
        }
    }

    while(generate(arr) !== 'No solution') {
        console.log(generate(arr))
    }
});

rl.on('close', function() {
    outstream.end();
});






// var stream = fs.createReadStream('file.txt', options);
// var byteSize = 10;
//
// stream.on("readable", function() {
//     var chunk;
//     while ( (chunk = stream.read(byteSize)) ) {
//         console.log(chunk.length);
//     }
// });


// const lines = [5, 1, 1, 2 , 3, 3];

// rl.on('line', line => lines.push(line));
//
// rl.on('close', () => {
//     const [qt, ...restLines] = lines;
//     const unique = [];
//
//     for(let i = 0; i < qt; i++) {
//         if (restLines[i] !== restLines[i - 1]) {
//             unique.push(restLines[i])
//         }
//     }
//
//     process.stdout.write(unique.toString());
// });


// return maxCounter;


// lines.reduce((acc, cur) => {
//     if (cur === '1') {
//         acc++;
//         if (maxCounter < acc) {
//             maxCounter = acc;
//         }
//         return acc;
//     } else {
//         acc = 0;
//         return acc
//     }
// }, 0);

// rl.on('line', (line) => {
//     lines.push(line);
// });

// rl.on('close', () => {
//     const [gold, stone] = lines;
//
//     let result = 0;
//
//     for (let item of stone) {
//         if (gold.includes(item)) {
//             result++;
//         }
//     }

    // process.stdout.write(result.toString());
// });
// process.env.UV_THREADPOOL_SIZE = 1;
// const express = require('express');
// const app = express();
//
// app.get('/', (req, res) => {
//     setTimeout(() => {
//         res.send('Hola....')
//     }, 5000);
// });
//
// app.get('/fast', (req, res) => {
//     res.send('Fast endpoint');
// });
//
// app.listen(3000);
