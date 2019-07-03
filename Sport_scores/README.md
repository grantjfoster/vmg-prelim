Steps to scoring for each sport

1. Load jupyter notebook named "Score_Template"
2. The template includes the code needed to score the sport according to the variables wind,tempertaure and rain, adjust the numbers accordingly to fit the sport. For example if wind is neccessary, make the score a 3 instead of 0, but if wind is bad for the sport, 0 instead of 3.
3.If rain is needed, mark the cells as code instead of markdown and run the cells
4.The code will automatically total up the scores of each respective variable into a single number, so that it can be input into the google maps API
5. The csv is then saved to the folder "Score_Datsets", make sure to rename the file in the format "sport_final_score"

additional info: the scores of temperature wasd determined off of intuition. The score of wind was determined by taking the average of the wind throughout and entire month, then taking quintiles of all the values, thus giving us a scale to compare the winds to. The rain dataset originally consisted of strings of weather conditions, instead we converted it into a binary variable as to whether it rained or not. We once again took the monthly average and found the quintiles using the .qcut() function to determine a scale to score the rain off of.
