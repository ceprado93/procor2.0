import axios from "axios";

class BookingService {
  constructor() {
    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/booking`,
      withCredentials: true,
    });
  }

  getBookings = () => this.api.get(`/`);
  getOne = (bookingId) => this.api.get(`/details/${bookingId}`);
  getDays = () => this.api.get(`/selectDate`);
  getBookingsByDay = (day) => this.api.get(`/selectbyDate/${day}`);

  saveBooking = (bookingDetails) => this.api.post("/new", bookingDetails);
  editBooking = (bookingId, bookingDetails) => this.api.put(`/edit/${bookingId}`, bookingDetails);
  deleteBooking = (bookingId) => this.api.delete(`/delete/${bookingId}`);
}

export default BookingService;
