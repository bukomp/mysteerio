## Task:

In the story, Edward claims that he has never seen a pot start boiling. Gunilla thinks that he may have been watching the pot for the same amount of time every time, and that's why he hasn't seen it boil. Gunilla came up with an experiment where she recorded the intervals of time when Edward was not watching the pot. Edward wants to know if it is possible that the pot actually starts boiling after the same amount of time every time. The question is whether Edward's pot starts boiling at the same time every time he cooks it, based on the pattern of the times he looks away from the pot.


## Solution:

To solve this problem I needed to find an overlap between all given intervals. If all intervals overlapped Gunilla was right otherwise Edward was correct.

I wrote a function that takes an array of time intervals and looks for a common period of time among them. It does this by finding the latest starting time and earliest ending time among the intervals. If the latest starting time is after the earliest ending time, there are no overlaps in the intervals. This means there is no chance for the pot to start boiling at the same time every time it is cooked.

<br>

*To test my script I created a small unit test to be sure that my script works correctly.*