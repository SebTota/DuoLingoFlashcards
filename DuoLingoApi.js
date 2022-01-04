import axios from 'axios';

export default class DuoLingoApi {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    /*
     * words
     * translations
     * learning_language
     * from_language
     */
    this.languages = {};
    this._login();
  }

  async work(callback) {
    await this.loggedIn;
    await this._getVocabulary();
    await this._getTranslations('French');
    callback();
  }

  _login() {
    var loginUrl =
      'https://www.duolingo.com/login?login=' +
      this.username +
      '&password=' +
      this.password;

    this.loggedIn = axios.get(loginUrl, {withCredentials: true});
    this.loggedIn.then(response => {
      this.cookies = response.headers['set-cookie'].join('; ');
    });
  }

  async _getVocabulary() {
    let res = await axios.get('https://www.duolingo.com/vocabulary/overview', {
      headers: {
        Cookie: this.cookies,
      },
    });

    let vocabOverview = res.data.vocab_overview;
    let language = res.data.language_string;
    let words = [];

    for (let i = 0; i < vocabOverview.length; i++) {
      words.push(vocabOverview[i].word_string);
    }

    this.languages[language] = {};
    this.languages[language].words = words;
    this.languages[language].learning_language = res.data.learning_language;
    this.languages[language].from_language = res.data.from_language;
  }

  async _getTranslations(language) {
    let url = [
      'https://d2.duolingo.com/api/1/dictionary/hints/',
      this.languages[language].learning_language,
      '/',
      this.languages[language].from_language,
      '?tokens=["',
      this.languages[language].words.join('", "'),
      '"]',
    ].join('');

    let res = await axios.get(url, {
      headers: {
        Cookie: this.cookies,
      },
    });

    this.languages[language].translations = res.data;
  }

  getTranslations(language = 'French') {
    console.log(this.languages);
    return this.languages[language].translations;
  }
}
