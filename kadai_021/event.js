// HTML要素を定数に代入
const textElement = document.getElementById('text');
const buttonElement = document.getElementById('btn');

// ボタンクリック時のイベントリスナーを設定
buttonElement.addEventListener('click', () => {
    // 2秒後にテキストを変更
    setTimeout(() => {
        textElement.textContent = 'ボタンをクリックしました！';
    }, 2000);
});
