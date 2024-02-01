function search() {
    var input = document.getElementById('search-input').value;
    window.open("https://www.baidu.com/s?wd=" + encodeURIComponent(input));
}
