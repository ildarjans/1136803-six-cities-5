export function getReviewDateString(date) {
  return (
    date.toLocaleDateString(`en-Us`, {month: `long`, year: `numeric`})
  );
}

export function getReviewTimeDateString(date) {
  /*
  @return string like "yyyy-mm-dd"
  */
  return date.toISOString().split(`T`)[0];
}
