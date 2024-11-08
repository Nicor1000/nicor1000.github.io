// Transición del video a la siguiente pantalla al hacer clic en el botón "Know More"
document.getElementById('know-more-btn').addEventListener('click', function () {
    document.getElementById('video-section').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
});

// Función para cargar la ventana principal sin mostrar el video cuando se hace clic en "Home"
const homeLink = document.querySelector('.home-link');
homeLink.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('video-section').style.display = 'none';
    document.getElementById('main-content').classList.remove('hidden');
});

// Descripción de componentes del kart
const components = {
    engine: {
        name: "Engine",
        info: "The engine is the powerhouse of the kart, delivering unmatched acceleration and speed."
    },
    wheels: {
        name: "Wheels",
        info: "Durable and high-performance wheels provide superior grip on the track."
    },
    exhaust: {
        name: "Exhaust",
        info: "The exhaust system is optimized for maximum efficiency and performance."
    },
    chassis: {
        name: "Chassis",
        info: "The chassis is designed for strength and agility, ensuring a smooth ride."
    },
    seat: {
        name: "Seat",
        info: "The seat provides comfort and safety during high-speed races."
    }
};

// Mostrar información del componente del kart al hacer clic en los puntos interactivos
document.querySelectorAll('.hotspot').forEach(hotspot => {
    hotspot.addEventListener('click', function () {
        const part = this.dataset.part;
        const partInfo = components[part];

        document.getElementById('part-name').innerText = partInfo.name;
        document.getElementById('part-info').innerText = partInfo.info;
    });
});
