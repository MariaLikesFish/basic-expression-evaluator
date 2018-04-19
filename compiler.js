// compiler.js
var re_opr = eval('/^[\+-\/\(\)]/g'); 
var re_num = eval('/^[0-9]+(\\\.[0-9]*)?/g'); 
var table  = new Array(30); 
table[0] = {'+': null, '-': null, '*': null, '/': null, '(': 's4', ')': null, 'num': 's5', '$': null, 'Expr': 1, 'Term': 2, 'Factor': 3}; 
table[1] = {'+': 's6', '-': 's7', '*': null, '/': null, '(': null, ')': null, 'num': null, '$': 'acc', 'Expr': null, 'Term': null, 'Factor': null}; 
table[2] = {'+': 'r3', '-': 'r3', '*': 's8', '/': 's9', '(': null, ')': null, 'num': null, '$': 'r3', 'Expr': null, 'Term': null, 'Factor': null}; 
table[3] = {'+': 'r6', '-': 'r6', '*': 'r6', '/': 'r6', '(': null, ')': null, 'num': null, '$': 'r6', 'Expr': null, 'Term': null, 'Factor': null}; 
table[4] = {'+': null, '-': null, '*': null, '/': null, '(': 's13', ')': null, 'num': 's14', '$': null, 'Expr': 10, 'Term': 11, 'Factor': 12}; 
table[5] = {'+': 'r8', '-': 'r8', '*': 'r8', '/': 'r8', '(': null, ')': null, 'num': null, '$': 'r8', 'Expr': null, 'Term': null, 'Factor': null}; 
table[6] = {'+': null, '-': null, '*': null, '/': null, '(': 's4', ')': null, 'num': 's5', '$': null, 'Expr': null, 'Term': 15, 'Factor': 3}; 
table[7] = {'+': null, '-': null, '*': null, '/': null, '(': 's4', ')': null, 'num': 's5', '$': null, 'Expr': null, 'Term': 16, 'Factor': 3}; 
table[8] = {'+': null, '-': null, '*': null, '/': null, '(': 's4', ')': null, 'num': 's5', '$': null, 'Expr': null, 'Term': null, 'Factor': 17}; 
table[9] = {'+': null, '-': null, '*': null, '/': null, '(': 's4', ')': null, 'num': 's5', '$': null, 'Expr': null, 'Term': null, 'Factor': 18}; 
table[10] = {'+': 's19', '-': 's20', '*': null, '/': null, '(': null, ')': 's21', 'num': null, '$': null, 'Expr': null, 'Term': null, 'Factor': null}; 
table[11] = {'+': 'r3', '-': 'r3', '*': 's22', '/': 's23', '(': null, ')': 'r3', 'num': null, '$': null, 'Expr': null, 'Term': null, 'Factor': null}; 
table[12] = {'+': 'r6', '-': 'r6', '*': 'r6', '/': 'r6', '(': null, ')': 'r6', 'num': null, '$': null, 'Expr': null, 'Term': null, 'Factor': null}; 
table[13] = {'+': null, '-': null, '*': null, '/': null, '(': 's13', ')': null, 'num': 's14', '$': null, 'Expr': 24, 'Term': 11, 'Factor': 12}; 
table[14] = {'+': 'r8', '-': 'r8', '*': 'r8', '/': 'r8', '(': null, ')': 'r8', 'num': null, '$': null, 'Expr': null, 'Term': null, 'Factor': null}; 
table[15] = {'+': 'r1', '-': 'r1', '*': 's8', '/': 's9', '(': null, ')': null, 'num': null, '$': 'r1', 'Expr': null, 'Term': null, 'Factor': null}; 
table[16] = {'+': 'r2', '-': 'r2', '*': 's8', '/': 's9', '(': null, ')': null, 'num': null, '$': 'r2', 'Expr': null, 'Term': null, 'Factor': null}; 
table[17] = {'+': 'r4', '-': 'r4', '*': 'r4', '/': 'r4', '(': null, ')': null, 'num': null, '$': 'r4', 'Expr': null, 'Term': null, 'Factor': null}; 
table[18] = {'+': 'r5', '-': 'r5', '*': 'r5', '/': 'r5', '(': null, ')': null, 'num': null, '$': 'r5', 'Expr': null, 'Term': null, 'Factor': null}; 
table[19] = {'+': null, '-': null, '*': null, '/': null, '(': 's13', ')': null, 'num': 's14', '$': null, 'Expr': null, 'Term': 25, 'Factor': 12}; 
table[20] = {'+': null, '-': null, '*': null, '/': null, '(': 's13', ')': null, 'num': 's14', '$': null, 'Expr': null, 'Term': 26, 'Factor': 12}; 
table[21] = {'+': 'r7', '-': 'r7', '*': 'r7', '/': 'r7', '(': null, ')': null, 'num': null, '$': 'r7', 'Expr': null, 'Term': null, 'Factor': null}; 
table[22] = {'+': null, '-': null, '*': null, '/': null, '(': 's13', ')': null, 'num': 's14', '$': null, 'Expr': null, 'Term': null, 'Factor': 27}; 
table[23] = {'+': null, '-': null, '*': null, '/': null, '(': 's13', ')': null, 'num': 's14', '$': null, 'Expr': null, 'Term': null, 'Factor': 28}; 
table[24] = {'+': 's19', '-': 's20', '*': null, '/': null, '(': null, ')': 's29', 'num': null, '$': null, 'Expr': null, 'Term': null, 'Factor': null}; 
table[25] = {'+': 'r1', '-': 'r1', '*': 's22', '/': 's23', '(': null, ')': 'r1', 'num': null, '$': null, 'Expr': null, 'Term': null, 'Factor': null}; 
table[26] = {'+': 'r2', '-': 'r2', '*': 's22', '/': 's23', '(': null, ')': 'r2', 'num': null, '$': null, 'Expr': null, 'Term': null, 'Factor': null}; 
table[27] = {'+': 'r4', '-': 'r4', '*': 'r4', '/': 'r4', '(': null, ')': 'r4', 'num': null, '$': null, 'Expr': null, 'Term': null, 'Factor': null}; 
table[28] = {'+': 'r5', '-': 'r5', '*': 'r5', '/': 'r5', '(': null, ')': 'r5', 'num': null, '$': null, 'Expr': null, 'Term': null, 'Factor': null}; 
table[29] = {'+': 'r7', '-': 'r7', '*': 'r7', '/': 'r7', '(': null, ')': 'r7', 'num': null, '$': null, 'Expr': null, 'Term': null, 'Factor': null}; 
var A    = ['Goal', 'Expr', 'Expr', 'Expr', 'Term', 'Term', 'Term', 'Factor', 'Factor', 'Factor']; 
var beta = [1     , 3     , 3     , 1     ,  3    , 3     , 1     , 3       , 1       , 1       ]; 


