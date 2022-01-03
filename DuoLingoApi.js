import axios from 'axios';

export default class DuoLingoApi {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  _login() {
    var loginUrl =
      'https://www.duolingo.com/login?login=' +
      this.username +
      '&password=' +
      this.password;

    this.loggedIn = axios.get(loginUrl, {withCredentials: true});
    this.loggedIn.then(response => {
      this.cookies = response['headers']['set-cookie'].join('; ');
    });
  }

  _getVocabulary(callback) {
    this.loggedIn.then(res => {
      console.log('getting vocab words');
      axios
        .get('https://www.duolingo.com/vocabulary/overview', {
          headers: {
            Cookie: this.cookies,
          },
        })
        .then(response => {
          let vocabOverview = response['data']['vocab_overview'];
          let words = [];

          for (let i = 0; i < vocabOverview.length; i++) {
            words.push(vocabOverview[i]['word_string']);
          }

          callback(words);
        });
    });
  }
}
