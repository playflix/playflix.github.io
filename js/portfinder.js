            var isAccessible = null;
            var port = 49152;
            function checkConnection() {
                var url = "http://127.0.0.1:"+port;
                $.ajax({
                    url: url,
                    type: "get",
                    cache: false,
                    dataType: 'jsonp',
                    crossDomain : true,
                    asynchronous : false,
                    jsonpCallback: 'deadCode',
                    timeout : 1500,
                    complete : function(xhr, responseText, thrownError) {
                        if(xhr.status == "200") {
                           isAccessible = true;
                           console.log(url, isAccessible);
                        }
                        else {
                           isAccessible = false;
                           console.log(url, isAccessible);
                           return port++;
                        }
                    }
               });
            }
            window.setInterval(function(){
            //$(document).ready(function () {
                checkConnection();
            //});
            }, 1);