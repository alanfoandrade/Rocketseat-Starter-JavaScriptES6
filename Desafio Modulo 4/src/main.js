import api from './api';

class App {
  constructor() {
    /* // Funão delay aciona o .then após 1s
    const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
    async function umPorSegundo() {
      await delay();
      console.log('1s');
      await delay();
      console.log('2s');
      await delay();
      console.log('3s');
    }
    umPorSegundo(); */

    async function getUserFromGithub(user) {
      try {
        console.log(await api.get(`/users/${user}`));
      } catch (err) {
        console.log('Usuário não existe');
      }
    }
    // getUserFromGithub('diego3g');
    // getUserFromGithub('diego3g124123');

    class Github {
      static async getRepositories(repo) {
        try {
          console.log(await api.get(`/repos/${repo}`));
        } catch (err) {
          console.log('Repositório não existe');
        }
      }
    }
    // Github.getRepositories('rocketseat/awesome');
    // Github.getRepositories('rocketseat/dslkvmskv');

    const buscaUsuario = async usuario => {
      try {
        console.log(await api.get(`/users/${usuario}`));
      } catch (err) {
        console.log('Usuário não existe');
      }
    };
    buscaUsuario('diego3g');
  }
}

new App();
