$(function () {
    $(".mapcontainer").mapael({
        map: {
            name: "world_countries"
            // Enable zoom on the map
            , zoom: {
                enabled: false
            }
            // Set default plots and areas style
            , defaultPlot: {
                attrs: {
                    fill: "#004a9b"
                    , opacity: 0.6
                }
                , attrsHover: {
                    opacity: 1
                }
                , text: {
                    attrs: {
                        fill: "#505444"
                    }
                    , attrsHover: {
                        fill: "#000"
                    }
                }
            }
            , defaultArea: {
                attrs: {
                    fill: "#f4f4e8"
                    , stroke: "#ced8d0"
                }
                , attrsHover: {
                    fill: "#ccc"
                }
                , text: {
                    attrs: {
                        fill: "#505444"
                    }
                    , attrsHover: {
                        fill: "#000"
                    }
                }
            }
        },

        // Customize some areas of the map
        areas: {
            "department-56": {
                text: {content: "Morbihan", attrs: {"font-size": 10}},
                tooltip: {content: "Morbihan (56)"},
                href: "http://fr.wikipedia.org/wiki/Morbihan"
            },
            "department-21": {
                attrs: {
                    fill: "#488402"
                }
                , attrsHover: {
                    fill: "#a4e100"
                },
                href: "http://fr.wikipedia.org/wiki/C%C3%B4te-d%27Or",
                target: "_blank"
            }
        },

        // Add some plots on the map
        plots: {
            // Image plot
            'paris': {
                type: "image",
                url: "http://www.neveldo.fr/mapael/assets/img/marker.png",
                width: 12,
                height: 40,
                latitude: 48.86,
                longitude: 2.3444,
                attrs: {
                    opacity: 1
                },
                attrsHover: {
                    transform: "s1.5"
                },
                href: "http://fr.wikipedia.org/wiki/Paris",
                target: "_blank"
            },

            'denim_cafe': {
                type: "image",
                url: "http://www.neveldo.fr/mapael/assets/img/marker.png",
                width: 12,
                height: 40,
                latitude: 36.6,
                longitude: 138.3,
                tooltip: {content: "<span style=\"font-weight:bold;\">City :</span> ゲイシャ"},
                attrs: {
                    opacity: 1
                },
                attrsHover: {
                    transform: "s1.5"
                },
                href: "http://vancoffee.tokyo",
                target: "_blank"
            },
            'cafe': {
                type: "image",
                url: "http://www.neveldo.fr/mapael/assets/img/marker.png",
                width: 12,
                height: 40,
                latitude: 16.6,
                longitude: 108.3,
                tooltip: {content: "<span style=\"font-weight:bold;\">City :</span> ゲイシャ"},
                attrs: {
                    opacity: 1
                },
                attrsHover: {
                    transform: "s1.5"
                },
                href: "http://vancoffee.tokyo",
                target: "_blank"
            },
            'cafe2': {
                type: "image",
                url: "http://www.neveldo.fr/mapael/assets/img/marker.png",
                width: 12,
                height: 40,
                latitude: 4.6,
                longitude: 38.3,
                tooltip: {content: "<span style=\"font-weight:bold;\">City :</span> ゲイシャ"},
                attrs: {
                    opacity: 1
                },
                attrsHover: {
                    transform: "s1.5"
                },
                href: "http://vancoffee.tokyo",
                target: "_blank"
            },

            'sample': {
                type: "image",
                url: "http://www.neveldo.fr/mapael/assets/img/marker.png",
                width: 12,
                height: 40,
                latitude: 45.758888888889,
                longitude: 4.8413888888889,
                tooltip: {content: "<span style=\"font-weight:bold;\">City :</span>エチオピア産"},
                attrs: {
                    opacity: 1
                },
                attrsHover: {
                    transform: "s1.5"
                },
                href: "http://vancoffee.tokyo",
                target: "_blank"
            },

            'rennes': {
                type: "square",
                size: 20,
                latitude: 48.114166666667,
                longitude: -1.6808333333333,
                tooltip: {content: "<span style=\"font-weight:bold;\">City :</span> Rennes"},
                text: {content: "Rennes"},
                href: "http://fr.wikipedia.org/wiki/Rennes"
            },
            // Plot positioned by x and y instead of latitude, longitude
            'myplot': {
                x: 300,
                y: 200,
                text: {
                    content: "My plot"
                    , position: "bottom"
                    , attrs: {"font-size": 10, fill: "#004a9b", opacity: 0.6}
                    , attrsHover: {fill: "#004a9b", opacity: 1}
                },
            }
        }
    });
});
