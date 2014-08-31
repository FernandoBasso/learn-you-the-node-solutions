
------------------------------------------------------------------------------------------

In Node.js, generally, a callback function takes an error as the first argument, and
the data returned as the last argument. That is not the case of http.get(), though.

When using http.get(), the callback function DOES NOT take two (or more) arguments.
It takes only one: the response.

    http.get(url, function(response)      // CORRECT
    http.get(url, function(err, response) // WRONG

That is different from stuff like

    fs.readdir(dir, function(err, data)

where the first argument to the callback is an error and the second argument
is the result of reading the directory.

So, keep in mind that http.get()'s callback function takes only one argument, unlike
most other callback functions in node.
