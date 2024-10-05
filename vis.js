// Visualization 1: Global Sales by Genre and Platform
async function renderChart1() {
  const data = await d3.csv("./data/videogames_wide.csv");

  const vlSpec = vl
    .markBar()
    .data(data)
    .encode(
      vl.x().fieldN("Genre"),
      vl.y().fieldQ("Global_Sales").aggregate("sum"),
      vl.color().fieldN("Platform")
    )
    .width("container")
    .height(400)
    .toSpec();

  await vegaEmbed("#chart1", vlSpec);
}

// Visualization 2: Sales Over Time by Platform and Genre (Combined Line Chart)
async function renderChart2() {
  const data = await d3.csv("./data/videogames_long.csv");

  const vlSpec = vl
    .markLine()
    .data(data)
    .encode(
      vl.x().fieldT("year").title("Year"), // Time on the X-axis
      vl.y().fieldQ("sales_amount").title("Sales Amount"), // Sales on the Y-axis
      vl.color().fieldN("platform").title("Platform"), // Color differentiates platforms
      vl.strokeDash().fieldN("genre").title("Genre") // Line styles differentiate genres
    )
    .width(800)
    .height(400)
    .toSpec();

  await vegaEmbed("#chart2", vlSpec);
}


// Visualization 3: Regional Sales vs. Platform
async function renderChart3() {
  const data = await d3.csv("./data/videogames_wide.csv");

  const chartNA = vl
    .markBar()
    .data(data)
    .encode(
      vl.x().fieldN("Platform"),
      vl.y().fieldQ("NA_Sales").title("Sales"),
      vl.color().fieldN("Platform")
    );

  const chartEU = vl
    .markBar()
    .data(data)
    .encode(
      vl.x().fieldN("Platform"),
      vl.y().fieldQ("EU_Sales")
    );

  const chartJP = vl
    .markBar()
    .data(data)
    .encode(
      vl.x().fieldN("Platform"),
      vl.y().fieldQ("JP_Sales")
    );

  const chartOther = vl
    .markBar()
    .data(data)
    .encode(
      vl.x().fieldN("Platform"),
      vl.y().fieldQ("Other_Sales")
    );

  const vlSpec = vl
    .layer(chartNA, chartEU, chartJP, chartOther)
    .width(400)
    .height(400)
    .toSpec();

  await vegaEmbed("#chart3", vlSpec);
}




// Visualization 4: Japan Sales Trends by Platform and Genre
async function renderChart4() {
  const data = await d3.csv("./data/videogames_long.csv");

  const vlSpec = vl
    .markLine()
    .data(data)
    .transform(vl.filter("datum.sales_region == 'jp_sales'"))  
    .encode(
      vl.x().fieldT("year"),
      vl.y().fieldQ("sales_amount"),
      vl.color().fieldN("platform"),
      vl.strokeDash().fieldN("genre")
    )
    .width(400)
    .height(400)
    .toSpec();

  await vegaEmbed("#chart4", vlSpec);
}


// Call the render functions
renderChart1();
renderChart2();
renderChart3();
renderChart4();
