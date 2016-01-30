# Interview-NodeJsValidationClass

## Overview
This is the first assignment that I will make open-source with the agreement of the company that interviewed me. It was a software development company based in Sweden that had the API architecture builded on EcmaScript 5 object-oriented design.

## Task

So the task sounds like this: 

You must write a validation class for server-side field sanitization and obviously, validation. 

You need to consider the following:

- the class must return a global object with all the errors 
- the class must be scalable
- the class methods must be easy-to-reuse
- any tweaks and hacks are welcome if the final result is better

The class must have the following types of validation:

- presence validation
- array presence validation
- e-mail validation
- length validation
- compare validation

## Result

I made the class mapping all the static methods on the base constructor. I also used the module exports to give the assign the class to a global property for easy object handling across the scopes.

Basically, I designed the class as a helper class for any type of validation. I also used the JsDoc for better readability and documentation. 

Anyone is free to fork and develop.
