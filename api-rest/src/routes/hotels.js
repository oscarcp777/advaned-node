import HotelCtrl from '../controller/hotel.controller';
import express from 'express';
const router = express.Router();
// API Server Endpoints
router.get('/hotels',HotelCtrl.search.bind(HotelCtrl));
router.get('/hotels/:id',HotelCtrl.get);
router.post('/hotels',HotelCtrl.create);
router.put('/hotels/:id',HotelCtrl.update);
router.delete('/hotels/:id',HotelCtrl.delete);

export default router;
