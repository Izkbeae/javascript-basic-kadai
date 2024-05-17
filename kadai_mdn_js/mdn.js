// 現在の日付を取得
const today = new Date();

// 年、月、日を取得
const year = today.getFullYear();
const month = today.getMonth() + 1; // 月は0から始まるので1を足す
const day = today.getDate();

// 日付を「YYYY年M月D日」の形式でフォーマット
const formattedDate = `${year}年${month}月${day}日`;

// フォーマットした日付をコンソールに表示
console.log(formattedDate);
