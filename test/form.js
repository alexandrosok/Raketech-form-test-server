let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();
let HttpResponse = require('../Helpers/HttpResponse');
let mockTitle = 'Some title';
let mockCompanyDetails = 'Some Company Details';
chai.use(chaiHttp);

describe('/POST Company Details', () => {
    it('it should create a Company Details', (done) => {
        let payload = {
            CompanyDetails: mockCompanyDetails
        };
        chai.request(server)
            .post('/form/company-details')
            .send(payload)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property("status").eql(HttpResponse.Success);
                res.body.should.have.property("message").eql("Company Details stored");
                res.body.should.have.property("data").eql(mockCompanyDetails);
                done();
            });
    });
});

describe('/GET Company Details', () => {
    it('it should GET The Company Details', (done) => {
        chai.request(server)
            .get('/form/company-details/get')
            .end((err, res) => {
                should.exist(res.body);
                res.should.have.status(200);
                res.body.should.be.a('Object');
                res.body.should.have.property('details').eql(mockCompanyDetails);
                res.body.should.have.property('status').eql(HttpResponse.Success);
                res.body.should.have.property('message').eql('Company Details content');
                done();
            });
    });
});


describe('/POST Form Title', () => {
    it('it should create a Form Title', (done) => {
        let payload = {
            title: mockTitle
        };
        chai.request(server)
            .post('/form/title')
            .send(payload)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property("status").eql(HttpResponse.Success);
                res.body.should.have.property("message").eql("Form Title stored");
                res.body.should.have.property("data").eql(mockTitle);
                done();
            });
    });
});

describe('/GET Form Title', () => {
    it('it should GET The Form Title', (done) => {
        chai.request(server)
            .get('/form/title/get')
            .end((err, res) => {
                should.exist(res.body);
                res.should.have.status(200);
                res.body.should.be.a('Object');
                res.body.should.have.property('title').eql(mockTitle);
                res.body.should.have.property('status').eql(HttpResponse.Success);
                res.body.should.have.property('message').eql('Form Title');
                done();
            });
    });
});




