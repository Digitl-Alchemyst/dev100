function createAbility(ability, action) {
  return {
    ability: ability,
    action: action,
    use: function (name) {
      console.log(`${name} is ${action}!`);
    },
  };
}

function createCharacter(name, ...abilities) {
  const character = { name };

  abilities.forEach((ability) => {
    // Bind the name to the ability's use function
    character[ability.ability] = ability.use.bind(null, name);
  });

  return character;
}

const fly = createAbility("fly", "flying");
const swim = createAbility("swim", "swimming");

const hero = createCharacter("SuperHero", fly, swim);

hero.fly(); // Logs: "SuperHero is flying!"
hero.swim(); // Logs: "SuperHero is swimming!"
