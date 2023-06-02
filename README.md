# hwil0803-tracker

# Application Configuration and Deployment Procedures:
To set up and operate this system: 

1.	Open terminal and enter “ npm run dev ”
2.	There is a link to the local host that will open the web page up 
3.	This web page has been tested and functions well on both safari and chrome, but I suggest using chrome as it is easier to access the local storage and see previously logged items. 
4.	When testing the responsive design of the webpage, simply drag the web app screen smaller when inspecting the code. 

# Development process, iterations, and improvements: 

As this was a completely new process for me, I followed along in class the set up and configuration of VS code and Git hup accounts. Over the span on around 3 weeks, and with the help of tutors, I was able to set up the correct files so that the web page is stored on GitHub, including the necessary parcel and package files to make the web page run very well. Although I don’t have a super in depth understanding of how it functions, the set up that is applied to my work made sure that every time I saved the code in VS, it updated on the web page which made for a quick and seamless coding experience. 

I was able to immediately see the effects of the changes that I made to my code. This allowed for easier recognition for when an error occurred, as I was able to go back a stage and try again. 

## Setting up the web page

Starting with the simpler code, HTML and CSS, I created and quickly styled the main page of my sight. This process was relatively simple and there was minimal complication when doing this. 

## HTML coding the form

As per my tutors suggestion, starting to code the JavaScript was rather daunting, so I just put together the form at the base of the page, to get all the correct input parameters for the data in HTML without styling. W3 schools and some quick google searches on the correct inputs for the data and UI I was wanting made it a relatively quick and easy process. 

## CSS coding the form
Not just for coding the form but the whole web page, I tried to keep **most** of the units to ‘vw’ as I found it to be the most responsive for various screen sizes.

## User Interaction
The first aspect of the code which I implemented and prioritised was getting the submit button at the end of the form to log the data input by the user to the console. This is the addTask function. By following the week 4 tutorial I was successful able to get this working. The function worked so the data passes directly through the input parameters and popped up in the console. As there are some unique inputs, having more than one under the same umbrella, the code demonstrated in Scrimba week 4 needed to be adapted. These elements are the physical and psychological ratings which had 2 data inputs each. 

The psychological checkboxes was a challenge, as a function specifically for them had to be created to then be added to the addTask event. ChatGPT helped me form this code based off what I had already attempted, so the emotions in the form of checkboxes that were selected, appeared in the console when added. 

After the tasks were successfully logging to the console, I had to write a function so that the code appended to the web page. This function is called displayTask and the way it works is it creates a list item which is linked to display the added innerHTML of the label, followed by task details. For a more clear idea of how it works see the code comments lines 70-98. The display function is called later on down the code displaying the task by appending it to the output list. 

## Modal/Pop Up
Initially I tried to install and apply an API for the pop up modal, however this was not working for me. I admit it was most likely due to a lack of understanding of the type of page and program that I was working with as it kept of rejecting an @import tag. 

I used the tutorial in week 13 labelled modal/pop up and stripped it back to the very basic functionality of just a button that caused a blank square to pop up on the web page. I then moved the form that I had made into this modal and changed the button so that my ADD ITEM button triggered it to pop up. 

The close button on the modal is located at the top, it would have been nice to also have one located at the bottom of the screen 

## Delete Button
Once the main user interaction was working, I implemented a delete button which had to appear when a new task was added to the outputList. To successfully do this I used the week 4 Scrimba tutorial again. Since there was no existing delete button in the HTML, as it’s a DOM manipulation when a new item is added to the list, I was able to copy the code directly from the Scrimba and I functioned well so I reviewed it but didn’t make any changes until later. 

## Local Storage 
The local storage was by far the most challenging aspect of this assignment. I actually went back in progress when attempting this as other aspects of my code stopped working, and there was so much change I was losing track of what was going on. About three times I reverted back to a stage were everything seemed to be working, however, after consultation with Rob I had error messages that I was ignoring as I couldn’t see how it was effecting the code, however fixing these errors pointed out to me made the local storage work. 

Coding the local storage itself started with the week 8 Scrimba tutorial, but I was getting confused with what inputs matched up with my code in a couple of places. I used what I had already coded and used chatGPT as a debugging tool, to correct my errors so the data was logging to the local storage, when the submit button was triggered. 

After it was appearing in the local storage, similar to the data input to output list process, in simple terms I had to get the data from the local storage and append them back to the list so that when the page was refreshed, the form wasn’t resetting. 


## Delete Button x Local Storage
The finial challenging aspect of JS that I was able to implement is ensuring the delete button deleted the item in the list from not only the DOM but also the local storage. This is so that when the page is refreshed, all the items from the local storage aren’t re-appearing. To do this I had to link the delete button to the items unique identifier ‘id’ and run it through a call back function, checking its in the . I ran into a few errors, and used chatGPT to explain what was going wrong in the code and how to fix it. For a better understanding see code comments lines 100-126. 

# Guidance for future developers to understand and build upon the work
In its current state, the web page functions without an errors that I can identify. Elements of improvement to build on is mainly UI. 

## UI that I would like to have implemented include: 

- A multi-stage form, where the inputs are separated by category with a progress bar at the top of it. 

![Carousel](/Users/hollywills/Desktop/DECO2017/hwil0803-tracker/public/images/carousel.png)

- A small icon/image to be displayed on the output list, indicating what category they selected in the form

![Icon](/.images/icon.png)

- Tasks scrolling in a carousel, and iconography for the delete button 
- Numbers attached to the scale
- A conformation pop up window before an item gets removed 
- Some more athlete related images on the main web page. 

All these improvements to the work have been carefully considered in the Web App Design assignment. They would make the users experience easier and more streamline I lacked the time and coding knowledge to complete these myself. 

# Design Changes made after A2
-	The submit button was changed to green to make it more intuitive 
-	The images of athletes were removed from the sides as I thought it made it look tacky as they were just    randomly floating around. 

# Recommendations for further improvements or extensions
The initial idea for this application was to bridge the communication gap between athletes and trainers. To help create a more realistic and sustainable environment for people who participate in lots of sport, and different of forms of sport, looking after them physically and mentally. 

Therefore, a great extension for this application would be a way for doctors, trainers, coaches, nutritionists and even parents to access the data submitted by the athlete, so they can keep track and understand the how they are coping. 

This tracking application would also be great in the form of an apple watch extension, so that it is able to track more accurately what the athlete has been doing. Linking this application to the apple health app for example, could provide a lot of valuable data those looking out for the athlete. 






