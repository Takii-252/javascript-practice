// Progateで学んだことを使って、
// 【課題①】「change-button」という名前の「ボタン」を、HTMLから取ってくる
// document（HTML文書全体）の中から、getElementById（IDで要素を探す）という魔法を使う
// 「'change-button'」というIDを持つものを探して、
// 「button」という名前の、使いやすいお皿（定数）に乗せておく
const button = document.getElementById("change-button"); // ← 穴埋め①：ここに、探したい材料の「ID名」を書きます

// 【課題②】「text-area」という名前の「文字エリア」を、HTMLから取ってくる
// 同じように、「'text-area'」というIDを持つものを探して、
// 「textArea」という名前のお皿に乗せておく
const textArea = document.getElementById("text-area"); // ← 穴埋め②：ここに、もう一つの材料の「ID名」を書きます

// 【課題③】ボタンに、クリックされた時の「仕事」を教える

// 「button」というお皿に乗ったボタンに対して、
// .addEventListener（イベントの聞き耳を立てる）という魔法をかける

// 第1の材料：'click'
//   → 「クリックされた時」というイベントを、待ちなさい、という指示

// 第2の材料：() => { ... }
//   → もしクリックされたら、「このカッコの中の仕事」を実行しなさい、という指示書（コールバック関数）

button.addEventListener("click", () => {
  // --- ここからが、クリックされた瞬間に実行される、魔法の中身 ---

  // 「textArea」というお皿に乗っている、文字エリアの、
  // .textContent（文字の中身）を、
  // =（イコール）を使って、新しい文字に「上書き」しなさい

  textArea.textContent = "ボタンがクリックされました"; // ← 穴埋め③：ここに、「どんな文字列に」上書きしたいかを書きます

  // --- 魔法は、ここまで ---
});
