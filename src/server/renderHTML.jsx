export default function renderHTML (content, initialState)  {
        return (
            `<html>
            <head>
                <title>Blaise's hut</title>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet" />
                <link href="css/own.css" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Slabo+27px" rel="stylesheet" type="text/css" />
                <link href="https://fonts.googleapis.com/css?family=Fira+Sans:400,300,500" rel="stylesheet" type="text/css" />
            </head>
            <body>
            <div id="app"> ${content} </div>
            <script>
                window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
            </script>
            <script src="https://code.jquery.com/jquery-2.2.1.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
            <script src="js/script.js"></script>
            </body>
            </html>`
        )
}
/*
 <div id="app"> ${content} </div>
 <script src="js/script.js"></script>
 */