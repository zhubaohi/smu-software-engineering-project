import whiteDeer from '../images/white-deer.jpeg';
import chickadee from '../images/chickadee.jpeg';

import chickadeeAud from '../audio/chckadee.mp3';
import whiteDeerAud from '../audio/white-deer.mp3';


var loremIpsum = "Lorem ipsum odor amet, consectetuer adipiscing elit. Dis interdum diamfinibus elit quam class per cras? Massa luctus ultrices quam portaturpis proin. Tristique euismod nec ornare blandit posuere non.";

var picsum = "https://picsum.photos/400/300"
var picsum2 = "https://picsum.photos/500/400"
var picsum3 = "https://tse4.mm.bing.net/th?id=OIP.Wxav-wso1ceDo4OzrnCiowHaFS&pid=Api"
var picsum4 = "https://tse2.mm.bing.net/th?id=OIP.P17iIdxtgJywK622AA1tHgHaE7&pid=Api"
var picsum5 = "https://tse3.mm.bing.net/th?id=OIP.t-M-ns7NAfUAnqcK2ZsKuQHaFb&pid=Api"
var picsum6 = "https://tse4.mm.bing.net/th?id=OIP.Wxav-wso1ceDo4OzrnCiowHaFS&pid=Api"
var picsum7 = "https://tse2.mm.bing.net/th?id=OIP.P17iIdxtgJywK622AA1tHgHaE7&pid=Api"
var picsum8 = "https://tse2.mm.bing.net/th?id=OIP.tFqbsXPEpyCneU77bsuEvgHaE0&pid=Api"
var picsum9 = "https://tse4.mm.bing.net/th?id=OIP.qlIiqLAz7GQefKj_oqUaPAHaLH&pid=Api"


const faunaData = [
    {
        id: 1,
        url: whiteDeer,
        aud: whiteDeerAud,
        title: "The White-Tailed Deer",
        description: "The white-tailed deer (Odocoileus virginianus) is the primary deer species present in the Woodland Conservation Site. Although not native to Nova Scotia, they arrived in the province over a century ago and have since become well-established.  ",        
    },
    {
        id: 2,
        url: chickadee,
        aud: chickadeeAud,
        title: "The Black-capped Chickadee",
        description: 'The Black-capped Chickadee is a small, curious songbird with a black cap and bib that thrives in the Woodland Conservation Site’s mixed forests. These birds are a symbol of adaptability and resilience, often flitting among the branches in search of insects, seeds, and berries. Their cheerful “chick-a-dee-dee-dee” calls bring life to the forest canopy and contribute to the site’s tranquil charm.',        
    },
    {
        id: 3,
        url: picsum3,
        aud: "",
        title: "title",
        description: loremIpsum,        
    },
    {
        id: 4,
        url: picsum4,
        aud: "",
        title: "title",
        description: loremIpsum,        
    },
    {
        id: 5,
        url: picsum5,
        aud: "",
        title: "title",
        description: loremIpsum,        
    },
    {
        id: 6,
        url: picsum6,
        aud: "",
        title: "title",
        description: loremIpsum,        
    },
    {
        id: 7,
        url: picsum7,
        aud: "",
        title: "title",
        description: loremIpsum,        
    },
    {
        id: 8,
        url: picsum8,
        aud: "",
        title: "title",
        description: loremIpsum,        
    },
    {
        id: 9,
        url: picsum9,
        aud: "",
        title: "title",
        description: loremIpsum,        
    },
];

export default faunaData;

