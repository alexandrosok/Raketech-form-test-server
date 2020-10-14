let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();
let HttpResponse = require('../Helpers/HttpResponse');

chai.use(chaiHttp);

describe('/GET Form Title', () => {
    it('it should GET The Form Title', (done) => {
        chai.request(server)
            .get('/form/title/get')
            .end((err, res) => {
                should.exist(res.body);
                res.should.have.status(200);
                res.body.should.be.a('Object');
                res.body.should.have.property('title');
                res.body.should.have.property('status').eql(HttpResponse.Success);
                res.body.should.have.property('message').eql('Form Title');
                done();
            });
    });
});

describe('/POST Form Title', () => {
    it('it should create a Form Title', (done) => {
        let payload = {
            title: 'Some title'
        };
        chai.request(server)
            .post('/form/title')
            .send(payload)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property("status").eql(HttpResponse.Success);
                res.body.should.have.property("message").eql("Form Title stored");
                res.body.should.have.property("data").eql(payload.title);
                done();
            });
    });
});



