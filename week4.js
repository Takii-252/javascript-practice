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

// 仕様:
// Characterクラス（親クラス）を作成してください。
// constructorは、nameとhp（ヒットポイント）を受け取り、プロパティとして設定します。
// introduceというメソッドを定義してください。
// これは、「私の名前は（名前）だ。HPは（HP）だ。」という形式で、自己紹介を出力します。
// Characterを継承した、Wizardクラス（子クラス）を作成してください。
// constructorは、name, hpに加えて、mp（マジックポイント）も受け取ります。
// nameとhpの設定は、親のconstructorを再利用してください。
// mpは、Wizardだけの新しいプロパティとして設定します。
// castSpell（呪文を唱える）という、Wizardだけの新しいメソッドを定義してください。
// これは、「メラ！」と、コンソールに出力するだけの、シンプルなメソッドです。
// introduceメソッドをオーバーライドしてください。
// まず、親のintroduceメソッドを呼び出して、名前とHPを出力します。
// その後、新しい行に、「MPは（MP）だ。」という情報を、追加で出力します。
// 最後に、作成したWizardクラスを使って、以下の情報を持つインスタンスを生成し、その能力を試してください。
// 名前: "マーリン"
// HP: 80
// MP: 100
// 試す能力:
// introduceメソッドを呼び出す。
// castSpellメソッドを呼び出す。

class Character {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
  }

  introduce() {
    console.log("======");
    console.log(`私の名前は ${this.name}だ。HPは ${this.hp}だ。`);
  }
}

class Wizard extends Character {
  // ← どのクラスを継承しますか？
  constructor(name, hp, mp) {
    // ← 引数は3つ必要です
    super(name, hp); // ← 親のconstructorに渡すべき引数は、どれとどれでしょう？
    this.mp = mp;
  }

  introduce() {
    super.introduce(); // ← これが「親のメソッドを呼び出す」特別な呪文です！
    // ここに、効果量を出力するconsole.logを追加します
    console.log(`MPは${this.mp}だ。`);
  }

  castSpell() {
    console.log("メラ！");
  }
}

const wizard1 = new Wizard("マーリン", 80, 100); // ← 3つの「材料」を渡して、新しいポーションを作ります
wizard1.introduce();
wizard1.castSpell();

// 仕様:
// Productクラス（親クラス）を作成してください。
// constructorは、nameとprice（税抜価格）を受け取ります。
// getTaxIncludedPrice（税込価格を取得する）というメソッドを定義してください。
// このメソッドは、引数として**taxRate（税率、例えば 0.1 のような数値）**を受け取ります。
// そして、price * (1 + taxRate) を計算し、その結果（税込価格）を**return（戻り値）**で返します。
// printInfoメソッドを定義してください。
// 「商品名： （名前）, 税抜価格： （価格）円」という形式で、情報を出力します。
// Productを継承した、Bookクラス（子クラス）を作成してください。
// constructorは、name, priceに加えて、author（著者名）も受け取ります。
// printInfoメソッドをオーバーライドしてください。
// まず、親のprintInfoメソッドを呼び出します。
// その後、新しい行に、「著者： （著者名）」という情報を追加で出力します。
// 最後に、作成したクラスを使って、以下の処理を実行してください。
// Bookクラスから、以下の情報を持つインスタンス book を生成します。
// 名前: "JavaScript入門"
// 価格: 2500
// 著者: "山田太郎"
// 生成した book インスタンスの、printInfoメソッドを呼び出します。
// book インスタンスの、getTaxIncludedPriceメソッドを呼び出し、引数に**0.1（消費税10%）**を渡します。
// getTaxIncludedPriceメソッドが返してきた戻り値を、taxIncludedPriceという名前の定数に格納します。
// 最後に、「税込価格は（taxIncludedPrice）円です」と、コンソールに出力します。

//==============【子クラス：Book の設計図】==============
// Itemクラスの全ての能力を「継承」しつつ、本だけが持つ特別な情報を追加します。
class Book extends Item {
  // --- コンストラクタのオーバーライド（上書き） ---
  // 親が受け取る「名前」「価格」に加えて、「著者名(author)」も材料として受け取ります。
  constructor(name, price, author) {
    // 「super(name, price)」で、親クラス(Item)のコンストラクタを呼び出し、
    // 名前と価格の設定は、親に「お任せ」します。
    super(name, price);

    // 「著者名」は、Bookクラスだけの特別なプロパティなので、ここで新しく設定します。
    this.author = author;
  }

  // --- メソッドのオーバーライド（上書き） ---
  printInfo() {
    // 「super.printInfo()」で、まず親クラス(Item)のprintInfoメソッドを呼び出し、
    // 名前と価格の表示は、親に「お任せ」します。
    super.printInfo();

    // その後、Bookクラスだけの追加情報である「著者名」を出力します。
    console.log(`著者： ${this.author}`);
  }
}

//==============【ここからが、設計図を使った「実行」フェーズ】==============

// 1. Bookクラス（設計図）から、具体的な一つの「本」のインスタンスを生成します。
// "JavaScript入門", 2500, "山田太郎" という3つの「材料」を、constructorに渡します。
const book = new Book("JavaScript入門", 2500, "山田太郎");

// 2. 生成したbookインスタンスが持つ、printInfoメソッドを呼び出します。
// (これは、Bookクラスでオーバーライドされた、子クラスのメソッドが実行されます)
book.printInfo();

// 3. bookインスタンスが、親から受け継いだgetTaxIncludedPriceメソッドを呼び出します。
// 引数として、税率である「0.1」を渡します。
// このメソッドは、計算結果の「2750」を「戻り値」として、その場に返します。
const taxIncludedPrice = book.getTaxIncludedPrice(0.1);

// 4. 手順3で受け取った戻り値（2750）が、定数taxIncludedPriceに代入されています。
// 5. その定数を使って、最終的な結果を出力します。
console.log(`税込価格は ${taxIncludedPrice}円です`);
