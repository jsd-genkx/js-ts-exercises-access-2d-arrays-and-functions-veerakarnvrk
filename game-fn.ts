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

// Define movement functions
function moveRight() {}

function moveLeft() {}

function moveUp() {}

function moveDown() {}

// Call the movement functions
moveRight(); // Move from A to B
moveRight(); // Move from B to C
moveDown(); // Move from C to F
moveLeft(); // Move from F to E

console.log("Path:", moves.join(" → "));
console.log("Total Moves (Start from 'A'):", moves.length - 1); */

const board = [
    ["A", "B", "C"],
    ["D", "E", "F"],
    ["G", "H", "I"],
];

const moves = [];

// Start at A (0,0)
let row = 0;
let col = 0;
moves.push(board[row][col]); // A

// --- ช่วงแก้โจทย์: ใส่ไส้ในให้ฟังก์ชัน ---

function moveRight() {
    col++; // 1. ขยับเลขห้องเพิ่ม (ไปขวา)
    moves.push(board[row][col]); // 2. หยิบของใส่ถุง
}

function moveLeft() {
    col--; // 1. ขยับเลขห้องลด (ไปซ้าย)
    moves.push(board[row][col]); // 2. หยิบของใส่ถุง
}

function moveUp() {
    row--; // 1. ขยับชั้นลดลง (ขึ้นบน)
    moves.push(board[row][col]); // 2. หยิบของใส่ถุง
}

function moveDown() {
    row++; // 1. ขยับชั้นเพิ่มขึ้น (ลงล่าง)
    moves.push(board[row][col]); // 2. หยิบของใส่ถุง
}

// --- จบช่วงแก้โจทย์ ---

// Call the movement functions (ตามคำสั่งเดิมของคุณ)
moveRight(); // จาก A -> B
moveRight(); // จาก B -> C
moveDown();  // จาก C -> F (เปลี่ยนชั้น)
moveLeft();  // จาก F -> E (ย้อนกลับ)

console.log("Path:", moves.join(" → "));
// Output: Path: A → B → C → F → E

console.log("Total Moves (Start from 'A'):", moves.length - 1);
// Output: Total Moves (Start from 'A'): 4
