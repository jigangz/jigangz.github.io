// Function to create a circle
function createCircle(svg, cx, cy, r, fill) {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', cx);
    circle.setAttribute('cy', cy);
    circle.setAttribute('r', r);
    circle.setAttribute('fill', fill);
    svg.appendChild(circle); // Append circle to SVG container
}

// Function to create a rectangle
function createRectangle(svg, x, y, width, height, fill) {
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', x);
    rect.setAttribute('y', y);
    rect.setAttribute('width', width);
    rect.setAttribute('height', height);
    rect.setAttribute('fill', fill);
    svg.appendChild(rect); // Append rectangle to SVG container
}

// Function to create a line
function createLine(svg, x1, y1, x2, y2, stroke, strokeWidth) {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.setAttribute('stroke', stroke);
    line.setAttribute('stroke-width', strokeWidth);
    svg.appendChild(line); // Append line to SVG container
}

// Function to create a polygon
function createPolygon(svg, points, fill, stroke, strokeWidth) {
    const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    polygon.setAttribute('points', points);
    polygon.setAttribute('fill', fill);
    polygon.setAttribute('stroke', stroke);
    polygon.setAttribute('stroke-width', strokeWidth);
    svg.appendChild(polygon); // Append polygon to SVG container
}

// Function to initialize the SVG drawings
function drawSVGShapes() {
    const svg = document.getElementById('creativeArt'); // Get the SVG container from HTML

    // Call functions to create various SVG shapes
    createCircle(svg, 200, 200, 100, 'purple');
    createRectangle(svg, 300, 150, 200, 100, 'yellow');
    createLine(svg, 100, 100, 400, 400, 'red', 5);
    createPolygon(svg, '400,10 450,190 470,60 590,90', 'lime', 'black', 2);
}
