let mapOptions = {
    center: [51.5073219, -0.1276474],
    zoom:15
}

let map = new L.map('map', mapOptions);

let layer = new L.TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);



    let apiKey = "cf7c06a11bd54cc4ae642d431a7d8c28",
        marker = null;


    const addressSearchControl = L.control.addressSearch(apiKey , {
        position: "topleft",
        placeholder: "Enter an address here",
        resultCallback : (address) => {
            if(!address){
                return;
            }
            if(marker != null){
                map.removeLayer(marker);
            }
            marker = L.marker([address.lat, address.lon]).addTo(map);
            map.setView([address.lat, address.lon],17);
        }
    });

    map.addControl(addressSearchControl);