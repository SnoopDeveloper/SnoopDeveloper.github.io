if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function () {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function () {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 400);

}

var x = 0;

var titleText = ["s", "n", "oop", "Snoop", "Snoop ", "Snoop |", "Snoop | ", "Snoop | l", "Snoop | lv", "Snoop | lvl", "Snoop | lvl1", "Snoop | lvl10", "Snoop | lvl100 ", "snoop | lvl100 s", "snoop | lvl100 st", "snoop | lvl100 str", "snoop | lvl100 snoop", "D | lvl100 snoop", "snoop | lvl100 De", "Snoop | lvl100 Dev", "Snoop | lvl100 dever", "Snoop | lvl100 Devel", "Snoop | lvl100 develo", "Snoop | lvl100 develop", "Snoop | lvl100 developer", "Snoop | lvl100 developer", "Snoop | lvl100 ", "Dev | lvl100", "Snoop| lvl100", "Dev | lvl100", "Snoop | lvl69", "Snoop | lv69", "Snoop | lv6", "Developer | lvl69", "Snoop |", "Snoop ", "developer", "Snoop", "dev", "<3"];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length];

}


