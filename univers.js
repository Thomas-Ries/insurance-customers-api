const univers = [
    {
        solarSystem: {
            star: {
                id: 1,
                name: "Sun",
                AverageDiameter: "1 392 684 km",
                radius: "696 342 km",
                tempSurface: "5 772 K",
                tempCenter: "15,1 MK",
                tempCorona: "1 000 000 K"
            },
            planets: [
                {
                    id: 1,
                    name: "Mercury",
                    positionFromTheSun: 1,
                    type: "telluric",
                    radius: "2 439 Km",
                    tempMax: "427 celsius degrees",
                    tempMin: "-183 celsius degree",
                    picture: "https://fr.wikipedia.org/wiki/Mercure_(plan%C3%A8te)#/media/Fichier:Mercury_in_color_-_Prockter07_centered.jpg",
                    pictureTitle: "Mercury in colors",
                    pictureCopyright: "Messenger",
                    pictureDate: 2008,
                    numberOfMoons: 0,
                    created: new Date(),
                },
                {
                    id: 2,
                    name: "Venus",
                    positionFromTheSun: 2,
                    type: "telluric",
                    radius: "6 051 Km",
                    tempMax: "490 celsius degrees",
                    tempMin: "446 celsius degrees",
                    picture: "https://fr.wikipedia.org/wiki/V%C3%A9nus_(plan%C3%A8te)#/media/Fichier:Venus-real_color.jpg",
                    pictureTitle: "Venus real colors, Mariner 10",
                    pictureCopyright: "Mariner 10",
                    pictureDate: 1974,
                    numberOfMoons: 0,
                    created: new Date(),
                },
                {
                    id: 3,
                    name: "Earth",
                    positionFromTheSun: 3,
                    type: "telluric",
                    radius: "6 378 Km",
                    tempMax: "56,7 celsius degrees",
                    tempMin: "-93,2 celsius degrees",
                    picture: "https://fr.wikipedia.org/wiki/Terre#/media/Fichier:The_Blue_Marble_(remastered).jpg",
                    pictureTitle: "The Blue Marble",
                    pictureCopyright: "Apollo 17",
                    pictureDate: 1972,
                    numberOfMoons: 1,
                    moons: [
                        {
                            id: 1,
                            name: ["Earth 1", "Moon"],
                            radius: "1 737 Km",
                            tempMax: "123 celsius degrees",
                            tempMin: "-233 celsius degree"
                        }
                    ],
                    created: new Date(),
                },
                {
                    id: 4,
                    name: "Mars",
                    positionFromTheSun: 4,
                    type: "telluric",
                    radius: "3 396 Km",
                    tempMax: "293 celsius degrees",
                    tempMin: "-143 celsius degrees",
                    picture: "https://fr.wikipedia.org/wiki/Mars_(plan%C3%A8te)#/media/Fichier:Mars_Valles_Marineris_EDIT.jpg",
                    pictureInfo: "Valle Marineris",
                    pictureCopyright: "Viking",
                    pictureDate: 1980,
                    numberOfMoons: 2,
                    moons: [
                        {
                            id: 1,
                            name: ["Mars 1", "Phobos"],
                            radius: "no hydrostatic balance",
                            tempSurface: "36-38 K",
                            discoverer: "Asaph Hall",
                            discoveryDate: ["18/08/1877", "18th August 1877"],
                            picture: "https://fr.wikipedia.org/wiki/Phobos_(lune)#/media/Fichier:221831main_PIA10368.png",
                            pictureTitle: "Phobos",
                            pictureCopyright: "Mars Reconnaissance Orbiter",
                            pictureDate: 2008,
                        },
                        {
                            id: 2,
                            name: ["Mars 2", "Déimos"],
                            radius: "no hydrostatic balance",
                            tempSurface: "233 K",
                            discoverer: "Asaph Hall",
                            discoveryDate: ["12/08/1877", "12th August 1877"],
                            picture: "https://fr.wikipedia.org/wiki/D%C3%A9imos_(lune)#/media/Fichier:Deimos-MRO.jpg",
                            pictureTitle: "Déimos",
                            pictureCopyright: "Mars Reconnaissance Orbiter",
                            pictureDate: 2009,
                        }
                    ],
                    created: new Date(),
                },
                {
                    id: 5,
                    name: "Jupiter",
                    positionFromTheSun: 5,
                    type: "gas giant",
                    radius: "71 392 Km",
                    tempMax: "-108 celsius degrees",
                    tempMin: "-161 celsius degrees",
                    picture: "https://fr.wikipedia.org/wiki/Jupiter_(plan%C3%A8te)#/media/Fichier:Junopiter.jpg",
                    pictureTitle: "Jupiter's winds",
                    pictureCopyright: "Juno",
                    pictureDate: 2020,
                    created: new Date(),
                },
                {
                    id: 6,
                    name: "Saturne",
                    positionFromTheSun: 6,
                    type: "gas giant",
                    radius: "60 268 Km",
                    tempMax: "-139 celsius degrees",
                    tempMin: "-189 celsius degrees",
                    picture: "https://fr.wikipedia.org/wiki/Saturne_(plan%C3%A8te)#/media/Fichier:Saturn_during_Equinox.jpg",
                    pictureTitle: "Saturne during equinox",
                    pictureCopyright: "Cassini",
                    pictureDate: 2008,
                    created: new Date(),
                },
                {
                    id: 7,
                    name: "Uranus",
                    positionFromTheSun: 7,
                    type: "ice giant",
                    radius: "25 559 Km",
                    tempMax: "-197 celsius degrees",
                    tempMin: "-220 celsius degrees",
                    picture: "https://fr.wikipedia.org/wiki/Uranus_(plan%C3%A8te)#/media/Fichier:Uranus2.jpg",
                    pictureTitle: "Uranus by Voyager 2",
                    pictureCopyright: "Voyager 2",
                    pictureDate: 1986,
                    created: new Date(),
                },
                {
                    id: 8,
                    name: "Neptune",
                    positionFromTheSunFromTheSun: 8,
                    type: "ice giant",
                    radius: "24 764 Km",
                    tempMax: "-201 celsius degrees",
                    tempMin: "-218 celsius degrees",
                    picture: "https://fr.wikipedia.org/wiki/Neptune_(plan%C3%A8te)#/media/Fichier:Neptune.jpg",
                    pictureTitle: "Neptune by Voyager 2",
                    pictureCopyright: "Voyager 2",
                    pictureDate: 1989,
                    knownRings: 5,
                    numberOfMoons: 14,
                    moons: [
                        {
                            id: 1,
                            name: ["Triton"],
                            radius: "2 706 Km",
                            tempSurface: "36-38 K",
                            discoverer: "William Lassell",
                            discoveryDate: ["10/10/1846", "10th October 1846"],
                            picture: "https://fr.wikipedia.org/wiki/Triton_(lune)#/media/Fichier:Triton_-_August_25_1989_(17608829504).jpg",
                            pictureTitle: "Triton by Voyager 2",
                            pictureCopyright: "Voyager 2",
                            pictureDate: 1989,
                        }
                    ],
                    created: new Date(),
                },
            ],
        },
        exoplanets: {

        },
        nebulaes: {

        },
        supernovae: {

        },
        galaxies: {

        }
    }

]

module.exports = univers;