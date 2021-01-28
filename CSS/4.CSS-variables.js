/*
    CSS Variables
        -- The var() function is used to insert the value of a CSS variable.

        -- CSS variables have access to the DOM, which means that you can create variables with local or global scope, change the variables with JavaScript, and -- change the variables based on media queries.

        -- A good way to use CSS variables is when it comes to the colors of your design. Instead of copy and paste the same colors over and over again, you can -- place them in variables.


    e.g:

    :root {
        --blue: #1e90ff;
        --white: #ffffff;
    }

    body { background-color: var(--blue); } ==> using variable here to access color


*/