// Visualization 1: Global Sales by Genre and Platform
var spec1 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "data": {
      "url": "path_to_your_data/videogames_wide.csv",  // Replace with actual path
      "format": {
        "type": "csv"
      }
    },
    "mark": "bar",
    "encoding": {
      "x": {
        "field": "Genre",
        "type": "nominal",
        "axis": {"labelAngle": 0}
      },
      "y": {
        "field": "Global_Sales",
        "type": "quantitative"
      },
      "color": {
        "field": "Platform",
        "type": "nominal"
      }
    }
  };
  vegaEmbed('#chart1', spec1);
  
  // Visualization 2: Sales Over Time by Platform and Genre
  var spec2 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "data": {
      "url": "path_to_your_data/videogames_long.csv",  // Replace with actual path
      "format": {
        "type": "csv"
      }
    },
    "mark": "line",
    "encoding": {
      "x": {
        "field": "Year",
        "type": "temporal",
        "axis": {"title": "Year"}
      },
      "y": {
        "field": "Global_Sales",
        "type": "quantitative",
        "axis": {"title": "Global Sales (in millions)"}
      },
      "color": {
        "field": "Platform",
        "type": "nominal"
      },
      "strokeDash": {
        "field": "Genre",
        "type": "nominal"
      }
    }
  };
  vegaEmbed('#chart2', spec2);
  
  // Visualization 3: Regional Sales vs. Platform
  var spec3 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "data": {
      "url": "path_to_your_data/videogames_wide.csv",  // Replace with actual path
      "format": {
        "type": "csv"
      }
    },
    "transform": [
      {
        "fold": ["NA_Sales", "EU_Sales", "JP_Sales", "Other_Sales"],
        "as": ["Region", "Sales"]
      }
    ],
    "mark": "bar",
    "encoding": {
      "x": {
        "field": "Platform",
        "type": "nominal",
        "axis": {"title": "Platform"}
      },
      "y": {
        "field": "Sales",
        "type": "quantitative",
        "axis": {"title": "Sales (in millions)"}
      },
      "color": {
        "field": "Region",
        "type": "nominal",
        "scale": {"scheme": "category10"},
        "legend": {"title": "Region"}
      },
      "column": {
        "field": "Region",
        "type": "nominal",
        "spacing": 10,
        "header": {"title": "Region", "labelAngle": 0}
      }
    }
  };
  vegaEmbed('#chart3', spec3);
  
  // Visualization 4: Japan Sales Trends by Platform and Genre
  var spec4 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "data": {
      "url": "path_to_your_data/videogames_long.csv",  // Replace with actual path
      "format": {
        "type": "csv"
      }
    },
    "transform": [
      {
        "filter": "datum.Region == 'JP_Sales'"
      }
    ],
    "mark": "line",
    "encoding": {
      "x": {
        "field": "Year",
        "type": "temporal",
        "axis": {"title": "Year"}
      },
      "y": {
        "field": "Sales",
        "type": "quantitative",
        "axis": {"title": "Sales in Japan (in millions)"}
      },
      "color": {
        "field": "Platform",
        "type": "nominal",
        "legend": {"title": "Platform"}
      },
      "strokeDash": {
        "field": "Genre",
        "type": "nominal"
      }
    }
  };
  vegaEmbed('#chart4', spec4);
  