
/* GET Travel view */
const index = (req, res) => {
  res.render('travel', { title: 'Travlr Gateways' });
};

module.exports = {
    travel
};