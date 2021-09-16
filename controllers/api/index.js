const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const projectRoutes = require('./projectRoutes');
const tourRoutes = require('./tourRoutes');
const albumRoutes = require('./albumRoutes');

router.use('/users', userRoutes);
// router.use('/projects', projectRoutes);
router.use('/tours', tourRoutes);
router.use('/albums', albumRoutes);

module.exports = router;
