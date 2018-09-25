// joins-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const joins = new Schema({
    requester: { type: String, required: true },
    receiver: { type: String, required: true },
    status: {type: String, required: true}
  }, {
    timestamps: true
  });

  return mongooseClient.model('joins', joins);
};
