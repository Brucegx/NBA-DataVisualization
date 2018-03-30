# NBA Player Shots Data Visualization

###

### Project Description
This is my side project which implement a data visualization base on NBA player. Actually I want to achieve a Soccer player data dashboard but there is no API like stats.nba.com can provide. 

This is Demo picture. You can achieve all functions I describe later by downloading and running "npm start" in terminal. 

![Demo](https://image.ibb.co/dXuGAS/Screenshot_2018_03_30_18_38_04_EDT.png)

In general, I built a dashboard to visualize individual NBA player's shot data. It has a shot chart and 4 line/bar charts. It is realized by ReactJS, D3.js and antd library. 

### Project Details

1. I built a goals-number filter which you can find the player shots data in given number. 
2. I used the color and hexbin size to represent the efficiency and frequency which can provide more detailed visualization areas with made shots straightforwardly. 

![Example](https://image.ibb.co/dXuGAS/Screenshot_2018_03_30_18_38_04_EDT.png)

For example, like Stephen Curry
From this chart we can know he preferred to shotting on slight right of three point line. He shotted on this position at least 6 times with high accuracy. 

3. I implemented automatic association by using antd's autocomplement. 

![AutoComplement](https://image.ibb.co/nuD9VS/Screenshot_2018_03_30_18_39_05_EDT.png)

