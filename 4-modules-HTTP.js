const http = require('http');

/*
       req: is the incoming request
       res: is what we sending back
       req & res are giant objects, we can read more docs
 */
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to our homepage');
        return;
    }

    if (req.url === '/about') {
        res.end('this is about page');
        return;
    }

    res.end(`
    	     <h1>Oops this does not exist !!</h1>
    	     <p>We cant seem to find the page your are looking for</p>
    	    <a href="/"> back home </a>
    `);
});

// what port our server be listening to
server.listen(5000);

// now open localhost://5000/
// open localhost://5000/about
