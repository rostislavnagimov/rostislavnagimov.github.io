export const colorScheme = () => {
  const date = new Date()
  const hours = date.getUTCHours()
  const minutes = date.getUTCMinutes()

  const hue = Math.round(((Number(hours) * 60) + Number(minutes)) / 4)
  const saturation = 25
  const lightness = 20

  const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`
  const lightColor = `hsl(${hue}, ${saturation}%, ${lightness * 2}%)`
  const lighterColor = `hsl(${hue}, ${saturation}%, ${lightness * 3}%)`
  const lightestColor = `hsl(${hue}, ${saturation}%, ${lightness * 4}%)`

  document.documentElement.style.setProperty('--color', color);
  document.documentElement.style.setProperty('--light-color', lightColor);
  document.documentElement.style.setProperty('--lighter-color', lighterColor);
  document.documentElement.style.setProperty('--lightest-color', lightestColor);
}