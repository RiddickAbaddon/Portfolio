/* eslint-disable import/prefer-default-export */
export const getDataByIds = (idsCollection, collection) => {
   const result = []
   idsCollection.map(({ _id }) => {
      const finded = collection.find((x) => x._id === _id)
      if (finded) result.push(finded)
      return 0
   })
   return result
}

export const removeHtmlTags = (text) => {
   return text.replace(/(<([^>]+)>)/gi, '').trim()
}

export const getPhrase = (phrases, name, language) => {
   if (phrases) {
      const phrase = phrases.find((x) => x.name === name)
      return phrase ? phrase[language] : name
   }
   return '...'
}