function TreeNode() {
    this.nodes = []; 
    this.sym   = ''; 
    this.val   = ''; 
}

function compiler(expr) {
    this.expr = expr.match(/[\d\.\+\-\*\/\(\)]/g).join(''); 
    this.p    = 0; 
    /*
    this.char_check = function() {

    }

    this.balance_check = function() {

    }*/

    this.next_word = function() {
        var n = new TreeNode(); // #1.
        if (this.p == this.expr.length) {
            // return '$'; 
            n.sym = '$'; return n; // #1.
        }

        if (this.expr[this.p] == '*') {
            this.p++; 
            // return '*'; 
            n.sym = '*'; return n; // #1.
        } else if (m = this.expr.substring(this.p).match(re_opr)) {
            this.p++; 
            // return m[0]; 
            n.sym = m[0]; return n; // #1.
        } else if (m = this.expr.substring(this.p).match(re_num)) {
            this.p += m[0].length; 
            // return m[0]; 
            // return 'num'; 
            n.sym = 'num'; n.val = parseFloat(m[0]); return n; // #1.
        } else {
            console.log('Error #1'); 
        }
        return null; 
    }

    this.parser = function() {
        var s_state = []; 
        var s_word = []; 

        s_word.push('$'); 
        s_state.push(0); 
        var word = this.next_word(); 
        var state = peek(s_state); 

        while(true) {
            // var state = peek(s_state); 
            var jmp = table[state][word.sym]; console.log(jmp); console.log(s_state); console.log(s_word); 
            if (jmp[0] == 'r') {
                var n = new TreeNode(); // #1.
                // pop 2 x |beta| symbols; 
                for (var i = 0; i < beta[parseInt(jmp.substring(1))]; i++) {
                    // s_word.pop(); 
                    n.nodes.push(s_word.pop()); // #1.
                    s_state.pop(); 
                }
                state = peek(s_state); 
                s_state.push(table[state][A[parseInt(jmp.substring(1))]]); 
                state = peek(s_state); 
                // s_word.push(A[parseInt(jmp.substring(1))]); 
                n.sym = A[parseInt(jmp.substring(1))]; n.val = evaluate(n.nodes, jmp); s_word.push(n); // #1.
            } else if(jmp[0] == 's') {
                s_word.push(word); 
                s_state.push(parseInt(jmp.substring(1))); 
                state = peek(s_state); 
                word = this.next_word(); 
            } else if(jmp == 'acc') {
                // break; 
                console.log(s_word[1]); return s_word[1].val; 
            } else {// Fail();
                console.log('Error #2')
            }
        }
    }
}

function peek(s) {
    return s[s.length - 1]; 
}

function evaluate(nodes, jmp) {
    if (jmp == 'r0') return nodes[0].val; 
    if (jmp == 'r1') return nodes[2].val + nodes[0].val; 
    if (jmp == 'r2') return nodes[2].val - nodes[0].val; 
    if (jmp == 'r3') return nodes[0].val; 
    if (jmp == 'r4') return nodes[2].val * nodes[0].val; 
    if (jmp == 'r5') return nodes[2].val / nodes[0].val; 
    if (jmp == 'r6') return nodes[0].val; 
    if (jmp == 'r7') return nodes[1].val; 
    if (jmp == 'r8') return nodes[0].val; 
    return null; 
}


// #pseudo pragma entrance.
console.log('Hello world !'); 

// parser() method test; 
// ( 1 + 2 ) + (3 + 4) * 5 - 6 / 2.5
var c = new compiler('1 + 2 - 3 + 4 * 5.5 / 6 + 7 - 9 * (5 / 3) + 0'); 
var r = c.parser(); 

