$(document).ready(function(){
    $('#search-input').bind('keyup', function() {
        var jqueryInput = $(this);
        //用户输入
        var searchText = jqueryInput.val();
        //请求必应的服务器，获得相关搜索信息
        var sugurl = "https://api.bing.com/qsonhs.aspx?type=cb&q=#content#&cb=window.bing.sug";
        sugurl = sugurl.replace("#content#", searchText);
        var result = new Array();
        window.bing = {
            sug: function(json) {
                var  results = json.AS.Results
                // console.log(json.AS.Results[0].Suggests)
                results.forEach(
                    function (item) {
                        suggests = item.Suggests
                        suggests.forEach(function (suggest) {
                            // console.log(suggest.Txt)
                            result.push(suggest.Txt)
                        })
                    }
                )

            }
        }
        var script = document.createElement("script");
        script.src = sugurl;
        document.getElementsByTagName("head")[0].appendChild(script);
        setTimeout(() => {
            //代码
            // console.log(result)
            var html = "";
            var index = 0
            result.forEach(
                function (item) {
                    index += 1
                    if (index<9){
                        html += "<li class='suggestsItem'> <a class='aItem'>" + item + "</a></li>";
                    }

                }
            )
            // console.log(html)

            $("#search-result").html(html)
            // console.log("searchText")
            // console.log(searchText)
            if (searchText !=""){
                $(".suggest").css({
                    "visibility": "visible"
                })
            }else {
                $(".suggest").css({
                    "visibility": "hidden"
                })
            }

        }, 400);



    });

    $(document).bind('click',function(event) {
        // 隐藏搜索结果
        $("#search-input").val("")
        $('#search-suggest').css("visibility","hidden");
    });

    $(document).delegate('.suggestsItem', 'click', function(event) {
        var li_text = $(this).text();//取到li里的文本
        //返回结果的链接
        location.href = 'http://cn.bing.com/search?q=' + li_text;
    });
});