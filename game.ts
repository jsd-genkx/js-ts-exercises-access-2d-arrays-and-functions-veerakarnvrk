/* const board = [
	["A", "B", "C"],
	["D", "E", "F"],
	["G", "H", "I"],
];

const moves = [];

// Start at A (0,0) -> [row][col]
let row = 0;
let col = 0; 
moves.push(board[row][col]); // A

// Move Right to B
col++;
moves.push(board[row][col]); // B

// Move Right to C

// Move Down to F

// Move left to E

console.log("Path:", moves.join(" → "));
// Output: Path: A → B → C → F → E
console.log("Total Moves (Start from 'A'):", moves.length - 1);
// Output: Total Moves (Start from 'A'): 4 */


const board = [
    ["A", "B", "C"], // row 0
    ["D", "E", "F"], // row 1
    ["G", "H", "I"], // row 2
];

const moves = [];

// 1. เริ่มต้นที่ A (ชั้น 0, ห้อง 0)
let row = 0;
let col = 0; 
moves.push(board[row][col]); // ได้ "A" เก็บใส่ถุง

// 2. ขยับขวาไป B
col++; // ห้องเปลี่ยนจาก 0 -> 1
moves.push(board[row][col]); // ได้ "B"

// 3. ขยับขวาไป C
col++; // ห้องเปลี่ยนจาก 1 -> 2
moves.push(board[row][col]); // ได้ "C"

// 4. ขยับลงไป F 
// (จุดเปลี่ยนสำคัญ! เราต้องเปลี่ยน 'ชั้น' แทน 'ห้อง')
row++; // ชั้นเปลี่ยนจาก 0 -> 1
moves.push(board[row][col]); // ตำแหน่งตอนนี้คือ [1][2] ซึ่งก็คือ "F"

// 5. ขยับซ้ายไป E
// (เดินย้อนกลับ ต้องลดเลขห้อง)
col--; // ห้องเปลี่ยนจาก 2 -> 1
moves.push(board[row][col]); // ตำแหน่งตอนนี้คือ [1][1] ซึ่งก็คือ "E"

// --- แสดงผลลัพธ์ ---
console.log("Path:", moves.join(" → "));
// Output: Path: A → B → C → F → E

console.log("Total Moves (Start from 'A'):", moves.length - 1);
// Output: Total Moves (Start from 'A'): 4