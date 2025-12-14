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

//学習11 繰り返し処理まとめ
for (let number4 = 1; number4 <= 5; number4++) {
  if (number4 === 5) {
    console.log("5です");
  } else {
    console.log(number4);
  }
}

//学習11 配列
const anime1 = ["あい", "みさき", "たかし"];
console.log(anime1);

//学習12 配列の要素の取得
//配列はそれぞれの番号で出力できる
console.log(anime1[0]);
console.log(anime1[1]);

//学習13 配列の要素の更新
//配列の一部であれば更新が可能
anime1[0] = "たろう";
console.log(anime1[0]);

//学習14 配列と繰り返し
//配列の値を個別に指定しなくてもforで範囲を指定すれば取り出すことが可能
const anime2 = ["くま", "おいし", "うまじ"];
for (let i = 0; i < 3; i++) {
  console.log(anime2[i]);
}

//学習15 配列と繰り返し2
//lengthを使用すると配列の要素の数を取得できるので、配列の中身の数が変わっても大丈夫で便利
//for文などにそのまま使用することも可能
console.log(anime2.length);
for (let i = 0; i < anime2.length; i++) {
  console.log(anime2[i]);
}

//学習16 オブジェクト
//特定のルールを使用すると二つの要素をもつオブジェクトを代入することが出来る
const character1 = { name: "ふとし", age: 25 };
console.log(character1);

//学習17 オブジェクトの取得、更新
//変数名.オブジェクト名とすることで値の取得と更新が出来る
console.log(character1.name);
character1.age = 30;
console.log(character1);

//学習18 オブジェクトを要素に持つ配列
//今までの配列にそのままオブジェクトを入れることが出来る
//配列を取り出すのは今まで通り、番号を指定する必要があるが、特定の要素は(characters[1].age)のように指定が必要
const character2 = [
  { name: "たかし", age: 20 },
  { name: "ひとし", age: 40 },
  { name: "むさし" },
];
console.log(character2[0]);
console.log(character2[1].age);

//学習19　オブジェクトを要素に持つ配列2（演習）
//別の定数を定義すること例えば
// const character = characters[i];とすると
// 「charactersリストのi番目の住人のことを、このループの中では、特別にcharacterという、分かりやすいニックネームで呼ぶことにするよ！」
// こうすることで、
// characters[i].name と書く代わりに、character.name と書ける。
// characters[i].age と書く代わりに、character.age と書ける。
for (let i = 0; i < character2.length; i++) {
  console.log("-----------------");

  const character = character2[i];

  console.log(`僕は${character.name}です`);

  if (character.age === undefined) {
    console.log("年齢は秘密です");
  } else {
    console.log(`${character.age}歳です`);
  }
}

//学習20　undefined
//配列やオブジェクトに指定していないものが入っていると表示される内容
//（179行目をageを欠けたものに修正するとundefined歳と表示される）

//学習21　undefinedの対応
//undefinedを出さないようにするためにfor文の中にif文を追加し対処するやり方がある
//198行目に追記

//学習22　総合演習1
//オブジェクトの中にさらに別のオブジェクトを入れることで、細かい要素を言えることが出来る
//一つの定数の中に複数の役割を与えるような複雑な処理が可能になる
const cafe = {
  name: "インディア",
  cafetime: {
    //例えばここでcafetimeプロパティに対応するオブジェクトを追加することが出来る
    opning: "10時",
    closing: "23時",
  },
};
console.log(`店名は${cafe.name}です`);
console.log(
  `営業時間は${cafe.cafetime.opning}から${cafe.cafetime.closing}です`
);

//学習23　総合演習2
//オブジェクトの値には配列を用いることもできます
//配列を用いることで、オブジェクトとは異なったルールの処理が可能です。
const cafe2 = {
  name: "アバレスト",
  //例えばここでmenusという配列を追加することもできる
  menus: ["お茶", "プーアル茶", "ハトムギ茶"],
};
console.log(`店名は${cafe2.name}です`);
console.log(`------------------------------`);
console.log(`おすすめメニューはこちら`);
for (let i = 0; i < cafe2.menus.length; i++) {
  console.log(cafe2.menus[i]);
}
