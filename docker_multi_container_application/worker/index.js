const keys = require('./keys');
const redis = require('redis');

const client = redis.createClient({
    
      host: keys.redisHost,
      port: keys.redisPort,
      retry_strategy: () => 1000
    
  });

  client.connect().then(() => {
    console.log("Redis Connection Successful");
}).catch(err => {
    console.error("Redis Connection Failed");
    console.error(err);
});

const sub = client.duplicate();

sub.connect().then(() => {
    console.log("Sub Connection Successful");
}).catch(err => {
    console.error("Sub Connection Failed");
    console.error(err);
});

  function fib(index) {
    if(index < 2) return 1;
    return fib(index-1) + fib(index-2);
  }

  (async () => {await sub.subscribe('insert', (message) => {
    console.log('Received Message '+ message + " @ "+Date.now());
     client.set('values', message, fib(parseInt(message)));
});})();