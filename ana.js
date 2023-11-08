const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    var dummy = "1234567890123456789|1234567890123456789|1234567890123456789|1234567890123456789|1234567890123456789|1234567890123456789|1234567890123456789|1234567890123456789|1234567890123456789|1234567890123456789|1234567890123456789|1234567890123456789|1234567890123456789|1234567890123456789|1234567890123456789|1234567890123456789|1234567890123456789|1234567890123456789|1234567890123456789|1234567890123456789|1234567890123456789|1234567890123456789|";
    var body  ="<Hola amorcita,      Se que hemos tenido algunas piedritas   en el camino,       piedritas que se vencomo rocas, pero    si miras atras, soloeran ideas...       Recuerdas que una   idea puede destruir mundos?, creo que esmejor crearnos una  idea mas poderosa:  creamos en un mundo en que estemos la   una para la otra, enel amor y todo lo   demas hasta ese     ultimo suspiro que  tengamos.           Hagamosla realidad!!TE AMO.             >";
   //var body = "<Hola amorcita,      Hay>";
    var date_ob = new Date();
       
    var day = ("0" + date_ob.getDate()).slice(-2);
    var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    var year = date_ob.getFullYear();
    var hours = date_ob.getHours();
    hours -= 6;
    if(hours < 0) {
      hours += 24;
      day -= 1;
    }
    var date = year + "-" + month + "-" + day;
    var minutes = date_ob.getMinutes()+1;
    var seconds = date_ob.getSeconds();
    
    res.removeHeader('X-Powered-By');
    res.removeHeader('Connection');
    res.removeHeader('ETag');
    res.removeHeader('Date');
    res.removeHeader('Transfer-Encoding');
    res.setHeader('Keep-Alive', 'timeout=10');
    res.setHeader('DateTime', "["+date+" "+hours+":"+minutes+"]")
    res.end(body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
app.keepAliveTimeout = 5 * 1000;
app.headersTimeout = 5 * 1000;

