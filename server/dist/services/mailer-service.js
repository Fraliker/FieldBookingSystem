"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nodemailer = require('nodemailer');
class MailerService {
    constructor() { }
    sendEmail(res, requestDetails) {
        // Not the movie transporter!
        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'fieldbookingsystem@gmail.com',
                pass: 'startbooking' // Your password
            }
        });
        var text = 'Hello ' + requestDetails.user.firstName + ' ' + requestDetails.user.lastName + ',\n\n' + 'Your field booking request has been submitted with Request ID: ' + requestDetails.requestId + '. You will receive an email within the next 48 hours from ' + requestDetails.field.admin.organization + ' for payment arrangements. Thank you!';
        var mailOptions = {
            from: 'fieldbookingsystem@gmail.com',
            to: requestDetails.user.userEmail,
            subject: 'Field Booking Request',
            text: text //, // plaintext body
            // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.json({ yo: 'error' });
            }
            else {
                console.log('Message sent: ' + info.response);
                res.json({ yo: info.response });
            }
            ;
        });
    }
}
exports.MailerService = MailerService;
module.exports = new MailerService();

//# sourceMappingURL=mailer-service.js.map
