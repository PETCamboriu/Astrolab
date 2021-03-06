import * as React from "react";
import sol1 from "../assets/images/Sol_1.jpg";
import sol2 from "../assets/images/Sol_2.jpg";
import sol3 from "../assets/images/Sol_3.jpg";
import sol4 from "../assets/images/Sol_4.jpg";
import jupiter1 from "../assets/images/Jupiter_1.jpg";
import jupiter2 from "../assets/images/Jupiter_2.jpg";
import jupiter3 from "../assets/images/Jupiter_3.jpg";
import jupiter4 from "../assets/images/Jupiter_4.jpg";
import marte1 from "../assets/images/Marte_1.jpg";
import marte2 from "../assets/images/Marte_2.jpg";
import marte3 from "../assets/images/Marte_3.jpeg";
import marte4 from "../assets/images/Marte_4.jpg";
import terra1 from "../assets/images/Terra_1.jpg";
import terra2 from "../assets/images/Terra_2.jpg";
import terra3 from "../assets/images/Terra_3.jpg";
import terra4 from "../assets/images/Terra_4.jpg";
import urano1 from "../assets/images/Urano_1.jpg";
import urano2 from "../assets/images/Urano_2.jpg";
import urano3 from "../assets/images/Urano_3.jpg";
import urano4 from "../assets/images/Urano_4.jpg";
import venus1 from "../assets/images/Venus_1.jpg";
import venus2 from "../assets/images/Venus_2.jpg";
import venus3 from "../assets/images/Venus_3.jpg";
import venus4 from "../assets/images/Venus_4.jpg";
import saturno1 from "../assets/images/Saturno_1.jpg";
import saturno2 from "../assets/images/Saturno_2.jpg";
import saturno3 from "../assets/images/Saturno_3.jpeg";
import saturno4 from "../assets/images/Saturno_4.jpg";
import netuno1 from "../assets/images/Netuno_1.jpg";
import netuno2 from "../assets/images/Netuno_2.jpg";
import netuno3 from "../assets/images/Netuno_3.jpg";
import netuno4 from "../assets/images/Netuno_4.jpg";
import mercurio1 from "../assets/images/Mercurio_1.jpg";
import mercurio2 from "../assets/images/Mercurio_2.jpg";
import mercurio3 from "../assets/images/Mercurio_3.jpg";
import mercurio4 from "../assets/images/Mercurio_4.jpg";

import { FontAwesome, Ionicons } from "@expo/vector-icons";

export const dataSolarSystem = [
	{
		img: "https://uploaddeimagens.com.br/images/003/144/592/full/Sol.png?1616441155",
		name: "Sol",
		nameId: "Sol",
		force: 9.4
	},

	{
		img: "https://uploaddeimagens.com.br/images/003/144/600/full/Merc%C3%BArio.png?1616441262",
		name: "Merc??rio",
		nameId: "Mercurio",
		force: 3.6
	},

	{
		img: "https://uploaddeimagens.com.br/images/003/144/604/full/Venus.png?1616441335",
		name: "V??nus",
		nameId: "Venus",
		force: 4.3
	},

	{
		img: "https://uploaddeimagens.com.br/images/003/145/263/full/Terra.png?1616462109",
		name: "Terra",
		nameId: "Terra",
		force: 5.2
	},

	{
		img: "https://uploaddeimagens.com.br/images/003/145/267/full/Marte.png?1616462154",
		name: "Marte",
		nameId: "Marte",
		force: 6.8
	},

	{
		img: "https://uploaddeimagens.com.br/images/003/145/269/full/J%C3%BApiter.png?1616462187",
		name: "J??piter",
		nameId: "Jupiter",
		force: 7.9
	},

	{
		img: "https://uploaddeimagens.com.br/images/003/145/273/full/Saturno.png?1616462458",
		name: "Saturno",
		nameId: "Saturno",
		force: 8.1
	},

	{
		img: "https://uploaddeimagens.com.br/images/003/145/275/full/Urano.png?1616462509",
		name: "Urano",
		nameId: "Urano",
		force: 9.9
	},

	{
		img: "https://uploaddeimagens.com.br/images/003/145/276/full/Netuno.png?1616462546",
		name: "Netuno",
		nameId: "Netuno",
		force: 10.2
	},
];

export const icons = {
	Astrolab: (color, size) => (
		<FontAwesome name="home" size={size} color={color} />
	),
	"Sistema Solar": (color, size) => (
		<Ionicons name="planet" size={size} color={color} />
	),
	Videos: (color, size) => (
		<FontAwesome name="video-camera" size={size} color={color} />
	),
	"Sobre n??s": (color, size) => (
		<FontAwesome name="info" size={size} color={color} />
	),
	Close: (color, size) => (
		<FontAwesome name="close" size={size} color={color} />
	),
};

