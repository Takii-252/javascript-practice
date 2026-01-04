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
