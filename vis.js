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

// Visualization 2: Sales Over Time by Platform and Genre (Line Chart)
async function renderChart2() {
  const data = await d3.csv("./data/videogames_long.csv");

  const vlSpec = vl
    .markLine()
    .data(data)
    .encode(
      vl.x().fieldT("year"),
      vl.y().fieldQ("sales_amount"),
      vl.color().fieldN("platform"),
      vl.column().fieldN("genre").spacing(10)
    )
    .width("container")
    .height(400)
    .toSpec();

  await vegaEmbed("#chart2", vlSpec);
}

// Visualization 3: Regional Sales vs. Platform
async function renderChart3() {
  const data = await d3.csv("./data/videogames_wide.csv");

  const vlSpec = vl
    .markBar()
    .data(data)
    .transform(vl.fold(["NA_Sales", "EU_Sales", "JP_Sales", "Other_Sales"], "Region", "Sales"))
    .encode(
      vl.x().fieldN("Platform"),
      vl.y().fieldQ("Sales"),
      vl.color().fieldN("Region"),
      vl.column().fieldN("Region")
    )
    .width("container")
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
    .transform(vl.filter("datum.sales_region == 'JP_Sales'"))
    .encode(
      vl.x().fieldT("year"),
      vl.y().fieldQ("sales_amount"),
      vl.color().fieldN("platform"),
      vl.strokeDash().fieldN("genre")
    )
    .width("container")
    .height(400)
    .toSpec();

  await vegaEmbed("#chart4", vlSpec);
}

// Call the render functions
renderChart1();
renderChart2();
renderChart3();
renderChart4();
