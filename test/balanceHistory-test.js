var proxyquire = require('proxyquire');
var nock = require('nock');

const Code = require('code');   // assertion library
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const describe = lab.describe;
const it = lab.it;
const before = lab.before;
const after = lab.after;
const expect = Code.expect;

var dummyTransaction = require('./fixtures/balance-transaction');
var mockBalanceHistory;

var stripeStub  = nock('https://api.stripe.com:443')
  .persist()
  .get('/v1/balance/history')
  .reply(200,dummyTransaction);

mockBalanceHistory = proxyquire('../handlers/balanceHistory', {});

//mockBalanceHistory.balanceHistory();
describe('\nstripe balance test', function () {

  before(() => {
    const promise = mockBalanceHistory.balanceHistory();
    return promise;
  });

  it('Test Case 1', () => {
    return mockBalanceHistory.balanceHistory()
    .then((response) => {
        Code.expect(JSON.stringify(response)).to.deep.equal(JSON.stringify(dummyTransaction));
    }
  ).catch();
  })
});
