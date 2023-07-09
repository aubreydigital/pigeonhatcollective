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
  venue: {
    type: String,
    required: [true, 'Venue required.']
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