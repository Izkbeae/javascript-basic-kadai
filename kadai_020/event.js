// HTML要素を取得して定数に代入
const button = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンがクリックされたら文字を変更するイベントリスナーを追加
button.addEventListener('click', function() {
    text.textContent = 'ボタンをクリックしました！';
});
