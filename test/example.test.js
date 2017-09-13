'use strict';

var shortid = require('..');
var expect = require('chai').expect;

describe('testing shortid', function(done) {

    before(function(){
        // reset to default alphabet
        shortid.seed(1);
        shortid.characters(false);
    });

    var i;
    for (i=1; i < 20; i++) {
        var id = shortid.generate();
        it('should print 20 examples: ' + id, function(done){
            expect(id).to.not.be.empty;
            expect(id).to.length(12);
            expect(shortid.isValid(id)).to.equal(true);
            //TODO: check if valid id
            done();
        });
    }
});
