// Visualization 1: Global Sales by Genre and Platform
var spec1 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "url": "data/videogames_wide.csv",  
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
  "url": "data/videogames_long.csv",
  "format": {
    "type": "csv"
  }
},
"mark": "bar",
"encoding": {
  "x": {
    "field": "year",
    "type": "temporal",
    "axis": {"title": "Year"}
  },
  "y": {
    "field": "sales_amount",
    "type": "quantitative",
    "axis": {"title": "Global Sales (in millions)"}
  },
  "color": {
    "field": "platform",
    "type": "nominal"
  },
  "column": {
    "field": "genre",
    "type": "nominal",
    "spacing": 10,
    "header": {"title": "Genre", "labelAngle": 0}
  }
}
};
vegaEmbed('#chart2', spec2);

// Visualization 3: Regional Sales vs. Platform
var spec3 = {
"$schema": "https://vega.github.io/schema/vega-lite/v5.json",
"data": {
  "url": "data/videogames_wide.csv",
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
  "url": "data/videogames_long.csv",
  "format": {
    "type": "csv"
  }
},
"transform": [
  {
    "filter": "datum.sales_region == 'JP_Sales'"
  }
],
"mark": "line",
"encoding": {
  "x": {
    "field": "year",
    "type": "temporal",
    "axis": {"title": "Year"}
  },
  "y": {
    "field": "sales_amount",
    "type": "quantitative",
    "axis": {"title": "Sales in Japan (in millions)"}
  },
  "color": {
    "field": "platform",
    "type": "nominal",
    "legend": {"title": "Platform"}
  },
  "strokeDash": {
    "field": "genre",
    "type": "nominal"
  }
}
};
vegaEmbed('#chart4', spec4);
