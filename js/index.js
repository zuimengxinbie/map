$(function() {
    new rolldate.Date({
        el: "#date",
        format: "YYYY-MM-DD",
        beginYear: 2000,
        endYear: 2100,
        theme: "#FFD800",
        tapBefore: function(el) {
            console.log("插件开始触发");
        },
        moveEnd: function(el, iscroll) {
            console.log("滚动结束");
        },
        confirmBefore: function(el, date) {
            console.log("确定按钮触发");
        },
        confirmEnd: function(el, date) {
            console.log("插件运行结束");
        }
    });
});