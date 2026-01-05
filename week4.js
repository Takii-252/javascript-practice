const characters = [
  { name: "勇者", level: 15 },
  { name: "魔法使い", level: 8 },
  { name: "戦士", level: 20 },
];

for (let i = 0; i < characters.length; i++) {
  console.log("-----------------");

  const character = characters[i];

  if (character.level > 10) {
    console.log(`${character.name}は、ベテランだ`);
  } else {
    console.log(`${character.name}は、まだ新人だ`);
  }
}

const items = [
  { name: "やくそう", price: 20, isRare: false },
  { name: "どくけしそう", price: 30, isRare: false },
  { name: "せいすい", price: 100, isRare: true },
  { name: "けんじゃのいし", price: 10000, isRare: true },
];

for (let i = 0; i < items.length; i++) {
  console.log("======");

  const item = items[i];

  console.log(`アイテム名：${item.name}`);

  if (item.isRare === true && item.price > 500) {
    console.log("これは、とても高価なレアアイテムだ！");
  }
}

//演習③
// Itemクラス（親クラス）を作成してください。
// constructorは、nameとpriceの2つの引数を受け取り、それぞれをインスタンスのプロパティとして設定します。
// printInfoという名前のメソッドを定義してください。
// このメソッドは、「名前： （アイテム名）, 価格： （価格）G」という形式の文字列を、コンソールに出力します。
// Itemクラスを継承した、Potionクラス（子クラス）を作成してください。
// constructorは、name, priceに加えて、3つ目の引数としてeffect（効果量）を受け取ります。
// nameとpriceの設定は、親クラスのconstructorを再利用してください。
// effectは、Potionインスタンスだけの、新しいプロパティとして設定します。
// printInfoメソッドをオーバーライドしてください。
// まず、親クラスのprintInfoメソッドを呼び出して、名前と価格を出力します。
// その後、新しい行に、「効果量： HPを（効果量）回復」という形式の文字列を、追加で出力します。
// 最後に、作成したPotionクラスを使って、以下の情報を持つインスタンスを生成し、そのprintInfoメソッドを呼び出してください。
// 名前: "やくそう"
// 価格: 20
// 効果量: 50

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  printInfo() {
    console.log("======");
    console.log(`名前： ${this.name}, 価格： ${this.price}G`);
  }
}

class Potion extends Item {
  // ← どのクラスを継承しますか？
  constructor(name, price, effect) {
    // ← 引数は3つ必要です
    super(name, price); // ← 親のconstructorに渡すべき引数は、どれとどれでしょう？
    this.effect = effect;
  }

  printInfo() {
    super.printInfo(); // ← これが「親のメソッドを呼び出す」特別な呪文です！
    // ここに、効果量を出力するconsole.logを追加します
    console.log(`効果量： HPを${this.effect}回復`);
  }
}

const potion = new Potion("やくそう", 20, 50); // ← 3つの「材料」を渡して、新しいポーションを作ります
potion.printInfo();
