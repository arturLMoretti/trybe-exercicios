const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage () {
      const minDamage = this.intelligence;
      const maxDamage = 2 * this.intelligence;
    
      const damage = Math.floor(Math.random() * (maxDamage - minDamage) + minDamage)
      const manaConsumed = (this.mana < 15) ? 0 : 15;
    
      return { 
        damage: damage,
        manaConsumed: manaConsumed,
      }
    },
    };

  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage () {
      const minDamage = this.strength;
      const maxDamage = this.strength * this.weaponDmg;
    
      return Math.floor(Math.random() * (maxDamage - minDamage) + minDamage)
    },
    };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage () {
      const minDamage = 15;
      const maxDamage = this.strength;
    
      return Math.floor(Math.random() * (maxDamage - minDamage) + minDamage)
    
    },
  };
  
  const gameActions = {
    warriorTurn () {
      const warriorDamage = warrior.damage();
      const dragonHP = dragon.healthPoints;
      warrior.damage = warriorDamage;
      dragon.healthPoints = dragonHP - warriorDamage;
    },
    mageTurn () {
      const mageDamageManaConsumed = mage.damage();
      const mageInitialMana = mage.mana;
      const mageDamage = mageDamageManaConsumed.damage;
      const mageManaConsumed = mageDamageManaConsumed.manaConsumed;
      const dragonHP = dragon.healthPoints;

      mage.mana = mageInitialMana - mageManaConsumed;
      mage.damage = mageDamage; 
      
      dragon.healthPoints = dragonHP - mageDamage;
    }, 
    dragonTurn() {
      const dragonDamage = dragon.damage();
      const mageInitialHP = mage.healthPoints;
      const warriorInitialHP = warrior.healthPoints;

      dragon.damage = dragonDamage;

      mage.healthPoints = mageInitialHP - dragonDamage;
      warrior.healthPoints = warriorInitialHP - dragonDamage;
    }, 
    turnUpdate(battleMembers) {
      this.warriorTurn();
      this.mageTurn();
      this.dragonTurn();


      console.table(battleMembers)
    }
   };

  const battleMembers = { mage, warrior, dragon };
  
  // console.table(mage);
  // console.table(warrior);
  // console.table(dragon);
  // gameActions.dragonTurn()
  // console.table(mage);
  // console.table(warrior);
  // console.table(dragon);
  
  console.table(battleMembers);
  gameActions.turnUpdate(battleMembers);