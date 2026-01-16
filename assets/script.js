function show(div) {
    const data = {
        dhaka: {
            title: "Dhaka Division",
            image: "assets/images/Dhaka.png",
            places: [
                {
                    name: "Lalbagh Fort",
                    img: "assets/images/lalbagh.jpg",
                    desc: "A Mughal-era fort built in the 17th century and one of the most famous historical landmarks in Dhaka."
                },
                {
                    name: "Ahsan Manzil",
                    img: "assets/images/ahsan-monjil.jpg",
                    desc: "Known as the Pink Palace, it was the residence of the Nawabs of Dhaka and now serves as a museum."
                }
            ]
        },

        chattogram: {
            title: "Chattogram Division",
            image: "assets/images/Chattogram.png",
            places: [
                {
                    name: "Cox’s Bazar Beach",
                    img: "assets/images/cox.jpg",
                    desc: "The longest natural sea beach in the world and a major tourist destination."
                },
                {
                    name: "Foy’s Lake",
                    img: "assets/images/foys.jpg",
                    desc: "A scenic man-made lake surrounded by hills, popular for recreation."
                }
            ]
        },

        rajshahi: {
            title: "Rajshahi Division",
            image: "assets/images/Rajshahi.png",
            places: [
                {
                    name: "Mahasthangarh",
                    img: "assets/images/moha.jpg",
                    desc: "The oldest archaeological site in Bangladesh, dating back to 300 BC."
                },
                {
                    name: "Puthia Temple Complex",
                    img: "assets/images/puthia.jpg",
                    desc: "A historic temple complex famous for terracotta ornamentation."
                }
            ]
        },

        khulna: {
            title: "Khulna Division",
            image: "assets/images/khulna.png",
            places: [
                {
                    name: "Sundarbans",
                    img: "assets/images/sundar.jpg",
                    desc: "The world’s largest mangrove forest and home of the Royal Bengal Tiger."
                },
                {
                    name: "Sixty Dome Mosque",
                    img: "assets/images/sixtydome.jpg",
                    desc: "A UNESCO World Heritage Site built in the 15th century."
                }
            ]
        },

        barishal: {
            title: "Barishal Division",
            image: "assets/images/Barishal.png",
            places: [
                {
                    name: "Kuakata Beach",
                    img: "assets/images/kuakata.jpg",
                    desc: "A unique beach where both sunrise and sunset can be seen."
                },
                {
                    name: "Durga Sagar",
                    img: "assets/images/durgasagar.jpg",
                    desc: "A historic large pond and popular tourist attraction."
                }
            ]
        },

        sylhet: {
            title: "Sylhet Division",
            image: "assets/images/Sylhet.png",
            places: [
                {
                    name: "Jaflong",
                    img: "assets/images/jaflong.jpg",
                    desc: "A scenic area famous for tea gardens, rivers, and hills."
                },
                {
                    name: "Ratargul Swamp Forest",
                    img: "assets/images/ratargul.jpg",
                    desc: "The only freshwater swamp forest in Bangladesh."
                }
            ]
        },

        rangpur: {
            title: "Rangpur Division",
            image: "assets/images/Rangpur.png",
            places: [
                {
                    name: "Tajhat Palace",
                    img: "assets/images/tajhat.jpg",
                    desc: "A historic palace now used as a museum."
                },
                {
                    name: "Kantajew Temple",
                    img: "assets/images/kantajew.jpg",
                    desc: "A famous terracotta temple dedicated to Lord Krishna."
                }
            ]
        },

        mymensingh: {
            title: "Mymensingh Division",
            image: "assets/images/Maymansingh.jpg",
            places: [
                {
                    name: "Shoshi Lodge",
                    img: "assets/images/shoshi.jpg",
                    desc: "A historic lodge built during the British period."
                },
                {
                    name: "Muktagacha Zamindar Bari",
                    img: "assets/images/muktagacha.jpg",
                    desc: "An old zamindar palace with historical importance."
                }
            ]
        }
    };

    let html = `
        <h2>${data[div].title}</h2>
        <h3>Division Overview Image</h3>
        <img src="${data[div].image}" alt="${data[div].title}">

        <h3>Famous Places</h3>
        <table>
            <tr>
                <th>Place Name</th>
                <th>Image</th>
                <th>Description</th>
            </tr>
    `;

    data[div].places.forEach(p => {
        html += `
            <tr>
                <td><b>${p.name}</b></td>
                <td><img src="${p.img}"></td>
                <td>${p.desc}</td>
            </tr>
        `;
    });

    html += `</table>`;

    document.getElementById("content").innerHTML = html;
}