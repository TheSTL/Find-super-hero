const superHeroRoute = require('express').Router();
const { sendResponse, handleCustomError } = require('../../utils');
const { findSuperHero } = require('./service');

superHeroRoute.route('/find').post(async (req, res) => {
  try {  
    let { code } = req.body;
    if(!code){
      const err= new Error('Code not found');
      err.code = 404;
      throw err;
    }
    // eslint-disable-next-line prefer-destructuring
    code = code.split(' ')[1];
    const hero = await findSuperHero({ code });
    return sendResponse(res, 200, hero, 'Good to Go');
  } catch (err) {
    return handleCustomError(res, err);
  }
});

module.exports = superHeroRoute;
