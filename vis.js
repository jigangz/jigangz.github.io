// Get the SVG element with id "creativeArt"
const creativeArt = document.getElementById('creativeArt');

// Function to create a line in the SVG
function createLine(x1, y1, x2, y2, color, strokeWidth = 2) {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.setAttribute('stroke', color);
    line.setAttribute('stroke-width', strokeWidth);
    return line;
}

// Function to create a circle in the SVG
function createCircle(cx, cy, r, color) {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', cx);
    circle.setAttribute('cy', cy);
    circle.setAttribute('r', r);
    circle.setAttribute('fill', color);
    return circle;
}

// Function to create a rectangle in the SVG
function createRect(x, y, width, height, color) {
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', x);
    rect.setAttribute('y', y);
    rect.setAttribute('width', width);
    rect.setAttribute('height', height);
    rect.setAttribute('fill', color);
    return rect;
}

// Generate random lines, circles, and rectangles
for (let i = 0; i < 10; i++) {
    // Generate random coordinates and properties
    const x1 = Math.random() * 800;
    const y1 = Math.random() * 500;
    const x2 = Math.random() * 800;
    const y2 = Math.random() * 500;
    const color = `hsl(${Math.random() * 360}, 100%, 50%)`;

    // Create and append random lines
    const line = createLine(x1, y1, x2, y2, color);
    creativeArt.appendChild(line);

    // Create and append random circles
    const cx = Math.random() * 800;
    const cy = Math.random() * 500;
    const r = Math.random() * 50;
    const circle = createCircle(cx, cy, r, color);
    creativeArt.appendChild(circle);

    // Create and append random rectangles
    const rectX = Math.random() * 700;
    const rectY = Math.random() * 400;
    const rectWidth = Math.random() * 100;
    const rectHeight = Math.random() * 100;
    const rect = createRect(rectX, rectY, rectWidth, rectHeight, color);
    creativeArt.appendChild(rect);
}
