class Usuario {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
  }

  isAdmin() {
    return this.admin === true; //testa se é admin e retorna true ou false
  }
}

class Admin extends Usuario {
  constructor(email, senha) {
    super(email, senha);

    this.admin = true;
  }
}

const User1 = new Usuario('alanfrank@gmail.com', 'senhasecreta');
const Admin1 = new Admin('alanfrank@gmail.com', 'senhasecreta');

console.log(User1.isAdmin());
console.log(Admin1.isAdmin());

const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' }
];

//idades dos usuarios
var idades = usuarios.map(usuario => usuario.idade);
console.log(idades);

//usuarios da Rocketseat idade > 18 anos
var Rocket18 = usuarios.filter(
  usuario => usuario.empresa === 'Rocketseat' && usuario.idade >= 18
);
console.log(Rocket18);

//busca funcionarios da empresa Google
var findGoogles = usuarios.find(usuario => usuario.empresa === 'Google');
console.log(findGoogles);

//Multiplica idade dos usuarios e filtra os abaixo de 50 anos
var calculo = usuarios
  .map(usuario => ({
    ...usuario,
    idade: usuario.idade * 2
  }))
  .filter(usuario => usuario.idade <= 50);
console.log(calculo);

const arr = [1, 2, 3, 4, 5];
arr.map(item => item + 10);
console.log(arr);

const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = usuario => usuario.idade;
console.log(mostraIdade(usuario));

const nome = 'Diego';
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

const promise = () => new Promise((resolve, reject) => resolve());
