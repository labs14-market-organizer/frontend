const militaryConvert = (time) => {
  let hours = time.split('');
  let am = "am";
  let combined, subtractedHours, rest;
  if (hours[0] === "0"){
    combined = hours[1] + hours[2] + hours[3] + hours[4] + am;
    return combined;
  } else if (hours[0] === "1" && hours[1] === "2") {
    return hours.join('') + "pm";
  } else if (hours[0] === "1" && (hours[1] === "0" || hours[1] === "1")) {
    return hours.join('') + "am";
  } else {
    combined = parseInt(hours[0] + hours[1]);
    rest = hours[2] + hours[3] + hours[4];
    subtractedHours = combined - 12;
    return (subtractedHours.toString() + rest + "pm");
  }
}

export default militaryConvert;