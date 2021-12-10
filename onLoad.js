
function creacion(){

    var today = new Date();

    var txt = document.getElementById("importante");

    var texto =  "<div class='title'>\n" +
        "            <img src='https://www.pnguniverse.com/wp-content/uploads/2021/03/Merry-Christmas.png'>\n" +
        "        </div>\n";



    for (var i = 1; i < 25; i++){
        if (i == today.getDate()){
            texto +=
                "        <div class='day-" + i + "'>\n" +
                "            <label>\n" +
                "                <input type='checkbox'>\n" +
                "                <div class='door'>\n" +
                "                    <div class='front'>" + i + "</div>\n" +
                "                    <div class='back'></div>\n" +
                "                </div>\n" +
                "                </input>\n" +
                "            </label>\n" +
                "        </div>\n";
        }else{
            texto +=
                "        <div class='day-" + i + "'>\n" +
                "            <label>\n";

            if (i < today.getDate()){
                texto += "                <input type='checkbox' disabled checked='true'>\n";
            }else{
                texto +="                <input type='checkbox' disabled>\n";
            }
            texto +=
                "                <div class='door'>\n" +
                "                    <div class='front'>" + i + "</div>\n" +
                "                    <div class='back'></div>\n" +
                "                </div>\n" +
                "                </input>\n" +
                "            </label>\n" +
                "        </div>\n";

        }
    }

    txt.innerHTML = texto;

}