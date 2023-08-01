import { Schema, model, models } from 'mongoose';

const EventSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  artists: {
    type: Array,
    required: [true, 'Artist(s) is/are required']
  },
  visual: {
    type: Array,
    required: false,
  },
  vendors: {
    type: Array,
    required: false,
  },
  venue: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: [true, 'Address required.']
  },
  cost: {
    type: Number,
    required: [true, 'Cost required.']
  },
  dayof: {
    type: Number,
    required: false,
  },
  over21: {
    type: Boolean,
    required: [true, 'Over 21?']
  },
  date: {
    type: String,
    required: [true, 'Date required.']
  },
  image: {
    type: String,
  },
  title: {
    type: String
  },
  tickets: {
    type: String
  },
  tags: {
    type: Array
  }
});

const Event = models.Event || model('Event', EventSchema);

export default Event;