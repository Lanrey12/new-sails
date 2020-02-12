module.exports = {

    sendEmail: function(options) {
    
            var template = "email";
    
            var data = {
                recipientName: "Team",
                senderName: "Vue Hobby",
                senderEmail: "alexolajide197@gmail.com",
                title: options.title,
            };
    
            var opts = {
                    "subject": options.subject,
                    "from_email": "alexolajide197@gmail.com",
                    "from_name": "Service",
                    "to": "alexolajide197@gmail.com",
                    "text": options.title           
            };
    
            sails.hooks.email.send(template, data, opts, function(err) {
                if (err) {sails.log.debug(err); }
                else { sails.log.debug("Sent"); }            
            });
        }
    };