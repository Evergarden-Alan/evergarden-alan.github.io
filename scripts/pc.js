$(document).ready(function(){
       // div禁用右键
       $("div").bind("contextmenu", function(){
              return false;
       })
       resize();
       $(window).resize(function(){
              browserRedirect();
              resize();
       })
       function login() {
              var userId = $("#userId").val()
              var password = $("#password").val()
              $.ajax({
                     type:"POST",
                     url: "https://dsm.violetevergarden.link:7778/login.php",
                     data: {
                            userId:userId,
                            password:password
                     },
                     dataType: "json",
                     complete:function () {
                            $("#login").css("visibility","hidden");
                     },
                     success:function (data) {
                            isLogin += 1

                            // console.log(data)
                     },
                     error:function (e) {
                            console.log(e)
                     }
              })

       }
       function getFastlink() {
              $.ajax({
                     type:"GET",
                     url: "https://dsm.violetevergarden.link:7778/getLink.php",
                     data: {
                            type:1
                     },
                     dataType: "json",
                     success:function (data) {
                            console.log(data)
                     },
                     error:function (e) {
                            console.log(e)
                     }
              })
       }

       function resize() {
              var width = $(window).width();
              var height = $(window).height();
              if (width>height){
                     console.log("width>height")
                     $(".suggest").css("height","22.5vh")
                     $(".suggestsItem").css({
                            "height":"2vh",
                            "font-size": "1.5vh",
                            // "padding" : "1vh"
                     })
                     $(".aItem").css({
                            "width":"50vh",
                            "height":"2vh",
                            "font-size": "1.5vh",
                            // "padding" : "1vh"
                     })
                     $(".addNew").attr("id","long")
                     $(".fastlink").css("width","60vh")
                     $(".fastlink").css("height","60vh")
                     $(".fastlink>ul").css("width","60vh")
                     $(".fastlink>ul>li").css("width","6vh")
                     $(".fastlink>ul>li").css("height","6vh")
                     $(".fastlink>ul>li").css("margin","5vh")
                     $(".fastlink>ul>li").css("padding","2vh")
              }else {
                     console.log("width<height")
                     $(".aItem").css({
                            "width":"50vw",
                            "height":"2vw",
                            "font-size": "1.5vw",
                            // "padding" : "1vw"
                     })
                     $(".suggest").css("height","16vw")
                     $(".suggestsItem").css({
                            "height":"2vh",
                            "font-size": "1.5vh",
                            // "padding" : "1vh"
                     })
                     $(".addNew").attr("id","short")
                     $(".fastlink").css("width","60vw")
                     $(".fastlink").css("height","60vw")
                     $(".fastlink>ul").css("width","60vw")
                     $(".fastlink>ul>li").css("width","6vw")
                     $(".fastlink>ul>li").css("height","6vw")
                     $(".fastlink>ul>li").css("margin","5vw")
                     $(".fastlink>ul>li").css("padding","2vw")
              }
       }

       var status = 0
       var isLogin = 0
       var logoStatus = 0
       var addStatus = 0
       $(".main-window").css("filter","blur(30px)")
       $(".main-window").css("opacity","0.6")
       $(".search").css("visibility","visible")
       $(".logoContener").css("bottom","30%")
       $(".logoContener").css("visibility","visible")
       $(".l-footer").css("visibility","visible")
       $(".Copyright").css("visibility","visible")
       $(".main-window").css("transition","400ms opacity,400ms filter")
       // $(".search").css("transition","1s visibility")
       status += 1


       //界面交互事件
       function logoStatusFun() {
              $("#login").css("visibility","hidden");
              $("#addNewFastlink").css("visibility","hidden")
              if (logoStatus==0){

                     $(".search").css("visibility","hidden")
                     $(".logoContener").css("bottom","70%")
                     $(".fastlink").css("visibility","visible")
                     logoStatus += 1
              }else {

                     $(".search").css("visibility","visible")
                     $(".logoContener").css("bottom","30%")
                     $(".fastlink").css("visibility","hidden")
                     logoStatus -= 1
              }
       }
       $(".l-first").on("click",function (){
              $("#search-input").val("")
              $(".suggest").css("visibility","hidden")
              if (status==0){
                     $(".main-window").css("filter","blur(30px)")
                     $(".main-window").css("opacity","0.6")
                     $(".search").css("visibility","visible")
                     $(".logoContener").css("bottom","30%")
                     $(".logoContener").css("visibility","visible")
                     $(".l-footer").css("visibility","visible")
                     $(".Copyright").css("visibility","visible")
                     $("#addNewFastlink").css("visibility","hidden")
                     $("#login").css("visibility","hidden")
                     $(".main-window").css("transition","400ms opacity,400ms filter")

                     // $(".search").css("transition","1s visibility")
                     status += 1
                     // if (logoStatus==0){logoStatus += 1}

                     // console.log(status)
                     // console.log(logoStatus)
              }else {
                     $("#addNewFastlink").css("visibility","hidden")
                     $("#login").css("visibility","hidden")
                     $(".search").css("visibility","hidden")
                     $(".logoContener").css("visibility","hidden")
                     $(".logoContener").css("bottom","70%")
                     $(".l-footer").css("visibility","hidden")
                     $(".Copyright").css("visibility","hidden")
                     $(".main-window").css("filter","blur(0px)")
                     $(".main-window").css("opacity","1")
                     $(".main-window").css("transition","800ms opacity,800ms filter")
                     $(".fastlink").css("visibility","hidden")
                     // $(".search").css("transition","1s visibility")
                     status -= 1
                     if (logoStatus==1){
                            logoStatus -= 1
                     }
                     if (addStatus==1){
                            addStatus -= 1
                     }

                     // console.log(status)
                     // console.log(logoStatus)
              }

       })
       $(".checkButton").on("click",function () {
              $("#search-input").val("")
              $(".suggest").css("visibility","hidden")
              if (isLogin==0) {
                     console.log(isLogin)
                     $("#login").css("visibility","visible");
                     var X = $(".logoContener").offset().top
                     var height = $("#login").height()

                     var Y = $(".logoContener").offset().left
                     var width = $("#login").width()/2

                     $("#login").css("top",X+height*0.5)
                     $("#login").css("left",Y-width*0.7)
                     $("#loginForm").submit(function (event) {
                            event.preventDefault();
                            login()
                     })
                     // logoStatusFun()
              }else {
                     getFastlink()
                     logoStatusFun()
              }

       })
       //输入框事件
       $('#search-input').bind('keypress',function(event){
              if(event.keyCode == "13")
              {
                     // alert('你输入的内容为：' + $('#search-input').val());
                     window.location.href="https://cn.bing.com/search?q="+$('#search-input').val()
                     rel="external nofollow"
              }
       });
       $(".search-input").on("focus",function () {
              $(".search-input").attr("placeholder","")
              $("#login").css("visibility","hidden");
       })
       $(".search-input").on("blur",function () {
              $(".search-input").attr("placeholder","搜索")
       })
       $("#title").on("focus",function () {
              $("#title").attr("placeholder","")
       })
       $("#title").on("blur",function () {
              $("#title").attr("placeholder","名称")
       })
       $("#address").on("focus",function () {
              $("#address").attr("placeholder","")
       })
       $("#address").on("blur",function () {
              $("#address").attr("placeholder","网址")
       })
       $("#userId").on("focus",function () {
              $("#userId").attr("placeholder","")
       })
       $("#userId").on("blur",function () {
              $("#userId").attr("placeholder","账号")
       })
       $("#password").on("focus",function () {
              $("#password").attr("placeholder","")
       })
       $("#password").on("blur",function () {
              $("#password").attr("placeholder","密码")
       })


       //添加按钮事件
       $(".addNew").on("click",function () {
              if (addStatus==0){
                     var X = $(".addNew").offset().top
                     var height = $("#addNewFastlink").height()

                     var Y = $(".addNew").offset().left
                     var width = $("#addNewFastlink").width()/2

                     $("#addNewFastlink").css("top",X-height*0.7)
                     $("#addNewFastlink").css("left",Y-width*0.7)
                     $("#addNewFastlink").css("visibility","visible")
                     console.log(addStatus)
                     addStatus += 1
              }else {
                     $("#addNewFastlink").css("visibility","hidden")
                     addStatus -= 1
              }
              console.log("click")

       })
       $("#newLink").submit(function (envent)
       {
              envent.preventDefault();

              var address = $("#address").val()
              var title = $("#title").val()

              $.ajax({
                     type: "GET",
                     url: "http://192.168.31.227/homepage/addNewLink.php",
                     data: {
                            address :address,
                            title : title,
                            type : 1
                     },
                     dataType: "json",
                     complete:function () {
                            console.log("complete")
                            $("#addNewFastlink").css("visibility","hidden")
                     },
                     success: function (data)
                     {
                            console.log(data)
                     },
                     error :function (e) {
                            console.log(e)
                     }
              });
       });


       //选项交互
       $(".suggest li").on("hover",function () {
              $(this).sibling(li).removeClass("selected");
              $(this.addClass("selected"))
       })

})