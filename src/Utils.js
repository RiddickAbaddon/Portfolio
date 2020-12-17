/* eslint-disable import/prefer-default-export */
export const getDataByIds = (idsCollection, collection) => {
   const result = []
   if (idsCollection.length) {
      idsCollection.map(({ _id }) => {
         const finded = collection.find((x) => x._id === _id)
         if (finded) result.push(finded)
         return 0
      })
   }
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

export const getThumbnail = (thumbnails, path, size) => {
   if (thumbnails) {
      const width = size[0] || 200
      const height = size[1] || width
      const thumbnail = thumbnails.find((x) => x.name === `${path}/${width}/${height}`)
      if (thumbnail) return thumbnail.url
      return null
   }
   return null
}
