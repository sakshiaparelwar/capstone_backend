const eventSchema = require("../schema/eventSchema");

exports.createEvent = async (req, res) => {
  try {
    const data = await eventSchema.create(req.body);
    // console.log(data);

    res.status(201).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "INternal Server error" });
  }
};

exports.showeventData = async (req, res) => {
  try {
    const alldata = await eventSchema.find({});
    // console.log(alldata);

    res.status(201).send(alldata);
  } catch (error) {
    console.log(error);
  }
};

exports.getEventsdetails = async (req, res, next) => {
  try {
    const eventData = await eventSchema.findById(req.params.id);
    // console.log(eventData);

    res.status(201).send(eventData);
  } catch (error) {
    console.log(error);
  }
};
