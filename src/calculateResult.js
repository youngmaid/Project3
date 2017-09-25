export default function calculateResult(data) {
  const results = {}
  data.forEach((emotion) => {
    results[emotion.label] = emotion.confidence
  })
  console.log(results)
  if (results["Happy"] >= 0.9){
    return [0, "This person does not have resting bitch face"]
  } else if (results["Neutral"] >= .5 && (results["Angry"] >= .1 ||
    results["Disgust"] >= .1 || results["Sad"] >= .1)) {
    return [5, "This person has mild resting bitch face"]
  } else if ((results["Neutral"] > .8 && results["Happy"] < .1)  || results["Neutral"] >= .7 && (results["Angry"] >= .2 ||
    results["Disgust"] >= .2 || results["Sad"] >= .2)) {
    return [10, "This person has a high amount of resting bitch face"]
  } else {
    return [1, "We cannot detect resting bitch face"]
  }
}
