# Project Name

Location analysis for the online distribution of regional and seasonal agricultural products in the canton of Zurich

## Getting Started 🚀

### Prerequisites

You only need a working Python installation to run this project. You can download it from the official website [here](https://www.python.org/downloads/) or with homebrew:

```bash
brew install python
```

### Installation 🛠️

```bash
git clone https://github.com/eglisi1/harvest_hub/
```

## Project Overview 📚

This project aims to identify the ideal location for a distribution center for online sales of local and regional agricultural products in the Canton of Zurich. This analysis considers proximity to producers and potential consumer bases to minimize transportation distances and maximize product availability.

## Background and Motivation 📖

* Increasing awareness and demand for regional and seasonal products.
* Significant contribution of global food production and consumption to greenhouse gas emissions.
* Benefits of Short Food Supply Chains (SFSC) in reducing ecological footprint and enhancing local economies.

## Data and Methology 📊

### Data sources

* OpenStreetMap (OSM) for road network data.
* Swiss Federal Statistical Office (FSO) for population data.
* Scraped data from "Schweizer Bauern" for producer locations.

### Tools used

* Python for data processing and analysis.
* GeoJSON with Geopandas for geospatial data.
* OpenRoute Service for calculating isochrones and evaluating potential customer bases.

## Research Question & Hypotheses ❓

* Can an ideal location be identified in the Canton of Zurich that offers short distances to a large number of producers and a substantial customer base within a short driving distance?
* Hypothesis: Locations can be found that offer a broad range of products from producers within a 10-km radius and can serve at least 50,000 customers within a 5 to 15-minute drive.

## Contributing 🤝

We love contributions from the community! If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.
But I guess we'll receive a 6 in this project and never touch it again.

## Acknowledgments 🙏

Many thanks to our professor for the inspiration and guidance on this project.

## Contact 📮

For any inquiries, please reach out to Sascha <pfeifsas@students.zhaw.ch>, Nick <raschnic@students.zhaw.ch> or Simon <eglisi1@students.zhaw.ch>.
