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
  } else if (results["Neutral"] >= .5 && (results["Angry"] >= .1 ||
    results["Disgust"] >= .1 || results["Sad"] >= .1)) {
    return [5, "This person has mild resting bitch face."]
  } else if (results["Neutral"] >= .7 && results["Happy"] < .1) {
     return [6, "This person has a medium amount of resting bitch face detected and is nice to you once you get to know them."]
   } else if ((results["Neutral"] >= .7) && (results["Angry"] >= .2 ||
    results["Disgust"] >= .2 || results["Sad"] >= .2)) {
    return [8, "This person has a high-medium amount of resting bitch face, but may just be having a bad day."]
  } else if (results["Neutral"] > .8 && results["Happy"] < .1) {
    return [10, "This person has a high amount of resting bitch face and will kill you with their stare"]
  } else {
    return [1, "We cannot detect resting bitch face"]
  }
}
