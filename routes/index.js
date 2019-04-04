var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', '2184', {
  host: 'localhost',
  dialect: 'mariadb'
});

var redis = require("redis");
var client = redis.createClient({ url: 'redis://dev-ad.k2leyz.0001.use1.cache.amazonaws.com:6379' });



sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

/* GET home page. */
router.get('/', function (req, res, next) {
const hashesArr=['sess:new','req:new']




Promise.all(hashesArr.map(hash => new Promise((resolve, reject)=>{
  client.smembers(hash, (err, sets) => {
    resolve(sets)
  })
})))
/**Got array with arrays of hashes */
.then((result)=>res.json(result))
  // new Promise((resolve, reject) => {
    
  // })
  //   .then(keys => {
  //     let hashes = []
  //     Promise.all(keys.map(key => new Promise((resolve, reject) => {
  //       client.hgetall(`sess:${key}`, (err, hash) => {
  //         resolve(hashes.push(hash))
  //       })
  //     })
  //     ))
  //       .then(() => res.json(hashes))
  //   })




  // const Model = Sequelize.Model;
  // class Sess extends Model { }
  // Sess.init({
  //   session_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  //   token: { type: Sequelize.STRING(36) },
  //   date: { type: Sequelize.DATE },
  //   redirect_url: { type: Sequelize.STRING },
  //   x_f_f: { type: Sequelize.STRING(15) },
  //   useragent: { type: Sequelize.TEXT },
  //   platform: { type: Sequelize.STRING(50) },
  //   country_code: { type: Sequelize.STRING(5) },
  //   utm_id: { type: Sequelize.INTEGER(11) },
  //   publisher: { type: Sequelize.STRING(10) }
  // }, {
  //     freezeTableName: true,
  //     tableName: "session_tokens",
  //     sequelize,
  //     timestamps: false
  //   });
  // Sess.sync({ force: true });

  // Utm.init({
  //   utm_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  //   utm_source: { type: Sequelize.STRING },
  //   utm_medium: { type: Sequelize.STRING },
  //   utm_campaign: { type: Sequelize.STRING },
  //   utm_term: { type: Sequelize.STRING },
  //   utm_content: { type: Sequelize.STRING },
  //   kw: { type: Sequelize.STRING },
  //   c: { type: Sequelize.STRING },
  //   t: { type: Sequelize.STRING },
  //   adpos: { type: Sequelize.STRING },
  //   network: { type: Sequelize.STRING },
  //   campaignid: { type: Sequelize.STRING },
  //   adgroupid: { type: Sequelize.STRING },
  //   targetid: { type: Sequelize.STRING },
  //   physical: { type: Sequelize.STRING },
  //   a: { type: Sequelize.STRING },
  //   gclid: { type: Sequelize.STRING },
  //   msclkid: { type: Sequelize.STRING },
  //   extra_params_json: { type: Sequelize.TEXT }
  // }, {
  //     freezeTableName: true,
  //     tableName: "session_tokens",
  //     sequelize,
  //     timestamps: false
  //   });
  // Utm.sync({ force: true });















  //res.json('Hello')
});

module.exports = router;
