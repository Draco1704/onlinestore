var datoCatalogo = [
    {
        "nombre": "Delorean",
        "categoria": "Sedan",
        "precio": 240.000,
        "imagen": "delorean.jpg",
        "id": "1",
    },
    {
        "nombre": "Impala",
        "categoria": "Sedan",
        "precio": 250.000,
        "imagen": "impala.jpg",
        "id": "2",
    },
    {
        "nombre": "Herbie",
        "categoria": "Sedan",
        "precio": 200.000,
        "imagen": "herbie.jpg",
        "id": "3",
    },
    {
        "nombre": "Jurassic",
        "categoria": "SUV",
        "precio": 300.000,
        "imagen": "dino.jpg",
        "id": "4",
    },
    {
        "nombre": "Kystal",
        "categoria": "SUV",
        "precio": 350.000,
        "imagen": "caravana.jpg",
        "id": "5",
    },
    {
        "nombre": "Ecto 1",
        "categoria": "SUV",
        "precio": 400.000,
        "imagen": "ecto1.jpeg",
        "id": "6",
    },
]

class DataService
{
    getProducts(){
        return datoCatalogo;
    }
}
export default DataService;