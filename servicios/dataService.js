var datoCatalogo = [
    {
        "nombre": "Fighter",
        "categoria": "Filamento",
        "precio": 600,
        "imagen": "fighter.jpeg",
        "id": "1",
    },
    {
        "nombre": "Driud",
        "categoria": "Resina",
        "precio": 850,
        "imagen": "druid.jpg",
        "id": "2",
    },
    {
        "nombre": "Wizard",
        "categoria": "Filamento",
        "precio": 200,
        "imagen": "wizard.jpg",
        "id": "3",
    },
    {
        "nombre": "Monk",
        "categoria": "Resina",
        "precio": 300,
        "imagen": "monk.jpg",
        "id": "4",
    },
    {
        "nombre": "Paladin",
        "categoria": "Filamento",
        "precio": 350,
        "imagen": "paladin.jpg",
        "id": "5",
    },
    {
        "nombre": "Rogue",
        "categoria": "Resina",
        "precio": 400,
        "imagen": "rogue.jpg",
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