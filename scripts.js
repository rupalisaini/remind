$(document).ready(() => {
    console.log("hi");

    colors = ["lightcoral", "greenyellow", "deepskyblue", "gold"]

    $table = $("#year-table");
    let id = 0;
    for(let i = 0; i < 18; i++){
        row = $("<div class='year-row'></div>");
        for(let j = 0; j < 20; j++){
            cell = $("<div id='" + id + "' class='year-cell'></div>");
            cell.css("background-color", colors[Math.floor(Math.random()*4)]);
            row.append(cell);
            id++;
        }
        $table.append(row);
    }
    row = $("<div class='year-row'></div>");
    for(let j = 0; j < 5; j++){
        cell = $("<div id='" + id + "' class='year-cell'></div>");
        cell.css("background-color", colors[Math.floor(Math.random()*4)]);
        row.append(cell);
        id++;
    }
    $table.append(row);
});