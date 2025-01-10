# us-capitals-quiz

This is a revision of one of my first JS projects, in which I made a quiz about the capitals of the US states. Every time I looked at my old code on this project, I vomited a bit inside my mouth, so I figured I would redo it all using React.js & TypeScript.

In this app, the user a chance to test their knowledge of the US state capitals. I created all the data myself, using no frameworks or APIs. It is also mobile-responsive.

To play, the user clicks the 'Let's Go!' button on the initial page, then answers the multiple-choice questions as to what the capital of the given state is. Upon loading of each question, two buttons appear at the bottom, one of which is the 'Reset Game', which, upon clicking, reloads the site & resets the score & user's progress. The other button that displays at the bottom is the 'Next' button, which is initially disabled. Upon clicking any of the four options, the 'Next' button displays, & the user can proceed to the next question. On the final question, the 'next' button contains the text "See Results!". For every question, its potential answers are displayed in a random order each round.

After selecting an answer, the user gets immediate feedback & an update on their current score for the round, including which option was the correct one and if the one they selected was incorrect. Also, the number of questions answered out of 50 appears at the top of each question, so the user can see their progress. Once the final question is answered 

It was so nice to build this project in React compared to building it in vanilla JS, as I did once upon a time. I will forever appreciate the wizardry of React in terms of the ability to conditionally render parts of an app and in terms of the ability to handle data and preserve it when needed.
