# rock_paper_scissors
Feb 1 2022
Last April, I tried this project but couldn't get it to work exactly right. I went to look at some other examples from people who had finished, and that inspired me to reapply to college for accounting. That was a costly mistake, both financially and time. After re doing much of the odin project and FCC's basic JS course, I am going to finish this damned project this time.

16:45
Stuck on step 6, the game function. Otherwise, code has went smoothly. Attempted to create user interface and connect it to script as player selection, but failed. May work more on this later, but I will likely wait until Odin revisits the project. Will continue tomorrow. Or tonight.

Code for connecting to hmtl
//let select = document.querySelector('select');
//let para = document.querySelector('p');
/*
let playerSelection = select;
select.addEventListener('change', playRound(playerSelection, compSelection)); 
*/

Feb 7
After almost a week of slacking and not working when I knew I should be, I have come further in this project than I thought I could without looking at others' code. At this point, I can have five games played with unique moves from both the computer and the user, keep track of the winner of each round, and return an overall victor. The only detail left is to make sure the functions recognize different cases for the user imputs.
1730 update: I passed the playerSelection variable through toLowerCase() and reassigned it to itself to make all player inputs change to lower case, then changed the switches in playRound() to look for the lower case versions. EZ.