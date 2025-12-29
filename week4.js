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
