const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => Math.floor((Math.random() * (dragon.strength - 15 + 1) + 15));
const warriorDamage = () => Math.floor((Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength) + 1) + warrior.strength);
const mageAttack = () => {
  const mageDemange = math.floor((Math.random() * ((mage.intelligence * 2) - mage.intelligence) + 1) + mage.intelligence);
  
}

console.log(warriorDamage());