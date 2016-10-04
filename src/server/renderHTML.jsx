export default function renderHTML(content, initialState, shareInfo) {
    let sharedMeta;
    if (shareInfo) {
        sharedMeta = `<meta property="og:img" content="${shareInfo.img}"/>
                          <meta property="og:description" content="${shareInfo.shortdesc}"/>`;
    }
    return (
        `<html>
            <head>
                <meta charset="utf-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                ${shareInfo ? sharedMeta : "" }
                <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
                <link href="https://fonts.googleapis.com/css?family=Slabo+27px" rel="stylesheet" type="text/css"/>
                <link href="https://fonts.googleapis.com/css?family=Fira+Sans:400,300,500" rel="stylesheet" type="text/css"/>
                <title>Blaise's Hut</title>
                <!-- Bootstrap CSS - Latest compiled and minified CSS CDN -->
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
                <!-- FontAwesome CDN -->
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css">
                <!-- jsSocial Themes CDN -->
                <link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/jquery.jssocials/1.3.1/jssocials.css" />
                <link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/jquery.jssocials/1.3.1/jssocials-theme-minima.css" />
                <!-- Own Styles -->
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
                <script src="https://code.jquery.com/jquery-3.1.0.min.js" integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=" crossorigin="anonymous"></script> 
                <!-- jQueryUI -->
                <!--<script src='http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.5/jquery-ui.min.js'></script>-->
                <!-- jQuery Easing-->
                <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
                <!-- Include all compiled plugins (below), or include individual files as needed -->
                <!-- Latest compiled and minified JavaScript -->
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
                <!-- jsSocials -->
                <script type="text/javascript" src="https://cdn.jsdelivr.net/jquery.jssocials/1.3.1/jssocials.min.js"></script>
                <!-- Github Share bar-->
                <script async defer src="https://buttons.github.io/buttons.js"></script>
                <!-- Own Javascript -->
                <script src="/private/script.js"></script>
                <script src="/js/frontEnd.js"></script>
            </body>
            </html>`
    )
}
