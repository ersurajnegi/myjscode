/*
    1. Compression for the resources -> gzip etc.

    2. Handling Images:
        -> use new gen images with genp extension almost 25-30% less size wrt jpg
        -> Resize during Build process
        -> Create multiple sizes and use scrset with picture
        -> use CDN for images

        <picture>
            <source media="(min-width: 650px)" srcset="img_food.jpg">
            <source media="(min-width: 465px)" srcset="img_car.jpg">
            <img src="img_girl.jpg">
        </picture>

    3. Render Blocking -> any files which is inserted in html, browser need to do below steps:
            ->> download, parse, execute--- till then rendering will be blocked.
        -> ship only the code which is needed to load the hompages. (check COVERAGE tab in chrome for more info).
        -> Scripts which are not needed for homepage loading , move to different files and load them asynchronously.

    4. minimize the code -> js, css etc.

    5. Preload critical code.

        <head>
            <link rel=“preload” as=“script” href=“mycode.js”>
        </head>

        In this case, your browser will fetch mycode.js much faster than what would have done otherwise, and now your page will be interactive earlier, feeling much faster.

    6. Lazy load large, non-critical JavaScript files (or use async or defer)

        If you don’t need them right away, don’t block rendering waiting for those huge files.

        Instead, look into “dynamic imports” to download those files as late as you can:

        import(‘hugelibrary.mything’)
            .then(module => …)

    7. Target different browsers with specific code.

        Check Babel 🔨. You can serve modern code to modern browsers and avoid sending everything everywhere.

        No more serving all of that legacy code to work on Internet Explorer to newer versions of Edge!

    8.
*/


