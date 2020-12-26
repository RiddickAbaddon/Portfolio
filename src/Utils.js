export const getDataByIds = (idsCollection, collection) => {
   const result = []
   if (idsCollection.length && collection.length) {
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

export const getThumbnailSize = (thumbnail) => {
   const width = thumbnail[0] || 200
   const height = thumbnail[1] || width

   return {
      w: width,
      h: height,
   }
}

export const getThumbnail = (thumbnails, path, thumbnailSizes, imageErrors) => {
   if (thumbnails && thumbnails.length) {
      const size = getThumbnailSize(thumbnailSizes)
      const thumbnail = thumbnails.find((x) => x.name === `${path}/${size.w}/${size.h}`)
      if (thumbnail) return thumbnail.url
      const error = imageErrors.find((x) => x === `${path}/${size.w}/${size.h}`)
      if (error) return 'error'
      return null
   }
   return null
}

export const capitalizeFirstLetter = (string) => {
   return string.charAt(0).toUpperCase() + string.slice(1)
}
