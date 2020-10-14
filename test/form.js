let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();
let HttpResponse = require('../Helpers/HttpResponse');
let mockTitle = 'Some title';
let mockCompanyDetails = 'Some Company Details';
let mockSubmitMessage = 'Some message';
let mockAbout = "Some About";
chai.use(chaiHttp);

describe('/POST About Us', () => {
    it('it should create an About Us Record', (done) => {
        let payload = {
            about: mockAbout
        };
        chai.request(server)
            .post('/form/about')
            .send(payload)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property("status").eql(HttpResponse.Success);
                res.body.should.have.property("message").eql("About stored");
                res.body.should.have.property("data").eql(mockAbout);
                done();
            });
    });
});

describe('/GET About Us Content', () => {
    it('it should GET The About us content', (done) => {
        chai.request(server)
            .get('/form/about/get')
            .end((err, res) => {
                should.exist(res.body);
                res.should.have.status(200);
                res.body.should.be.a('Object');
                res.body.should.have.property('about').eql(mockAbout);
                res.body.should.have.property('status').eql(HttpResponse.Success);
                res.body.should.have.property('message').eql('About Content');
                done();
            });
    });
});

describe('/POST Submit Message', () => {
    it('it should create a Submit Message', (done) => {
        let payload = {
            message: mockSubmitMessage
        };
        chai.request(server)
            .post('/form/submit-message')
            .send(payload)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property("status").eql(HttpResponse.Success);
                res.body.should.have.property("message").eql("Submit Message stored");
                res.body.should.have.property("data").eql(mockSubmitMessage);
                done();
            });
    });
});

describe('/GET Submit Message', () => {
    it('it should GET Submit Message', (done) => {
        chai.request(server)
            .get('/form/submit-message/get')
            .end((err, res) => {
                should.exist(res.body);
                res.should.have.status(200);
                res.body.should.be.a('Object');
                res.body.should.have.property('submitMessage').eql(mockSubmitMessage);
                res.body.should.have.property('status').eql(HttpResponse.Success);
                res.body.should.have.property('message').eql('Submit Message Record');
                done();
            });
    });
});

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




