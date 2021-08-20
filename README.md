# README

Record Day Wishlist

Record Day Wishlist is a JavaScript/Rails API Single Page Application (SPA), that allows you to add and delete albums to keep track of albums to look for/listen to when record shopping!


* Ruby version:
ruby '2.6.1'

* Installation:
In order to succesfully run the application, make sure you have installed all of the necessary gems by running the following:

$ bundle install

Run $ rails db:seed to seed the database and have albums preloaded onto the DOM.

Usage:
In order to start the server for the application, enter the following line in your terminal:

$ rails s

Then, navigate to the "frontend" directory (or simply expand if using a code editor) and open index.html.

Interacting with the Application

Once the app is open, you can scroll to browse the albums already included in the database. You have the option to delete any album. 

You can also create new albums by filling out the form  where you can input the required information to create the album. After you're done, hit 'Add Album' and your album will be added to the list.

