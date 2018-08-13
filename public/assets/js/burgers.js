// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        console.log("works")

        var newBurger = {
            burger_name: $("#bu").val().trim()
        };
        if (!newBurger.burger_name) {
            alert("Hello Burger-lover!");
        }
        else{
        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    }
    });


    $(".devourBurger").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    // var newcheez = $(this).data("newcheez");
    console.log(id);

    var burgerDevoured = true;
         


        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: burgerDevoured
        }).then(
            function () {
                console.log("Changed id: ", burgerDevoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
})