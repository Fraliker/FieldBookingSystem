import Mongoose = require("mongoose");

interface IFieldTypeModel extends Mongoose.Document {
    fieldTypeName: string;
    fieldTypeId: number;
}
export default IFieldTypeModel;