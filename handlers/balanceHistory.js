// const stripe = require('stripe');
// const Stripe = stripe.Stripe('sk_test_p0aUILm3TSMktmW9yua6JaG5');

const Stripe = require('stripe')('sk_test_p0aUILm3TSMktmW9yua6JaG');

var balanceHistory = function(){

  return Stripe.balance.listTransactions({
     //transfer : 'tr_17p3f8KAnaEmydMrKIQ77EzM'
   }).then((response) => {
    //  console.log('Inside Balance Response');
    //  console.log(response);
    //  console.log('Exit Balance Response');
     return response;
   })
   .catch((err) => {return err.raw});
};

module.exports = {
  balanceHistory : balanceHistory
};
