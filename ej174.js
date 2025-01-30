const json = `{
    "character": {
    "name": "Aria the Brave",
    "class": "Warrior",
    "level": 10,
    "hp": 120,
    "mana": 50,
    "equipment": {
        "weapon": {
        "name": "Flaming Sword",
        "damage": 35,
        "element": "Fire"
        },
        "armor": {
        "name": "Dragon Scale Shield",
        "defense": 50
        }
    },
    "inventory": [
        { "item": "Health Potion", "type": "Consumable", "effect": "+50 HP" },
        { "item": "Mana Potion", "type": "Consumable", "effect": "+30 Mana" },
        {
        "item": "Mystic Gem",
        "type": "Artifact",
        "effect": "Boosts magic power"
        }
    ],
    "quests": [
        { "name": "Slay the Dragon", "status": "Completed" },
        { "name": "Find the Lost Amulet", "status": "In Progress" }
    ]
    }
}`;

// Transformar el JSON en un objeto de JavaScript.
const pasarAObjeto = JSON.parse(json)

// Extraer y mostrar el name, class and level del personaje (character).
console.log(`Nombre: ${pasarAObjeto.character.name}, ${pasarAObjeto.character.class}, ${pasarAObjeto.character.level}`)

// Iterar la colección de inventory y mostrar el name y effect de cada item en pantalla.


// Mostar el name de los quests que todavía están en status In Progress.


// Ejemplo de lo que hay que mostrar en pantalla: