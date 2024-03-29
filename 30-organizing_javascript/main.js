// organizing-javascript

// 1. Plain Old Javascript Objects

// 2. Object Constructors

// 3. Factory Functions

// 4. Module Pattern

// 5. Classes

// 6. ES6 Modules

function pokemonFactory(name, level) {
  let health = level * 2;

  const getLevel = () => level;
  const getName = () => name;

  const die = () => console.log(`${name} has reached zero hp. I'm dead!`);

  const damage = (x) => {
    health -= x;

    if (health <= 0) die();
  };

  const attack = (enemy) => {
    if (level < enemy.getLevel()) {
      damage(1);
      console.log(`${enemy.getName()} has damaged ${name}`);
    }

    if (level >= enemy.getLevel()) {
      enemy.damage(5);
      console.log(`${name} has damaged ${enemy.getName()}.`);
    }
  };

  return { attack, damage, getLevel, getName };
}

const ashPlayer = pokemonFactory("pikachu", 10);
const computerPlayer = pokemonFactory("ratata", 5);

ashPlayer.attack(computerPlayer);
computerPlayer.attack(ashPlayer);
ashPlayer.attack(computerPlayer);