export const pagesData = [
	// Sol data
	{
		screenname: "Sol",
		description: [
			"Composi????o: Hidrog??nio (aproximadamente 90%) e H??lio (9%).",
			"Tamanho: 109 vezes maior que a Terra.",
			"Localiza????o: Via L??ctea/ estrela central/ Dist??ncia da Terra: 149.600.000 km.",
			"Temperatura: 5504,85 ??C.",
		],
		images: [
			{
				img: sol1,
				label: "Sol 1",
			},

			{
				img: sol2,
				label: "Sol 2",
			},

			{
				img: sol3,
				label: "Sol 3",
			},

			{
				img: sol4,
				label: "Sol 4",
			},
		],
	},



	// Jupiter data
	{
		screenname: "Jupiter",
		description: [
			"Composi????o: por gases, como hidrog??nio, h??lio e metano.",
			"Tamanho: o maior do Sistema Solar, 11 vezes maior que a terra.",
			"Localiza????o: 778.330.000 km do Sol.",
			"Temperatura: -100??C.",
			"Presen??a ou n??o de Sat??lites: Possui seis sat??lites naturais.",
		],
		images: [
			{
				img: jupiter1,
				label: "J??piter 1",
			},

			{
				img: jupiter2,
				label: "J??piter 2",
			},

			{
				img: jupiter3,
				label: "J??piter 3",
			},

			{
				img: jupiter4,
				label: "J??piter 4",
			},
		],
		moons: [{
			img: "https://uploaddeimagens.com.br/images/003/173/344/full/Europa.png?1617119970",
			label: "Europa",
		},
		{
			img: "https://uploaddeimagens.com.br/images/003/173/366/full/Calisto.png?1617120134",
			label: "Calisto",
		}],
	},
	// Jupiter moons
	// Europa
	{
		screenname: "Europa",
		description: [],
		images: [
			{
				img: "https://uploaddeimagens.com.br/images/003/173/344/full/Europa.png?1617119970",
				label: "Europa",
			},
		],
	},
	// Calisto
	{
		screenname: "Calisto",
		description: [],
		images: [
			{
				img: "https://uploaddeimagens.com.br/images/003/173/366/full/Calisto.png?1617120134",
				label: "Calisto",
			}
		]
	},



	// Marte data
	{
		screenname: "Marte",
		description: [
			"Composi????o: silicatos e basaltos e a atmosfera composta por g??s carb??nico, nitrog??nio, mon??xido de carbono e vest??gios de oxig??nio.",
			"Tamanho: maior que a metade do nosso planeta.",
			"Localiza????o: 227.940.000 km de dist??ncia do Sol.",
			"Temperatura: entre -76??C e -10??C.",
			"Presen??a ou n??o de Sat??lites: Possui dois sat??lites naturais.",
		],
		images: [
			{
				img: marte1,
				label: "Marte 1",
			},

			{
				img: marte2,
				label: "Marte 2",
			},

			{
				img: marte3,
				label: "Marte 3",
			},

			{
				img: marte4,
				label: "Marte 4",
			},
		],
		moons: [],
	},
	// Marte moons



	// Mercurio data
	{
		screenname: "Mercurio",
		description: [
			"Composi????o: Basaltos e silicatos e a atmosfera por hidrog??nio e h??lio.",
			"Tamanho: Menor planeta.",
			"Localiza????o: 57.910.000 km de dist??ncia do sol.",
			"Temperatura: 550 ??C.",
			"Presen??a ou n??o de Sat??lites: N??o possui sat??lites.",
		],
		images: [
			{
				img: mercurio1,
				label: "Merc??rio 1",
			},

			{
				img: mercurio2,
				label: "Merc??rio 2",
			},

			{
				img: mercurio3,
				label: "Merc??rio 3",
			},

			{
				img: mercurio4,
				label: "Merc??rio 4",
			},
		],
		moons: [],
	},
	// Mercurio moons



	// Netuno data
	{
		screenname: "Netuno",
		description: [
			"Composi????o: por gases, como hidrog??nio, h??lio e metano.",
			"Tamanho: 4 vezes maior que Terra.",
			"Localiza????o: 4.504.300.000 km do Sol.",
			"Temperatura: -218??C.",
			"Presen??a ou n??o de Sat??lites: Possui cerca de 13 sat??lites naturais.",
		],
		images: [
			{
				img: netuno1,
				label: "Netuno 1",
			},

			{
				img: netuno2,
				label: "Netuno 2",
			},

			{
				img: netuno3,
				label: "Netuno 3",
			},

			{
				img: netuno4,
				label: "Netuno 4",
			},
		],
		moons: [{

			img: "https://uploaddeimagens.com.br/images/003/183/526/full/Nereida.png?1617715473",
			label: "Nereida"
		}, {
			img: "https://uploaddeimagens.com.br/images/003/183/531/full/Larissa.png?1617715520",
			label: "Larissa"
		}],
	},
	// Netuno moons
	// Nereida
	{
		screenname: "Nereida",
		description: [],
		images: [{

			img: "https://uploaddeimagens.com.br/images/003/183/526/full/Nereida.png?1617715473",
			label: "Nereida"
		}
		]
	},
	// Larissa
	{
		screenname: "Larissa",
		description: [],
		images: [{
			img: "https://uploaddeimagens.com.br/images/003/183/531/full/Larissa.png?1617715520",
			label: "Larissa"
		}]
	},



	// Saturno data
	{
		screenname: "Saturno",
		description: [
			"Composi????o: por gases como hidrog??nio, h??lio e metano.",
			"Tamanho: Segundo maior planeta um pouco menor do que J??piter.",
			"Localiza????o: 1.429.400.000 km do Sol.",
			"Temperatura: -140??C.",
			"Presen??a ou n??o de Sat??lites: Possui 18 sat??lites naturais.",
		],
		images: [
			{
				img: saturno1,
				label: "Saturno 1",
			},

			{
				img: saturno2,
				label: "Saturno 2",
			},

			{
				img: saturno3,
				label: "Saturno 3",
			},

			{
				img: saturno4,
				label: "Saturno 4",
			},
		],
		moons: [{
			img: "https://uploaddeimagens.com.br/images/003/175/573/full/Tit%C3%A3.png?1617141538",
			label: "Tit??",
		}, {
			img: "https://uploaddeimagens.com.br/images/003/175/575/full/Enc%C3%A9lado.png?1617141580",
			label: "Enc??lado",
		}]
	},
	// Saturno moons
	// Tit??
	{
		screenname: "Tit??",
		description: [],
		images: [{
			img: "https://uploaddeimagens.com.br/images/003/175/573/full/Tit%C3%A3.png?1617141538",
			label: "Tit??",
		}]

	},
	// Enc??lado
	{
		screenname: "Enc??lado",
		description: [],
		images: [{
			img: "https://uploaddeimagens.com.br/images/003/175/575/full/Enc%C3%A9lado.png?1617141580",
			label: "Enc??lado",

		}]
	},



	// Terra data
	{
		screenname: "Terra",
		description: [
			"Composi????o: silicatos e basaltos e a atmosfera composta por nitrog??nio, oxig??nio, vapor d'??gua e outros gases. ",
			"Tamanho: 6378 km.",
			"Localiza????o: 149.600.000 km do Sol.",
			"Temperatura: 14??C.",
			"Presen??a ou n??o de Sat??lites: Possui um a Lua.",
		],
		images: [
			{
				img: terra1,
				label: "Terra 1",
			},

			{
				img: terra2,
				label: "Terra 2",
			},

			{
				img: terra3,
				label: "Terra 3",
			},

			{
				img: terra4,
				label: "Terra 4",
			},
		],
		moons: [{
			img: "https://uploaddeimagens.com.br/images/003/151/937/full/Lua.png?1616732793",
			label: "Lua",
		}],
	},
	// Terra moons
	// Moon
	{
		screenname: "Lua",
		description: [],
		images: [{
			img: "https://uploaddeimagens.com.br/images/003/151/937/full/Lua.png?1616732793",
			label: "Lua",
		}]
	},



	// Urano data
	{
		screenname: "Urano",
		description: [
			"Composi????o: por gases como hidrog??nio, h??lio e metano. ",
			"Tamanho: 4 vezes maior que Terra.",
			"Localiza????o: 2.880.990.000 km do Sol.",
			"Temperatura: -200??C.",
			"Presen??a ou n??o de Sat??lites: 27 sat??lites naturais.",
		],
		images: [
			{
				key: String(Math.random()),
				img: urano1,
				label: "Urano 1",
			},

			{
				key: String(Math.random()),
				img: urano2,
				label: "Urano 2",
			},

			{
				key: String(Math.random()),
				img: urano3,
				label: "Urano 3",
			},

			{
				key: String(Math.random()),
				img: urano4,
				label: "Urano 4",
			},
		]
	},
	// Urano moons
	// Umbriel
	{
		screenname: "Umbriel",
		description: [],
		images: [
			{
				img: "https://uploaddeimagens.com.br/images/003/175/643/full/Umbriel.png?1617145876",
				name: "Umbriel",
				nameId: "Umbriel",
			}
		]
	},
	// Tit??nia
	{
		screenname: "Tit??nia",
		description: [],
		image: [
			{
				img: "https://uploaddeimagens.com.br/images/003/175/646/full/Tit%C3%A2nia.png?1617145985",
				name: "Tit??nia",
				nameId: "Titania",
			}
		]

	},



	// Venus data
	{
		screenname: "Venus",
		description: [
			"Composi????o: silicatos e basaltos e sua atmosfera composta por nitrog??nio, g??s carb??nico e vapor d'??gua.",
			"Tamanho: Parecido com o da Terra.",
			"Localiza????o: 108.200.000 km de dist??ncia do Sol.",
			"Temperatura: 460 ??C.",
			"Presen??a ou n??o de Sat??lites: N??o possui sat??lites.",
		],
		images: [
			{
				img: venus1,
				label: "V??nus 1",
			},

			{
				img: venus2,
				label: "V??nus 2",
			},

			{
				img: venus3,
				label: "V??nus 3",
			},

			{
				img: venus4,
				label: "V??nus 4",
			},
		],
		moons: [],
	},
	// Venus moons
];

export const videosData = [
	{
		id: 0,
		url:
			'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
		poster:
			'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
	},
	{
		id: 1,
		url:
			'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
		poster:
			'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
	},
	{
		id: 2,
		url:
			'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
		poster:
			'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
	},
]
