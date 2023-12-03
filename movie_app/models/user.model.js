const mongoose = require('mongoose');
const { Schema } = mongoose;
const { uuid } = require('uuidv4');

// Defining the User schema
const userSchema = new Schema({
  email: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  username: { type: String },
  contact: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String , enum : ["user" , "admin"]},
  isLoggedIn: { type: Boolean, default: false },
  uuid: { type: String, default: uuid()},
  accesstoken: { type: String, default: '' },
  coupens: [
    {
      id: { type: Number },
      discountValue: { type: Number }
    }
  ],
  bookingRequests: [
    {
      reference_number: { type: Number},
      coupon_code: { type: Number },
      show_id: { type: Number },
      tickets: [
        {
          seatNumber: { type: Number}
        }
      ]
    }
  ]
});

userSchema.pre('save', function (next) {
  if (!this.username) {
    this.username = `${this.first_name}_${this.last_name}`;
  }
  next();
});

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;