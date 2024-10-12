function generateResponse() {
    const query = document.getElementById("query").value.toLowerCase();
    let responseText = '';

    // Predefined responses based on FAQs
    if (query.includes("eligible to purchase hard-copy notes")) {
        responseText = "Users with an active video plan in DBMCI One can purchase the hard-copy notes.";
    } else if (query.includes("when will i get hard-copy notes")) {
        responseText = "The notes will be dispatched in two sets. Set-1 in the first week of November and Set-2 in the first week of January.";
    } else if (query.includes("essential plan") && query.includes("digital notes")) {
        responseText = "No, with the Essential plan, you get access to digital notes through the DBMCI One Notes app as complimentary.";
    } else if (query.includes("refund") || query.includes("cancel my plan")) {
        responseText = "We have a no-cancellation/refund policy. However, you can explore 10% of the free content in the app.";
    } else if (query.includes("add test series and qbank")) {
        responseText = "You can purchase Test Series or Test Series and Qbank as an add-on by the end of October.";
    } else if (query.includes("digital notes") && query.includes("access")) {
        responseText = "You can access digital notes as long as you have an active plan. You will still have access to content viewed even after your plan expires.";
    } else {
        responseText = "Sorry, I couldn't find an answer for your query. Please try again or contact support.";
    }

    // Display the response
    const responseDiv = document.getElementById("response");
    responseDiv.style.display = "block";
    responseDiv.innerHTML = "<strong>Response:</strong> " + responseText;
}
