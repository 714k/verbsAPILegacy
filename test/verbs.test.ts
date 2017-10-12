import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../src/App';

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET api/v1/verbs', () => {

  it('responds with JSON array', () => {
    return chai.request(app).get('/api/v1/verbs')
      .then(res => {
        expect(res.status).to.equal(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('array');
        expect(res.body).to.have.length(5);
      });
  });

  it('should include bet verb', () => {
    return chai.request(app).get('/api/v1/verbs')
      .then(res => {
        let bet = res.body.find(verb => verb.title === 'bet');
        expect(bet).to.exist;
        expect(bet).to.have.all.keys([
          'id',
          'title',
          'titleES',
          'forms',
          'meaning',
          'img',
          'examples'
        ]);
      });
  });

});
