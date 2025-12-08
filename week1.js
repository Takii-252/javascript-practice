console.log("いちご" + "大福");
console.log("20" + "15");

let name = "にんじゃわんこ";
console.log(name);

let length = 5;
console.log(length);
console.log(length * length * 3);

length = 10;
console.log(length);
console.log(length * length * 3);

length += 10;
console.log(length);
length /= 10;
console.log(length);

const yoru = "ねむい";
console.log(yoru);
console.log(yoru + "です");

const aka = "たけし";
const ao = "20";
console.log(`僕の名前は${aka}です`);
console.log(`僕は${ao}歳です`); //バッククォーテーションを使用しドルと中括弧で囲む

//ここから有料
//条件分岐
//学習1 if
const midori = 15;
if (midori > 10) {
  console.log("私はみどりです");
} //if文の最後にセミコロンはいらない

//学習2 大なり小なり
console.log(midori > 10);
console.log(midori < 9);

//学習3 真偽
const kiiro = "anime";
if (kiiro === "anime") {
  console.log("アニメだよ");
}
if (kiiro !== "anime") {
  console.log("アニメじゃないよ");
}

//学習4 else
const age2 = 15;
if (age2 > 10) {
  console.log("年上ですね");
} else {
  console.log("年下ですね");
}
