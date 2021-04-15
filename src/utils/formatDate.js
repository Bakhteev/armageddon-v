export const FormatDate = (codedDate, shouldFormateDate ) => {
  const Month = [
    { ru: 'Января', eng: 'Jan' },
    { ru: 'Февраля', eng: 'Feb' },
    { ru: 'Марта', eng: 'Mar' },
    { ru: 'Апреля', eng: 'Apr' },
    { ru: 'Мая', eng: 'May' },
    { ru: 'Июня', eng: 'Jun' },
    { ru: 'Июля', eng: 'Jul' },
    { ru: 'Августа', eng: 'Aug' },
    { ru: 'Сентября', eng: 'Sep' },
    { ru: 'Октября', eng: 'Oct' },
    { ru: 'Ноября', eng: 'Nov' },
    { ru: 'Декабря', eng: 'Dec' },
  ]
  let engMonth = new Date(codedDate).toString().split(' ')[1]
  let date = shouldFormateDate.split('-').reverse()

  Month.forEach((item) => (item.eng === engMonth ? (date[1] = item.ru) : null))

  return (date = date.join(' '))
}
