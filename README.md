# income-tax-calculator
1.Introduction:

This is a website for tax claculation based on user input, here user inputs affects the output of the file, 
tax calculation works based on a formula.

2.Features:

a.Validation of the correct input is done using regular expression if user enters a wrong input in a certain feild it will show an error in that specific feild only.

b.It gives the output as a popup with precise calculation according to user input.

c.It will give an error if the number entered is negative. 

3.Technology:

a.HTML.
b.CSS.
c.JS.
d.Bootstrap.

4.Set-up:
To run the repository locally:

a.Clone the repository:

  open your terminal or command prompt and navigate to the directory you want to store the project in-
  
  Then use the command [git clone https://github.com/ArchitAgrawal14/income-tax-calculator] in the console.
  
b.Navigate to the project folder:

  Use cd(Change directory) command to enter the project directory-
  
  [cd income-tax-calculator]
  
c.Open the project files:

  Once you are in the project file you will find HTML,CSS & Js files. You can open these files in a text editor of your        choice.

d.Run the project:

  You can run the file by double clicking(For some editors) or in case of Vs-code right click and go to "open with live   
  server" or you can use "Alt+L Alt+O" to open file in live server.
  
e.Explore:Now you will be able to View And test the project as per the need.

5.Usage:

a.After following the setup instruction you will enter in a live server there firstly you will need to enter your details   
  like-
  i.Gross annual income.
  
  ii.Extra income.
  
  iii.Deductions that you have like medical premium etc.
  
  iv.Age-There are brackets for age you will have to choose a slot from their.
  
b.All the feilds are mandatory or you will get an error.

c.After entering the details you will need to hit the submit button which will calculate Your overall income after tax the   
result will be in a popup window.  

d.we can close the tab by hitting the close button and can again calculate income by following the same process.

e.we can also reset the input feilds by clicking the reset button.

6.Test Cases:

First Case-Value equal to 800000

  1.Gross annual income:800000

  2.Extra Income:25000

  3.Deductions:25000

  4.age-<40.

  Screenshot:

Second Case-Value less then 800000

  1.Gross annual income:800000

  2.Extra Income:20000

  3.Deductions:25000

  4.age->60

  Screenshot:

  
Third Case-Value greater then 8 lakhs

  1.Gross annual income:900000

  2.Extra Income:200000

  3.Deductions:25000

  4.age->=40 & <60

  Screenshot:

  
Forth Case-Negative number

  1.Gross annual income:-900000

  2.Extra Income:200000

  3.Deductions:25000

  4.age-<40.

  Screenshot:


  
Fifth Case-Decimal number

  1.Gross annual income:900000.34

  2.Extra Income:200000.131

  3.Deductions:25000.12

  4.age->=40 & <60.
  
  Screenshot:

  
Sixth Case-Invalid input in gross annual income

  1.Gross annual income:abg

  2.Extra Income:200000.131

  3.Deductions:25000.12

  4.age->60.

  Screenshot:


Seventh Case-Invalid input in Extra income

  1.Gross annual income:8786876

  2.Extra Income:abg

  3.Deductions:25000.12

  4.age->60.

  Screenshot:


Eight Case-Invalid input in Deductions

  1.Gross annual income:900000

  2.Extra Income:823678

  3.Deductions:25000.abc

  4.age-<40.

  Screenshot:

  
Ninth Case- No input in age

  1.Gross annual income:900000

  2.Extra Income:abc

  3.Deductions:25000.12

  4.age-Empty.

  Screenshot:

  
Tenth Case-Invalid input in All

  1.Gross annual income:900.001.01

  2.Extra Income:abc

  3.Deductions:25000.12.
  
  4.age-Empty.

  Screenshot:

  
  
