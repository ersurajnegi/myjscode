/*
    What is Specificity?
        - If there are two or more conflicting CSS rules that point to the same element, the browser follows some rules to determine which one is most specific and  therefore wins out.

        - Think of specificity as a score/rank that determines which style declarations are ultimately applied to an element.


    Order:
        - Inline styles(1,0,0,0 points) - An inline style is attached directly to the element to be styled. Example: <h1 style="color: #ffffff;">.

        - IDs(0,1,0,0 points) - An ID is a unique identifier for the page elements, such as #navbar.

        - Classes, attributes and pseudo-classes(0,0,1,0) - This category includes .classes, [attributes] and pseudo-classes such as :hover, :focus etc.

        - Elements and pseudo-elements(0,0,0,1) - This category includes element names and pseudo-elements, such as h1, div, :before and :after.

*/