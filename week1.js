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

//学習5 else if
const age3 = 15;
if (age3 > 20) {
  console.log("年上ですね");
} else if (age3 > 10) {
  console.log("同じ年ですね");
} else {
  console.log("年下ですね");
}

//学習6 &&
const age4 = 11;
if (age4 > 10 && age4 <= 20) {
  console.log("合ってます");
}

//学習7 switch文1
const a1 = 1;
switch (a1) {
  case 1:
    console.log("１です");
    break;
  case 2:
    console.log("2です");
    break;
  case 3:
    console.log("3です");
    break;
}

//学習7 switch文2
const a2 = 4;
switch (a2) {
  case 1:
    console.log("１です");
    break;
  case 2:
    console.log("2です");
    break;
  case 3:
    console.log("3です");
    break;
  default:
    console.log("一致しません");
    break;
}

//学習8 フェーズ2 変数の復習
let number1 = 0;
number1 += 1;
console.log(number1);
number1 += 1;
console.log(number1);

//学習9 while文
let number2 = 1;
while (number2 < 4) {
  console.log(number2);
  number2 += 1;
}

//学習10 for文
for (let number3 = 5; number3 <= 7; number3++) {
  console.log(number3);
}

//学習10 繰り返し処理まとめ
for (let number4 = 1; number4 <= 5; number4++) {
  if (number4 === 5) {
    console.log("5です");
  } else {
    console.log(number4);
  }
}
