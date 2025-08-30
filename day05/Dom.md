DOM:
Document Object Model

open dom:

1. Right click -> inspect
2. press f12 or fn+f12
3. ctrl+shift+i

Purple color-> Tag Name -> <>
Black color -> Text value  -> crmsfa 
Brown color -> Attribute Name -> class,id,name,href
Blue color -> Attribute Value -> "user"



<html> -> root tag
<head>
<body> -> 
<div> -> it will div into small part
<input> -> user need to pass information
<img> -> add any image in the appliaction
<a> -> its conatins hyperlink  with text 
<button> -> for click action
<select>
<option>
</html>


Playwright Basic:

-> Css 
-> Xpath
-> Playwright Locators

CSS :
Id -> #attributeValue -> #(id)
ex: #username

Name -> [name=attributeValue]
ex: [name=USERNAME]

Class -> .attributeValue .(class)
ex: .decorativeSubmit

class="input r4 wide mb16 mt8 username"
ex:.input.r4.wide.mb16.mt8.username

Text -> text='attributeValue'
ex: text='Create new account'

Classroom:
Launch browser
Load the url :https://login.salesforce.com/?locale=in
Username: dilip@testleaf.com
Password: Leaf@2025
click on Login 
Get Title page 



  use: { browserName:'chromium',channel:'chrome',
        viewport:null,
        launchOptions:{
         args:['--start-maximized']
       }
      }






Xpath:
Attribute  based xpath:
//input[@id='username']

Text Based xpath:
//span[text()='Minutes']

partial Attribute xpath:
//input[contains(@id,'box-1')]

partial Text based Xpath:
//div[contains(text(),'5G (Lit Violet, 128 GB)')]

Collection based xpath:
(//div[contains(text(),'Samsung Galaxy')])[3]
index value start from [1]
index value it should not go beyond [5]

Advance xpath  or Axes Xpath


(xpath)[22] -> 



