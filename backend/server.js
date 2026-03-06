'use strict';
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const frontOfficeRoutes = require('./routes/frontOffice');
const bookingRoutes = require('./routes/booking');
const financialRoutes = require('./routes/financial');
const housekeepingRoutes = require('./routes/housekeeping');
const analyticsRoutes = require('./routes/analytics');

app.use('/api/front-office', frontOfficeRoutes);
app.use('/api/booking', bookingRoutes);
app.use('/api/financial', financialRoutes);
app.use('/api/housekeeping', housekeepingRoutes);
app.use('/api/analytics', analyticsRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
