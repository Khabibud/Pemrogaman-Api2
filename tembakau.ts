let data = [
    {
        name: 'Tembakau Tambeng',
        fill: ['1 ons'],
        price: 16000,
        stock: '15 kg',
    },
    {
        name: 'Tembakau Selopuro',
        fill: ['1 ons'],
        price: 15000,
        stock: '10 kg',
    },
    {
        name: 'Tembakau Temanggung',
        fill: ['1 ons'],
        price: 16000,
        stock: '12 kg',
    }
];

// Menampilkan semua data dalam format tabel
console.table(data);

// TODO 1: Dapatkan semua data dengan nama tertentu
const getDataByName = (name) => data.find(Tembakau => Tembakau.name === name);
console.log("Data dengan nama 'Tembakau Tambeng':", getDataByName('Tembakau Tambeng'));

// TODO 2: Dapatkan data dengan harga tertentu
const getDataByPrice = (price) => data.filter(Tembakau => Tembakau.price === price);
console.log("Data dengan harga '16000':", getDataByPrice('16000'));

// TODO 3: Dapatkan data dengan stock tertentu
const getDataByStock = (stock) => data.filter(Tembakau => Tembakau.stock === stock);
console.log("Data dengan stock 15 kg:", getDataByStock(15));
