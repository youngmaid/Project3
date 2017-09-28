## Project3

# Resting B Face App

## Team members 
### Zarrina Niyazova, Natasha Umer, Richard Boles

## Description:
    This app will view an image and render results based off the persons facial expression using Microsoft Emotion API. It can also return results of pictures with multiple faces in the image. 


## UX/UI / User Stories    
    The landing page will display the title of the app at the top and a place to insert the  image. They can chose to upload a file or enter a url. Also, on the landing page is a link to the about page that will explain everything about the app. After submitting an image the computer will show the results of happiness, sadness, surprise, anger, fear, contempt, disgust and neutral. After the image is shown there will also be questions that pop up to ask the user if they are mad or angry. After viewing the results the user can pick a different image to get results for. 

## Timeline and Responsibilities:
  Full CRUD Node Express and database - Zarrina 09/19/2017
React.js - Natasha, Zarrina 09/22/2017
Algorithmia API, calculation algorithm - Natasha 09/23/2017
Connecting front-end to the back-end, Full React CRUD - Zarrina 09/23/2017 
CSS - Natasha, Zarrina, Richard 09/26/2017
Testing Authorization - Zarrina 09/25/2017

## Images

![group project 3 pic 1](https://user-images.githubusercontent.com/15146933/30602917-029c9430-9d34-11e7-9882-f7a9ef6de60c.JPG)

![group project 3 pic 2](https://user-images.githubusercontent.com/15146933/30602773-98bd47bc-9d33-11e7-86f1-211528a6cea1.JPG)

![group project 3 pic 3](https://user-images.githubusercontent.com/15146933/30602799-aa7c32d8-9d33-11e7-8677-272b9198815b.JPG)

![group project 3 pic 4](https://user-images.githubusercontent.com/15146933/30602821-bb83959e-9d33-11e7-847a-7fa8650508ca.JPG)

# Technologies used
React.js, Express.js, PSQL, Algorithmia Emotion API

# Alogrithm to Calculate RBF Syndrome
'''
export default function calculateResult(data) {
  const results = {}
  data.forEach((emotion) => {
    results[emotion.label] = emotion.confidence
  })
  console.log(results)
  if (results["Happy"] >= 0.9){
    return [0, "This person does not have resting bitch face. They are probably smiling all the time, appearing friendly and gregarious to strangers. They are frequently asked for directions by lost tourists."]

  } else if (results["Neutral"] >= .4 && results["Disgust"] >= .3 && results["Happy"] < .1) {
    return [4, "A small to medium amount of resting bitch face is detected. This person needs a hug."]

  } else if ((results["Neutral"] >= .7) && (results["Angry"] >= .2 ||
    results["Disgust"] >= .2 || results["Sad"] >= .2)) {
  return [8, "This person has a high-medium amount of resting bitch face, but may just be having a bad day."]

  } else if (results["Neutral"] >= .5 && (results["Angry"] >= .1 ||
    results["Disgust"] >= .1 || results["Sad"] >= .1)) {
    return [5, "This person has mild resting bitch face."]

  } else if (results["Neutral"] >= .8 && results["Happy"] < .1) {
    return [10, "This person has a high amount of resting bitch face and will kill you with their stare"]


  } else if (results["Neutral"] >= .7 && results["Happy"] < .1) {
     return [6, "This person has a medium amount of resting bitch face detected and is nice to you once you get to know them."]


  } else {
    return [1, "We cannot detect resting bitch face"]
  }
}
  '''

