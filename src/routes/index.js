import { Router } from 'express';
import superHero from './superHero';
const allRoutes = Router();
allRoutes.use('/superhero', superHero);
export default allRoutes;

