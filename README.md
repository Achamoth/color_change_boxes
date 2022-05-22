# Color Change Boxes
A very simple demonstration of responsive web-page layout and reactive web design.

The grid of boxes adapts layout according to screen width, with one of two layouts being used based on a width cut-off of 600px.

Clicking on any box shuffles the colors of all boxes using a pre-defined list of colors.

I've controlled the layout entirely using CSS, using simple grid displays to accomplish the desired look.

The color shuffling is driven by some very simple state. I used emotion (a popular CSS-in-JS library for React) to set the color of each box (this seemed appropriate to me given the dynamic nature of the colors).
