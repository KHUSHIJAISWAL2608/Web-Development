function genTable() {
    interval = 5000
    current_table = 2;
    printTable = setInterval(() => {
    if (current_table == 11) {
    clearInterval(printTable);
    } else {
    generate(current_table++);
    }
    }, interval);
    }
    function generate(k) {
    table="";
    for (j=1; j<=10; j++) {
    table += k*j + " ";
    }
    node = document.createElement("div");
    nodetext = document.createTextNode(table);
    node.style.fontSize = increasingFont(current_table);
    node.style.color = randomColor();
    node.appendChild(nodetext);
    document.body.appendChild(node);
    document.body.appendChild(document.createElement("br"));
    }
    Page | 20
    function randomColor() {
    return ("#"+ Math.floor(Math.random()*16777215).toString(16));
    }
    function increasingFont(p) {
    arr = [15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
    return (arr[p-2]+"px");
    }
    genTable()