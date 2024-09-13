/*
    When laying out a document, the browser's rendering engine represents each element as a rectangular box according to the standard CSS basic box model. CSS determines the size, position, and properties (color, background, border size, etc.) of these boxes.

    Every box is composed of four parts (or areas), defined by their respective edges:
        - the content edge,
        - padding edge,
        - border edge,
        - margin edge


    By Default, The size of the box itself is calculated like this:

        Rendered Width of Element	=  width + padding-left + padding-right + border-left + border-right
        Rendered Height of Element	=  height + padding-top + padding-bottom + border-top + border-bottom



    The box-sizing property can be used to adjust this behavior:

        - CONTENT-BOX :  gives you the DEFAULT CSS box-sizing behavior. If you set an element's WIDTH to 100 pixels, then the element's content box will be 100 pixels wide, and the width of any border or padding will be added to the final rendered width, making the element wider than 100px.

        e.g: For example, .box {width: 350px; border: 10px solid black;} renders a box that is 370px wide.



        - BORDER-BOX tells the browser to account for any border and padding in the values you specify for an element's width and height. 
        //If you set an element's width to 100 pixels, that 100 pixels will include any border or padding you added, and the content box will shrink to absorb that extra width. 
            This typically makes it much easier to size elements.

        e.g: For example, .box {width: 350px; border: 10px solid black;} renders a box that is 350px wide, with the area for content being 330px wide.



        div {
            width: 160px;
            height: 80px;
            padding: 20px;
            border: 8px solid red;
            margin: 10px;
            background: yellow;
        }

        .content-box {
            box-sizing: content-box;
        }

        Total width: 160px + (2 * 20px) + (2 * 8px) = 216px
        Total height: 80px + (2 * 20px) + (2 * 8px) = 136px
        Content box width: 160px
        Content box height: 80px


        div {
            width: 160px;
            height: 80px;
            padding: 20px;
            border: 8px solid red;
            margin: 10px;
            background: yellow;
        }
            
        .border-box {
            box-sizing: border-box;
        }
        
        Total width: 160px
        Total height: 80px
        Content box width: 160px - (2 * 20px) - (2 * 8px) = 104px
        Content box height: 80px - (2 * 20px) - (2 * 8px) = 24px
*/
