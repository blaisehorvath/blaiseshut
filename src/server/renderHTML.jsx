export default function renderHTML(content, initialState) {
    return (
        `<html>
            <head>
                <meta charset="utf-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
                <script src="https://fb.me/react-15.2.1.min.js"></script>
                <script src="https://fb.me/react-dom-15.2.1.min.js"></script>
                <link href="https://fonts.googleapis.com/css?family=Slabo+27px" rel="stylesheet" type="text/css"/>
                <link href="https://fonts.googleapis.com/css?family=Fira+Sans:400,300,500" rel="stylesheet" type="text/css"/>
                <title>Blaise's Hut</title>
                <!-- Bootstrap -->
                <!-- Latest compiled and minified CSS -->
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
                <link rel="stylesheet" type="text/css" href="/css/styles.css"/>
                <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
                <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
                <!--[if lt IE 9]>
                <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
                <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
                <![endif]-->
            </head>
            <body>
            <div id="app">${content}</div>
            <script>
                window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
            </script>
            <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
            <!-- Include all compiled plugins (below), or include individual files as needed -->
            <!-- Latest compiled and minified JavaScript -->
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
            <script src="private/script.js"></script>
            </body>
            </html>`
    )
}
/*
 <div id="app"> ${content} </div>
 <script src="js/script.js"></script>
 */