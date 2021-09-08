/* 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada.Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id.A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa @trybe.com. */

const newEmployees = (emploier) => {
  const employees = {
    id1: emploier('Pedro Guerra'), 
    id2: emploier('Luiza Drumond'), 
    id3: emploier('Carla Paiva'),
  }
  return employees;
};

const emploierGeneration = (name) => {
  const email = name.toLowerCase().split(' ').join('_');
  return {nome:name, email:`${email}@betrybe.com`};
}

console.log(newEmployees(emploierGeneration));
