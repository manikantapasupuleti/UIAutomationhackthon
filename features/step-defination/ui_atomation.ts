import { Given, Then, When } from "@wdio/cucumber-framework";


Given(/^User is entering new owner in petclinic application$/, async function () 
{
    await browser.url("https://spring-petclinic-community.herokuapp.com/owners/13")
    await browser.pause(1000);
});

