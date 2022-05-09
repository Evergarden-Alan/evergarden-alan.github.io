// browserRedirect();
function browserRedirect() {
       var sUserAgent = navigator.userAgent.toLowerCase();
       console.log(sUserAgent)
       var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
       console.log(bIsIpad)
       var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
       console.log(bIsIphoneOs);
       var bIsMidp = sUserAgent.match(/midp/i) == "midp";
       var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
       var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
       var bIsAndroid = sUserAgent.match(/android/i) == "android";
       var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
       var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

       console.log((bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM));
       if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)) {
              var width = $(window).width();
              var height = $(window).height();
              if(width>height){
                     window.location.href = "PC.html";

              }else{
                     window.location.href = "PC.html";

              }
       }else{
              window.location.href = "PC.html";
              $(".fastlink ul li").css("width","10vh")
              $(".fastlink ul li").css("height","10vh")
              $(".fastlink ul li").css("margin","5vh")
       }
}