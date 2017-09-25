import React, { Component } from 'react';
class About extends Component {
  render() {
    return (
      <div>
      <p>Resting Bitch Face is a serious, serious syndrome. This app will help you determine if you you, or one of your loved ones, suffers from RBF. RBF is a condition that affects both males and females across the planet. In New York, about 70 percent of the population is affected. This app was created by Zarrina Niyazova, Natasha Umer and Richard Boles, who suffer from a serious case of RBF. We created this app as a joke, but it is  based on real scientific data. We used an emotion recognition, <a href="http://www.openu.ac.il/home/hassner/projects/cnn_emotions/LeviHassnerICMI15.pdf">machine-learning API by the USC Information Sciences Institution</a> and Algorithmia that analyzes your face and determines your emotion via convolutional neural networks and mapped binary patterns. After a complicated AI analyzes your emotion (it's super complicated. SUPER COMPLICATED), you are  given a score between 0-1 on happiness, sadness, neutrality, anger, disgust, surprise and fear. Some other super smart researchers determined that if your facial imagery is determined to be "neutral" by your peers with trace amounts of disgust or anger, then you have RBF. We tested multiple pictures of people known to suffer from RBF (think Kanye West) to determine an "RBF" score. Through our testing, We found out that people with high amounts of neutral, low amounts of disgust, and zero amounts of happiness tested higher for "RBF." Test your face today! You can contribute to this research by filling out a "face form" that we will send to the researchers to improve their machine-learning API. </p>
      </div>
    );
  };
}
export default About;
