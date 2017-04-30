import Mongoose = require("mongoose");

interface ISportModel extends Mongoose.Document {
    sportName: string;
    sportId: number;
}
export default ISportModel;