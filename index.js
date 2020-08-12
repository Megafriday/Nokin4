let ikeSui = 200;
const pumpMax = 1000;
let pumpNow = 100;
let nuki = 0;

if (ikeSui < pumpMax - pumpNow) {
	nuki = ikeSui;
} else {
	nuki = pumpMax - pumpNow;
}
ikeSui -= nuki;
pumpNow += nuki;

console.log("抜いた量：" + nuki);
console.log("池の水：" + ikeSui);
console.log("ポンプ車の水：" + pumpNow);