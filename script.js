 function isEmail(email){
           var regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
           return regex.test(email);
        }

        function isPasswordValid(password) {
            // At least 8 chars, 1 uppercase, 1 lowercase, 1 number
            var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
            return regex.test(password);
        }

        // Phone number: only digits, max 10
        $("#Phoneno").on("input", function() {
            let val = $(this).val().replace(/\D/g, "");
            if (val.length > 10) val = val.slice(0, 10);
            $(this).val(val);
        });

        // Password show/hide toggle
        $("#togglePassword").on("click", function() {
            const passInput = $("#password");
            const type = passInput.attr("type") === "password" ? "text" : "password";
            passInput.attr("type", type);
            $(this).text(type === "password" ? "Show" : "Hide");
        });

        // Confirm password show/hide toggle
        $("#toggleConfirmPassword").on("click", function() {
            const passInput = $("#confirmpassword");
            const type = passInput.attr("type") === "password" ? "text" : "password";
            passInput.attr("type", type);
            $(this).text(type === "password" ? "Show" : "Hide");
        });

        $("#submitbutton").click(function(event){
            event.preventDefault();
            var errormsg = "";
            var email = $("#Email").val();
            var phone = $("#Phoneno").val();
            var password = $("#password").val();
            var confirmpassword = $("#confirmpassword").val();

            if (!isEmail(email)) {
                errormsg += "<p>Email is not valid</p>";
            }
            if (!$.isNumeric(phone) || phone.length < 10) {
                errormsg += "<p>Phone number is not valid</p>";
            }
            if (!isPasswordValid(password)) {
                errormsg += "<p>Password must be at least 8 characters, include uppercase, lowercase, and a number</p>";
            }
            if (password !== confirmpassword) {
                errormsg += "<p>Passwords do not match</p>";
            }

            var resultDiv = $("#result-message");
            if (errormsg !== "") {
                resultDiv.html("You are <b>not registered</b> as you have not passed all the criteria." + errormsg)
                    .css({"color": "#b30000", "font-size": "1.3em", "font-weight": "bold"});
            } else {
                resultDiv.html("You are <b>registered</b>!")
                    .css({"color": "#008000", "font-size": "1.3em", "font-weight": "bold"});
            }
        });