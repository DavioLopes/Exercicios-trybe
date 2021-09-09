//1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:
const numbers = [19, 21, 30, 3, 45, 22, 15];

const num = numbers.find((item) => 
  item % 3 === 0 && item % 5 === 0);
console.log(num);

//2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Irenee', 'Fernando', 'Maria'];
const findNameWithFiveLetters = names.find((item) => item.length === 5);
console.log(findNameWithFiveLetters);

//3 - Utilize o find para encontrar a música com id igual a 31031685, caso ela exista:

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]
function findMusic(id) {
  const music = musicas.find((item) => item.id === id);
  console.log(music.title);
}
console.log(findMusic('31031685'));


